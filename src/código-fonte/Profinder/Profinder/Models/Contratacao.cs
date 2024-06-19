using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Profinder.Models
{
    public class Contratacao
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public int ProfissionalId { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }
        public TimeSpan HoraInicio { get; set; }
        public TimeSpan HoraFim { get; set; }
        public string DetalhesPaciente { get; set; }
        public decimal Valor { get; set; }
        public string Status { get; set; } = "Pendente";

        

        
        public virtual Usuario Cliente { get; set; }
        public virtual Usuario Profissional { get; set; }
        public virtual Avaliacao Avaliacao { get; set; }
    }

    // Configuração do modelo usando Fluent API
    public class ContratacaoConfiguration : IEntityTypeConfiguration<Contratacao>
    {
        public void Configure(EntityTypeBuilder<Contratacao> builder)
        {
            // Configure a relação entre Contratacao e Profissional
            builder
                .HasOne(c => c.Profissional)
                .WithMany()
                .HasForeignKey(c => c.ProfissionalId)
                .OnDelete(DeleteBehavior.Restrict);

            // Configure a relação entre Contratacao e Cliente
            builder
                .HasOne(c => c.Cliente)
                .WithMany()
                .HasForeignKey(c => c.ClienteId)
                .OnDelete(DeleteBehavior.Restrict);

            // Configure a relação entre Contratacao e Avaliacao
            builder
                .HasOne(c => c.Avaliacao)
                .WithOne(a => a.Contratacao)
                .HasForeignKey<Avaliacao>(a => a.ContratacaoId);
        }
    }
}
