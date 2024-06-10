document.addEventListener("DOMContentLoaded", function () {
    var statusElement = document.getElementById("status");
    var btnAvancar = document.getElementById("btnAvancar");
    var status = statusElement.getAttribute("data-status");

    if (status === "Confirmado") {
        btnAvancar.disabled = false;
        btnAvancar.addEventListener("click", function () {
            window.location.href = "/Contratacao/Etapa3"; // Ajuste o URL conforme necessário
        });
    } else {
        btnAvancar.disabled = true;
    }
});