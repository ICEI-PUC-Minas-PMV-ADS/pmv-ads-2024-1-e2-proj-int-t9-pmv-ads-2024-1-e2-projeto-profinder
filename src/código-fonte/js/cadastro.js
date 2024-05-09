function atualizarParagrafo() {
    var select = document.getElementById('tipo');
    var escolha = select.options[select.selectedIndex].value;

    var paragrafo = document.getElementById('mensagem');
    var checkboxAreas = document.getElementById("checkboxAreas")

    if (escolha === 'usuario') {
        paragrafo.textContent = 'Selecione o tipo de profissional que está buscando (você pode selecionar mais de uma opção):';
        checkboxAreas.style.display = "block";
    } else if (escolha === 'profissional') {
        paragrafo.textContent = 'Selecione abaixo a sua especialidade (você poderá selecionar mais de uma opção):';
        checkboxAreas.style.display = "block";
    } else {
        paragrafo.textContent = ''; // Limpa o texto se nenhuma opção for selecionada
        checkboxAreas.style.display = "none";
    }
}


//  Localizador CEP -----------------------------------------------------------------------------------------

function formatarCEP() {
    var cep = document.getElementById('cep').value;
    cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Formatar o CEP como "XXXXX-XXX"
    if (cep.length > 5) {
        cep = cep.substring(0, 5) + '-' + cep.substring(5, 8);
    }

    document.getElementById('cep').value = cep;
}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}


        function pesquisacep(valor) {

            //Nova variável "cep" somente com dígitos.
            var cep = valor.replace(/\D/g, '');
    
            //Verifica se campo cep possui valor informado.
            if (cep != "") {
    
                //Expressão regular para validar o CEP.
                var validacep = /^[0-9]{8}$/;
    
                //Valida o formato do CEP.
                if(validacep.test(cep)) {
    
                    //Preenche os campos com "..." enquanto consulta webservice.
                    document.getElementById('rua').value="...";
                    document.getElementById('bairro').value="...";
                    document.getElementById('cidade').value="...";
                    document.getElementById('uf').value="...";
    
                    //Cria um elemento javascript.
                    var script = document.createElement('script');
    
                    //Sincroniza com o callback.
                    script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
    
                    //Insere script no documento e carrega o conteúdo.
                    document.body.appendChild(script);
    
                } //end if.
                else {
                    //cep é inválido.
                    limpa_formulário_cep();
                    alert("Formato de CEP inválido.");
                }
            } //end if.
            else {
                //cep sem valor, limpa formulário.
                limpa_formulário_cep();
            }
};
        
// Fim do Localizador CEP -----------------------------------------------------------------------------------

// Função de formatar um número de telefone enquanto digita.

function formatarTelefone() {
    var input = document.getElementById('numberPhone');
    var telefone = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Limita o tamanho do número de telefone
    if (telefone.length > 11) {
        telefone = telefone.substring(0, 11);
    }

    // Formatação para números com 10 ou 11 dígitos
    if (telefone.length >= 2 && telefone.length <= 6) {
        input.value = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2);
    } else if (telefone.length >= 7 && telefone.length <= 10) {
        input.value = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 6) + '-' + telefone.substring(6);
    } else {
        input.value = telefone;
        return false
    }

    return true
}


// Fortatação de um CPF
    // Função para formatar o CPF enquanto o usuário digita
    function formatarCPF() {
        let input = document.getElementById('cpf');
        let cpf = input.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
        input.value = cpf;   
    }

    // Função para validar o CPF
    function validarCPF() {
        const cpf = document.getElementById('cpf').value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
        const cpfError = document.getElementById('cpfError');
        const cpfInput = document.getElementById('cpf');
      
        if (cpf.length !== 11) {
          cpfError.textContent = "CPF deve conter 11 dígitos.";
          cpfInput.classList.add('invalid-input');
          return;
        }
      
        if (/^(\d)\1{10}$/.test(cpf)) {
          cpfError.textContent = "CPF inválido.";
          cpfInput.classList.add('invalid-input');
          return;
        }
      
        let sum = 0;
        let remainder;
      
        for (let i = 1; i <= 9; i++) {
          sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
        }
      
        remainder = (sum * 10) % 11;
      
        if ((remainder === 10) || (remainder === 11)) {
          remainder = 0;
        }
      
        if (remainder !== parseInt(cpf.substring(9, 10))) {
          cpfError.textContent = "CPF inválido.";
          cpfInput.classList.add('invalid-input');
          return;
        }
      
        sum = 0;
        for (let i = 1; i <= 10; i++) {
          sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
        }
      
        remainder = (sum * 10) % 11;
      
        if ((remainder === 10) || (remainder === 11)) {
          remainder = 0;
        }
      
        if (remainder !== parseInt(cpf.substring(10, 11))) {
          cpfError.textContent = "CPF inválido.";
          cpfInput.classList.add('invalid-input');
          return;
        }
      
        cpfError.textContent = "";
        cpfInput.classList.remove('invalid-input');
      }
    
// Validação de um Email
function validarEmail() {
    var email = document.getElementById('email').value;

    // Expressão regular para verificar se o e-mail possui um formato válido
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        document.getElementById('email').style.borderColor = '#C5C5C5'; // E-mail válido, borda verde
    } else {
        document.getElementById('email').style.borderColor = 'red'; // E-mail inválido, borda vermelha
    }
}



// Validação do cadastro completo

function validarCadastro() {
    var fullName = document.getElementById('fullName')
    var email = document.getElementById('email')
    var numberPhone = document.getElementById('numberPhone')
    var cpf = document.getElementById('cpf')
    var pass = document.getElementById('pass').value
    var confirmPass = document.getElementById('confirmPass').value
    var cep = document.getElementById('cep')
    var rua = document.getElementById('rua')
    var numberResidence = document.getElementById('numberResidence')
    var bairro = document.getElementById('bairro')
    var cidade = document.getElementById('cidade')
    var estado = document.getElementById('uf')

    //Verificar ao prosseguir se está correto
    // if (validarCPF = true) {
    //     return;
    // }

    const inputs = document.querySelectorAll('input');

  // Verifica se todos os inputs estão preenchidos
  let allFilled = true;
  inputs.forEach(input => {
    if (input.value === '') {
      allFilled = false;
    }
  });
    
  if (!allFilled) {
    Swal.fire({
     title: 'Olá ProFinder, parece que:',
     html: '<strong>Existem campos vazios, preencha-os para prosseguirmos!</strong>',
     icon: 'warning',})
    return false;
    }
    
    if (confirmPass !== pass ) {
        //  alert('As senhas nao coicidem!');
         Swal.fire({
            title: 'Olá ProFinder, parece que:',
             html: '<strong>As senhas nao coicidem, verifique novamente!</strong>',
             icon: 'warning',})
       
        return;
    }


    alert('Formulário enviado com sucesso!')
    window.location.href = '../login.html'
}

