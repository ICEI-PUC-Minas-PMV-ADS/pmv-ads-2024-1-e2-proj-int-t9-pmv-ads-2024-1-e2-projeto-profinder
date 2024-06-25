using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Profinder.Models;

namespace Profinder.Controllers
{
    public class UsuariosController : Controller
    {
        private readonly AppDbContext _context;
        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: Usuarios
        public async Task<IActionResult> Index()
        {
            return View(await _context.Usuarios.ToListAsync());
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string email, string senha)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(senha))
            {
                ViewBag.Message = "E-mail e/ou senha inválidos!";
                return View();
            }

            var usuario = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);

            if (usuario == null)
            {
                ViewBag.Message = "E-mail e/ou senha inválidos!";
                return View();
            }

            bool senhaOk = BCrypt.Net.BCrypt.Verify(senha, usuario.Senha);

            if (!senhaOk)
            {
                ViewBag.Message = "E-mail e/ou senha inválidos!";
                return View();
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, usuario.NomeUsuario),
                new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),
                new Claim(ClaimTypes.Role, usuario.Perfil.ToString())
            };

            var usuarioIdentity = new ClaimsIdentity(claims, "login");
            var principal = new ClaimsPrincipal(usuarioIdentity);

            var authenticationProperties = new AuthenticationProperties
            {
                AllowRefresh = true,
                ExpiresUtc = DateTime.UtcNow.AddHours(12),
                IsPersistent = true,
            };

            await HttpContext.SignInAsync(principal, authenticationProperties);

            return RedirectToAction("Index", "Home");
        }

        [AllowAnonymous]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        // GET: Usuarios/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var usuario = await _context.Usuarios.FirstOrDefaultAsync(m => m.Id == id);
            if (usuario == null)
            {
                return NotFound();
            }

            return View(usuario);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id, NomeUsuario, Email, CPF, DataNascimento, Telefone, Endereco, NumeroResidencia, Cep, Cidade, Bairro, Complemento, Senha, ProcurandoCuidadorIdosos, ProcurandoCuidadorDeficiencia, Perfil, Habilidades, Experiencia, Formacao, SobreMim, CNPJ")] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                bool isEmailInUse = await IsEmailInUse(usuario.Email);
                if (isEmailInUse)
                {
                    ModelState.AddModelError("Email", "Este email já está em uso.");
                    return View(usuario);
                }

                usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);

                if (usuario.Perfil == Perfil.Cliente)
                {
                    var cliente = new Cliente
                    {
                        NomeUsuario = usuario.NomeUsuario,
                        Email = usuario.Email,
                        CPF = usuario.CPF,
                        DataNascimento = usuario.DataNascimento,
                        Telefone = usuario.Telefone,
                        Endereco = usuario.Endereco,
                        NumeroResidencia = usuario.NumeroResidencia,
                        Cep = usuario.Cep,
                        Cidade = usuario.Cidade,
                        Bairro = usuario.Bairro,
                        Complemento = usuario.Complemento,
                        Senha = usuario.Senha,
                        ProcurandoCuidadorIdosos = usuario.ProcurandoCuidadorIdosos,
                        ProcurandoCuidadorDeficiencia = usuario.ProcurandoCuidadorDeficiencia,
                        Perfil = usuario.Perfil,
                        NecessidadesEspecificas = usuario.NecessidadesEspecificas
                    };

                    _context.Add(cliente);
                }
                else if (usuario.Perfil == Perfil.Profissional)
                {
                    var profissional = new Profissional
                    {
                        NomeUsuario = usuario.NomeUsuario,
                        Email = usuario.Email,
                        CPF = usuario.CPF,
                        DataNascimento = usuario.DataNascimento,
                        Telefone = usuario.Telefone,
                        Endereco = usuario.Endereco,
                        NumeroResidencia = usuario.NumeroResidencia,
                        Cep = usuario.Cep,
                        Cidade = usuario.Cidade,
                        Bairro = usuario.Bairro,
                        Complemento = usuario.Complemento,
                        Senha = usuario.Senha,
                        Perfil = usuario.Perfil,
                        Habilidades = usuario.Habilidades,
                        Experiencia = usuario.Experiencia,
                        Formacao = usuario.Formacao,
                        SobreMim = usuario.SobreMim,
                        CNPJ = usuario.CNPJ
                    };

                    _context.Add(profissional);
                }

                await _context.SaveChangesAsync();

                TempData["SuccessMessage"] = "Parabéns, o seu cadastro foi realizado com sucesso! Faça o login =)";

                return RedirectToAction(nameof(Login));
            }
            return View(usuario);
        }

        private async Task<bool> IsEmailInUse(string email)
        {
            var user = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);
            return user != null;
        }

        // GET: Usuarios/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            ViewBag.Iniciais = GetInitials(usuario.NomeUsuario);
            ViewBag.NomeCompleto = usuario.NomeUsuario;

            return View(usuario);
        }

        public async Task<IActionResult> AreaProfissionais()
        {
            var profissionais = await _context.Usuarios
                                              .Where(u => u.Perfil == Perfil.Profissional)
                                              .ToListAsync();

            return View(profissionais);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id, NomeUsuario, Email, CPF, DataNascimento, Telefone, Endereco, NumeroResidencia, Cep, Cidade, Bairro, Complemento, Senha, ProcurandoCuidadorIdosos, ProcurandoCuidadorDeficiencia, Perfil, Habilidades, Experiencia, Formacao, SobreMim, CNPJ")] Usuario usuario)
        {
            if (id != usuario.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    var existingUsuario = await _context.Usuarios.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);
                    if (existingUsuario == null)
                    {
                        return NotFound();
                    }

                    if (!string.IsNullOrWhiteSpace(usuario.Senha) && usuario.Senha != existingUsuario.Senha)
                    {
                        usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);
                    }
                    else
                    {
                        usuario.Senha = existingUsuario.Senha;
                    }

                    _context.Update(usuario);
                    await _context.SaveChangesAsync();

                    ViewBag.SuccessMessage = "Alterações salvas com sucesso!";
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UsuarioExists(usuario.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return View(usuario);
            }
            return View(usuario);
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuarios.Any(e => e.Id == id);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var usuario = await _context.Usuarios.FirstOrDefaultAsync(m => m.Id == id);
            if (usuario == null)
            {
                return NotFound();
            }

            return View(usuario);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario != null)
            {
                _context.Usuarios.Remove(usuario);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private string GetInitials(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return string.Empty;
            }

            var initials = string.Join("", name.Split(' ').Select(n => n[0]));
            return initials.ToUpper();
        }
    }
}
