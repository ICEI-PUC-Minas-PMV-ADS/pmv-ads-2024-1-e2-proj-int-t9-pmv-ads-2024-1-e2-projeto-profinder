using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Profinder.Models;
using Profinder.Hubs;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
namespace Profinder.Controllers
{
    public class ContratacaoController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<NotificationHub> _hubContext;

        public ContratacaoController(AppDbContext context, IHubContext<NotificationHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        [HttpPost]
        public async Task<IActionResult> RegistrarContratacao(int profissionalId, string detalhesPaciente, DateTime dataInicio, DateTime dataFim, TimeSpan horaInicio, TimeSpan horaFim)
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
                HoraFim = horaFim,
                Status = "Pendente" // Adicione um status inicial
            };

            _context.Contratacoes.Add(contratacao);
            await _context.SaveChangesAsync();

            // Enviar notificação para o profissional
            var hubContext = HttpContext.RequestServices.GetRequiredService<IHubContext<NotificationHub>>();
            await hubContext.Clients.User(profissionalId.ToString()).SendAsync("ReceiveNotification", "Você tem uma nova solicitação de agendamento.");

            return RedirectToAction("Etapa2", new { id = contratacao.Id });
        }

        public IActionResult Etapa2(int id)
        {
            var contratacao = _context.Contratacoes.FirstOrDefault(c => c.Id == id);
            if (contratacao == null) return NotFound();

            return View(contratacao);
        }

        public IActionResult PedidosPendentes()
        {
            int clienteId = GetAuthenticatedUserId();
            var pedidosPendentes = _context.Contratacoes
                .Where(c => c.ClienteId == clienteId && c.Status == "Pendente")
                .Include(c => c.Profissional)
                .ToList();

            return View(pedidosPendentes);
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
        public async Task<IActionResult> ResponderSolicitacao(int contratacaoId, string resposta)
        {
            var contratacao = _context.Contratacoes.FirstOrDefault(c => c.Id == contratacaoId);
            if (contratacao == null) return NotFound("Solicitação não encontrada.");

            contratacao.Status = resposta == "Aceitar" ? "Confirmado" : "Recusado";
            _context.SaveChanges();

            // Verificar se ainda há solicitações pendentes para o profissional
            var solicitacoesPendentes = _context.Contratacoes.Any(c => c.ProfissionalId == contratacao.ProfissionalId && c.Status == "Pendente");
            if (solicitacoesPendentes)
            {
                await _hubContext.Clients.User(contratacao.ProfissionalId.ToString()).SendAsync("ReceiveNotification", "Você tem uma nova solicitação de agendamento.");
            }

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
