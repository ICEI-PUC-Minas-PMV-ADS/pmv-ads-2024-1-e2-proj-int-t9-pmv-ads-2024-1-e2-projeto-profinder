using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Profinder.Models;
using System;
using System.Linq;
using System.Security.Claims;

namespace Profinder.Controllers
{
    public class ContratacaoController : Controller
    {
        private readonly AppDbContext _context;

        public ContratacaoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult RegistrarContratacao(int profissionalId, string detalhesPaciente, DateTime dataInicio, DateTime dataFim, TimeSpan horaInicio, TimeSpan horaFim)
        {
            var profissional = _context.Usuarios.FirstOrDefault(u => u.Id == profissionalId);
            if (profissional == null) return NotFound("Profissional não encontrado.");

            int clienteId = GetAuthenticatedUserId();
            var cliente = _context.Usuarios.FirstOrDefault(u => u.Id == clienteId);
            if (cliente == null) return NotFound("Cliente não encontrado.");

            var contratacao = new Contratacao
            {
                ClienteId = clienteId,
                ProfissionalId = profissionalId,
                DetalhesPaciente = detalhesPaciente,
                DataInicio = dataInicio,
                DataFim = dataFim,
                HoraInicio = horaInicio,
                HoraFim = horaFim
            };

            _context.Contratacoes.Add(contratacao);
            _context.SaveChanges();

            return RedirectToAction("Etapa2", new { id = contratacao.Id });
        }

        public IActionResult Etapa2(int id)
        {
            var contratacao = _context.Contratacoes.FirstOrDefault(c => c.Id == id);
            if (contratacao == null) return NotFound();

            return View(contratacao);
        }

        public IActionResult SolicitarAgendamentos()
        {
            int profissionalId = GetAuthenticatedUserId();  // Obtém o ID do profissional autenticado

            var solicitacoes = _context.Contratacoes
                .Include(c => c.Cliente)  // Inclui a entidade Cliente
                .Where(c => c.ProfissionalId == profissionalId && c.Status == "Pendente")
                .ToList();

            return View(solicitacoes);
        }

        [HttpPost]
        public IActionResult AtualizarStatus(int id, string novoStatus)
        {
            var contratacao = _context.Contratacoes.FirstOrDefault(c => c.Id == id);
            if (contratacao == null) return NotFound();

            contratacao.Status = novoStatus;
            _context.SaveChanges();

            return RedirectToAction("Etapa2", new { id = id });
        }

        [HttpPost]
        public IActionResult ResponderSolicitacao(int contratacaoId, string resposta)
        {
            var contratacao = _context.Contratacoes.FirstOrDefault(c => c.Id == contratacaoId);
            if (contratacao == null) return NotFound("Solicitação não encontrada.");

            contratacao.Status = resposta == "Aceitar" ? "Confirmado" : "Recusado";
            _context.SaveChanges();

            return RedirectToAction("SolicitarAgendamentos");
        }

        private int GetAuthenticatedUserId()
        {
            if (User.Identity.IsAuthenticated)
            {
                string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (!string.IsNullOrEmpty(userId) && int.TryParse(userId, out int id))
                {
                    return id;
                }
            }
            return 0;
        }
    }
}
