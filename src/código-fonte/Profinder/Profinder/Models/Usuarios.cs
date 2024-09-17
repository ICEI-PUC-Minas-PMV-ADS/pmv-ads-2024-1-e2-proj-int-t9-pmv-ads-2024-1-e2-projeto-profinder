using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Profinder.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }

        // Brian: DisplayName é utilizado para converter o nome da propriedade
        // Brian: Required torna o campo obrigatório e o "ErrorMessage" exibe o motivo ao usuário.

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
        public DateOnly DataNascimento { get; set; }

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

        [BindProperty]
        [Required(ErrorMessage = "A senha é obrigatória")]
        [DataType(DataType.Password)]
        public string Senha { get; set; }


        // Brian: Propriedades para indicar a escolha do usuário
        [DisplayName("Cuidador de Idosos")]
        public bool ProcurandoCuidadorIdosos { get; set; }

        [DisplayName("Cuidador de Pessoas com Deficiência")]
        public bool ProcurandoCuidadorDeficiencia { get; set; }

        [DisplayName("Perfil")]
        public Perfil Perfil { get; set; }

        [DisplayName("Cuidados Especiais")]
        public string? NecessidadesEspecificas { get; set; }
        public string? Habilidades { get; set; }
        [DisplayName("Experiência")]
        public string? Experiencia { get; set; }
        [DisplayName("Formação Acadêmica")]
        public string? Formacao { get; set; }
        [DisplayName("Sobre Mim")]
        public string? SobreMim{ get; set; }
        public string? CNPJ { get; set; }


        // Brian: Setando false na aplicação
        public Usuario()
        {

            ProcurandoCuidadorIdosos = false;
            ProcurandoCuidadorDeficiencia = false;

        }

    }

        public class Profissional : Usuario
        {
        }

        public class Cliente : Usuario
        {
        }

        public enum Perfil
        {
            Cliente,
            Profissional
        }
    
}

