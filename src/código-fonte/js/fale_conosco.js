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



