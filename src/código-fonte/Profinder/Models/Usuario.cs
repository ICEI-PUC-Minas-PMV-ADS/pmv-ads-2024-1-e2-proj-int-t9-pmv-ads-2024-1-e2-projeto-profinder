using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Security;
using Microsoft.CodeAnalysis;

namespace Profinder.Models 
{   
    // Brian: Cria a tabela no banco de dados
    [Table("Usuários")]
    
    public class Usuario
    {
        [Key]
        public int Id { get; set; }

        [DisplayName("Nome Completo")]
        [Required(ErrorMessage = "O nome do usuário é obrigatório")]
        public string NomeUsuario { get; set; }

        [DisplayName("E-mail")]
        [Required(ErrorMessage = "O e-mail é obrigatório")]
        [EmailAddress(ErrorMessage = "E-mail inválido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O CPF é obrigatório")]
        public string CPF { get; set; }

        [DisplayName("Data de Nascimento")]
        [Required(ErrorMessage = "A data de nascimento é obrigatória")]
        public DateTime DataNascimento { get; set; }

        [DisplayName("Nº de Telefone")]
        [Required(ErrorMessage = "O número de telefone é obrigatório")]
        public string Telefone { get; set; }

        [DisplayName("Endereço Completo")]
        [Required(ErrorMessage = "O endereço é obrigatório")]
        public string Endereco { get; set; }

        [DisplayName("Nº da Residência")]
        [Required(ErrorMessage = "O número da residência é obrigatório")]
        public int NumeroResidencia { get; set; }

        [Required(ErrorMessage = "O CEP é obrigatório")]
        public int Cep { get; set; }

        [Required(ErrorMessage = "A cidade é obrigatória")]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "O bairro é obrigatório")]
        public string Bairro { get; set; }

        public string? Complemento { get; set; }

        // Brian: Propriedades para indicar a escolha do usuário
        [DisplayName("Cuidador de Idosos")]
        public bool ProcurandoCuidadorIdosos { get; set; }

        [DisplayName("Cuidador de Pessoas com Deficiência")]
        public bool ProcurandoCuidadorDeficiencia { get; set; }

        // Brian: Setando false na aplicação
        public Usuario()
        {
            
            ProcurandoCuidadorIdosos = false;
            ProcurandoCuidadorDeficiencia = false;
        }
    }
}