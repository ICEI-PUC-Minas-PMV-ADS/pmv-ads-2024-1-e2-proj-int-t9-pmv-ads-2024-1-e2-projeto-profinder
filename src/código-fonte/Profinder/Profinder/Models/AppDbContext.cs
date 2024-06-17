using Microsoft.EntityFrameworkCore;

namespace Profinder.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Profissional> Profissionais { get; set; }
        public DbSet<Contratacao> Contratacoes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuração do mapeamento de herança para a tabela de usuários
            modelBuilder.Entity<Usuario>()
                .HasDiscriminator<string>("Discriminator")
                .HasValue<Cliente>("Cliente")
                .HasValue<Profissional>("Profissional");

            // Aplicar configurações do modelo Contratacao usando Fluent API
            modelBuilder.ApplyConfiguration(new ContratacaoConfiguration());
        }
    }
}
