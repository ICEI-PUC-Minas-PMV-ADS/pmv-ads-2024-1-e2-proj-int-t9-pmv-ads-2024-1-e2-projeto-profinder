using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProFinder_MVC.Models
{
    
    [Table("Usuarios")]
    public class Usuario
    {
        [Key]
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public DateOnly DataNasc {  get; set; }

        [BindProperty]
        [DataType(DataType.Password)]
        public string Senha { get; set; }

        public string CPF { get; set; }

        public string NumeroCel { get; set; }

        public string Logradouro { get; set; }

        public string NResidencia { get; set; }

        public string Bairro { get; set; }

        public string Cidade { get; set; }

        public string Estado { get; set; }

        public string Complemento { get; set; }

        public Perfil Perfil { get; set; }

    }

    public class Cliente : Usuario
    {
        public string NecessidadesEspecificas { get; set; }
    }

    public class Profissional : Usuario
    {
        public string Habilidades { get; set; }

        public string Experiencia { get; set; }

        public string Formacao { get; set; }

        public float PrecoServico { get; set; }

        public string CNPJ { get; set; }
    }

    public enum Perfil
    {
        Cliente,
        Profissional
    }
}

