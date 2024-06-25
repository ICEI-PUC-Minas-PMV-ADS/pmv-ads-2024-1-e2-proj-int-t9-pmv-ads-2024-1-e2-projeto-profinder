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
        public async Task<IActionResult> RegistrarContratacao(int profissionalId, string detalhesPaciente, DateTime dataInicio, DateTime dataFim, TimeSpan horaInicio, TimeSpan horaFim, decimal valor)
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
                Valor = valor,
                Status = "Pendente"
            };

            _context.Contratacoes.Add(contratacao);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.User(profissionalId.ToString()).SendAsync("ReceiveNotification", "Você tem uma nova solicitação de agendamento.");

            return RedirectToAction("Etapa2", new { id = contratacao.Id });
        }

        public IActionResult Etapa2(int id)
        {
            var contratacao = _context.Contratacoes.FirstOrDefault(c => c.Id == id);
            if (contratacao == null) return NotFound();

            return View(contratacao);
        }

        public IActionResult Etapa3(int id)
        {
            var contratacao = _context.Contratacoes
                .Include(c => c.Profissional)
                .Include(c => c.Cliente)
                .FirstOrDefault(c => c.Id == id);

            if (contratacao == null)
            {
                return NotFound();
            }

            var viewModel = new Etapa3ViewModel
            {
                NomeProfissional = contratacao.Profissional.NomeUsuario,
                DataHoraServico = $"Do dia {contratacao.DataInicio:dd/MM/yyyy} às {contratacao.HoraInicio} ao dia {contratacao.DataFim:dd/MM/yyyy} às {contratacao.HoraFim}",
                EnderecoCliente = contratacao.Cliente.Endereco,
                ValorPago = contratacao.Valor
            };

            ViewBag.ContratacaoId = contratacao.Id;
            return View(viewModel);
        }

        public IActionResult PedidosPendentes()
        {
            int clienteId = GetAuthenticatedUserId();
            var pedidosPendentes = _context.Contratacoes
                .Where(c => c.ClienteId == clienteId && (c.Status == "Pendente" || c.Status == "Confirmado" || c.Status == "Pago" || c.Status == "Recusado"))
                .Include(c => c.Profissional)
                .ToList();

            return View(pedidosPendentes);
        }


        public IActionResult SolicitarAgendamentos()
        {
            int profissionalId = GetAuthenticatedUserId();

            var solicitacoes = _context.Contratacoes
                .Include(c => c.Cliente)
                .Where(c => c.ProfissionalId == profissionalId)
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
            await _context.SaveChangesAsync();

            // Verificar se ainda há solicitações pendentes para o profissional
            var solicitacoesPendentes = _context.Contratacoes.Any(c => c.ProfissionalId == contratacao.ProfissionalId && c.Status == "Pendente");
            if (solicitacoesPendentes)
            {
                await _hubContext.Clients.User(contratacao.ProfissionalId.ToString()).SendAsync("ReceiveNotification", "Você tem uma nova solicitação de agendamento.");
            }

            return RedirectToAction("SolicitarAgendamentos");
        }

        [HttpPost]
        public async Task<IActionResult> ProcessarPagamento(int ContratacaoId)
        {
            var contratacao = _context.Contratacoes
                .Include(c => c.Profissional)
                .Include(c => c.Cliente)
                .FirstOrDefault(c => c.Id == ContratacaoId);

            if (contratacao == null)
            {
                return NotFound();
            }

            // Simulação de pagamento
            // Aqui você pode integrar com uma API de pagamento real
            var pagamentoEfetuado = SimularPagamento(contratacao.Valor);

            if (pagamentoEfetuado)
            {
                contratacao.Status = "Pago";
                await _context.SaveChangesAsync();

                return RedirectToAction("MinhasContratacoes");
            }

            return View("ErroPagamento"); // Crie uma view para exibir erro de pagamento
        }

        private bool SimularPagamento(decimal valor)
        {
            // Simulação de sucesso de pagamento
            return true;
        }

        public IActionResult MinhasContratacoes()
        {
            var userId = GetAuthenticatedUserId();
            var userRole = User.FindFirstValue(ClaimTypes.Role);

            IEnumerable<Contratacao> contratacoes;

            if (userRole == "Cliente")
            {
                contratacoes = _context.Contratacoes
                    .Where(c => c.ClienteId == userId && c.Status == "Pago")
                    .Include(c => c.Profissional)
                    .ToList();
            }
            else if (userRole == "Profissional")
            {
                contratacoes = _context.Contratacoes
                    .Where(c => c.ProfissionalId == userId && c.Status == "Pago")
                    .Include(c => c.Cliente)
                    .ToList();
            }
            else
            {
                return Unauthorized();
            }

            return View(contratacoes);
        }

        [HttpPost]
        public async Task<IActionResult> AvaliarProfissional(int contratacaoId, int nota, string comentario)
        {
            var contratacao = _context.Contratacoes
            .Include(c => c.Profissional)
            .FirstOrDefault(c => c.Id == contratacaoId);

            if (contratacao == null) return NotFound();

            contratacao.Avaliacao = new Avaliacao
            {
                Nota = nota,
                Comentario = comentario,
                DataAvaliacao = DateTime.Now,
                ProfissionalId = contratacao.ProfissionalId
            };

            await _context.SaveChangesAsync();
            return RedirectToAction("MinhasContratacoes");

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
