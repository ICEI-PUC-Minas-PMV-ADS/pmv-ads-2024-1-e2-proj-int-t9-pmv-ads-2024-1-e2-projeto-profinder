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