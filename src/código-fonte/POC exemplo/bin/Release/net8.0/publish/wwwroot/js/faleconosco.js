document.getElementById('telefone').addEventListener('input', function (e) {
    var telefone = e.target.value.replace(/\D/g, '');

    if (telefone.length > 11) {
        telefone = telefone.substr(0, 11);
    }

    var unmaskedTelefone = '';
    for (var i = 0; i < telefone.length; i++) {
        if (i === 0) {
            unmaskedTelefone += '(' + telefone[i];
        } else if (i === 2) {
            unmaskedTelefone += ') ' + telefone[i];
        } else if (i === 3) {
            unmaskedTelefone += ' ' + telefone[i];
        } else if (i === 7) {
            unmaskedTelefone += '-' + telefone[i];
        } else {
            unmaskedTelefone += telefone[i];
        }
    }

    e.target.value = unmaskedTelefone;
});

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function onlyLetters(event) {
    const regex = /[^A-Za-z\s]/g;
    let key = String.fromCharCode(event.charCode);
    if (regex.test(key)) {
        event.preventDefault();
    }
}

document.getElementById('verif-form').addEventListener('submit', function (event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    if (!nome) {
        event.preventDefault();
        document.getElementById('errorMessage1').style.display = 'block';
    }

    if (!email) {
        event.preventDefault();
        document.getElementById('errorMessage2').style.display = 'block';
    }

    if (!validarEmail(email)) {
        event.preventDefault();
        document.getElementById('errorMessage2').style.display = 'block';
    }

    if (telefone.length !== 16) {
        event.preventDefault();
        document.getElementById('errorMessage3').style.display = 'block';
    }

    if (!mensagem) {
        event.preventDefault();
        document.getElementById('errorMessage4').style.display = 'block';
    }

    if (nome && email && validarEmail(email) && telefone.length === 16 && mensagem) {
        alert('Mensagem enviada com sucesso!');
    }
});