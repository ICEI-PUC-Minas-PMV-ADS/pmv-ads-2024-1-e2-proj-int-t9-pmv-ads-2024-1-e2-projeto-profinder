document.addEventListener("DOMContentLoaded", function () {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/notificationHub")
        .build();

    connection.on("ReceiveNotification", function (message) {
        showNotification(message);
    });

    connection.start()
        .then(() => console.log("SignalR conectado."))
        .catch(err => console.error("Erro na conexão SignalR: ", err));

    // Fechar o modal se já estiver aberto
    var modal = document.getElementById("notificationModal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
        modal.classList.remove("show");
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.classList.remove("show");
        }
    }
});

function showNotification(message) {
    // Verificar se há linhas na tabela de solicitações pendentes
    var solicitacoes = document.querySelectorAll('.row-style tr');
    if (solicitacoes.length > 0) {
        var modal = document.getElementById("notificationModal");
        var modalMessage = document.getElementById("modalMessage");

        modalMessage.textContent = message;
        modal.style.display = "block";
        modal.classList.add("show");
    }
}
