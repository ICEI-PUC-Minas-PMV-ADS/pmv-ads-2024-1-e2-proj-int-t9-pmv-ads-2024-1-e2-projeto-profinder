namespace Profinder.Models
{
    public class Avaliacao
    {
        public int Id { get; set; }
        public int Nota { get; set; }
        public string Comentario { get; set; }
        public DateTime DataAvaliacao { get; set; }

        public int ProfissionalId { get; set; }
        public Profissional Profissional { get; set; }

        // Chave estrangeira para Contratacao
        public int ContratacaoId { get; set; }
        public Contratacao Contratacao { get; set; }
    }
}
