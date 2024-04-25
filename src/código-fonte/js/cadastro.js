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
window.onload = atualizarParagrafo;


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
        let input = document.getElementById('cpf');
        let cpf = input.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos

        if (cpf.length !== 11) {
            alert('CPF inválido! O CPF deve conter 11 dígitos.');
            input.focus();
            return false;
        }

        // Algoritmo para validar CPF
        // Implemente o algoritmo de validação de CPF aqui
        // Aqui está um exemplo de implementação simples: https://gist.github.com/guisehn/46de78dbb945da1edca98bdae75e5a7a

        return true; // Retorna verdadeiro se o CPF for válido
    }



// Validação do cadastro completo

function validarCadastro() {
    var fullName = document.getElementById('fullName')
    var email = document.getElementById('email')
    var numberPhone = document.getElementById('numberPhone')
    var cpf = document.getElementById('cpf')
    var pass = document.getElementById('pass')
    var confirmPass = document.getElementById('confirPass')
    var cep = document.getElementById('cep')
    var rua = document.getElementById('rua')
    var numberResidence = document.getElementById('numberResidence')
    var bairro = document.getElementById('bairro')
    var cidade = document.getElementById('cidade')
    var estado = document.getElementById('uf')


    if (fullName === "" || email === "" || numberPhone === "" || cpf === "" || pass === "" || confirmPass === "" || cep === "" || rua === "" || numberResidence === "" || bairro === "" || cidade === "" || estado === "") {
        // alert('Por favor, preencha todos os campos vazios!');
        Swal.fire({
            title: 'Olá ProFinder, parece que:',
            html: '<strong>Existem campos vazios, preencha-os para prosseguirmos!</strong>',
            icon: 'warning',})
        return;
    }
    
    if (pass !== confirmPass) {
        //  alert('As senhas nao coicidem!');
         Swal.fire({
            title: 'Olá ProFinder, parece que:',
             html: '<strong>As senhas nao coicidem, verifique novamente!</strong>',
             icon: 'warning',})
       
        return;
    }


    alert('Formulário enviado com sucesso!')
    window.location.href = '../home.html'
}
    
 
