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


