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
            // Verifica se o e-mail e a senha não são nulos ou vazios
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(senha))
            {
                ViewBag.Message = "E-mail e/ou senha inválidos!";
                return View();
            }

            // Busca o usuário pelo e-mail
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);

            // Verifica se o usuário existe
            if (usuario == null)
            {
                ViewBag.Message = "E-mail e/ou senha inválidos!";
                return View();
            }

            // Verifica a senha usando BCrypt
            bool senhaOk = BCrypt.Net.BCrypt.Verify(senha, usuario.Senha);

            // Se a senha estiver incorreta
            if (!senhaOk)
            {
                ViewBag.Message = "E-mail e/ou senha inválidos!";
                return View();
            }

            // Se a senha estiver correta
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, usuario.NomeUsuario),
                new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),  // Mudança aqui para armazenar o ID
                new Claim(ClaimTypes.Role, usuario.Perfil.ToString())
            };


            var usuarioIdentity = new ClaimsIdentity(claims, "login");
            var principal = new ClaimsPrincipal(usuarioIdentity);

            // Define as propriedades de autenticação
            var authenticationProperties = new AuthenticationProperties
            {
                AllowRefresh = true,
                ExpiresUtc = DateTime.UtcNow.AddHours(12),
                IsPersistent = true,
            };

            // Faz login do usuário
            await HttpContext.SignInAsync(principal, authenticationProperties);

            // Redireciona para a página de edição do perfil do usuário
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

        // Exibir a página para o usuário
        public IActionResult Create()
        {
            return View();
        }

        // Ao indicar a requisição como "POST", automaticamente o .NET compreende que a primeira propriedade executará o método GET
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id, NomeUsuario, Email, CPF, DataNascimento, Telefone, Endereco, NumeroResidencia, Cep, Cidade, Bairro, Complemento, Senha, ProcurandoCuidadorIdosos, ProcurandoCuidadorDeficiencia, Perfil, Habilidades, Experiencia, Formacao, SobreMim, CNPJ")] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                // Verificar se o email já está em uso
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
                return RedirectToAction(nameof(Index));
            }
            return View(usuario);
        }

        private async Task<bool> IsEmailInUse(string email)
        {
            // Verifique se o email está em uso no banco de dados
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
            return View(usuario);
        }

        // POST: Usuarios/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
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

                    // Verifica se a senha foi alterada
                    if (!string.IsNullOrWhiteSpace(usuario.Senha) && usuario.Senha != existingUsuario.Senha)
                    {
                        // Criptografa a nova senha
                        usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);
                    }
                    else
                    {
                        // Mantém a senha antiga
                        usuario.Senha = existingUsuario.Senha;
                    }

                    _context.Update(usuario);
                    await _context.SaveChangesAsync();

                    // Exibe mensagem de sucesso na mesma página
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

                // Retorna para a mesma view de edição
                return View(usuario);
            }
            return View(usuario);
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuarios.Any(e => e.Id == id);
        }

        // GET: Usuarios/Delete/5
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

        // POST: Usuarios/Delete/5
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
    }
}
