function verificarEmail() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById("emailError");

    // Expressão regular para verificar se o e-mail possui um formato válido
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        document.getElementById('email').style.borderColor = '#C5C5C5'; // E-mail válido, borda verde
        emailError.textContent = ""
    } else {
        document.getElementById('email').style.borderColor = 'red'; // E-mail inválido, borda vermelha
        emailError.textContent = "Email está incorreto!"
    }
}