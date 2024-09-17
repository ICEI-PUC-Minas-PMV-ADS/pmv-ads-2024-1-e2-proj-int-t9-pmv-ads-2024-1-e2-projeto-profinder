const clickOpenSet = document.querySelectorAll(".set-open");
const clickClosedSet = document.getElementById("closeModalSet");
const openModalSet = document.getElementById("open_set");
const disappearModalSet = document.getElementById("disappear_set");

const toggleModalSet = () => {
    openModalSet.classList.toggle("cover2");
    disappearModalSet.classList.toggle("cover2");
};

clickOpenSet.forEach((elSet) => {
    elSet.addEventListener("click", toggleModalSet);
});

// Aqui está a adição do evento de clique para o elemento com o ID "closeModalSet"
clickClosedSet.addEventListener("click", toggleModalSet);

disappearModalSet.addEventListener("click", (event) => {
    // Verificar se o alvo do clique não é o modal ou um elemento dentro do modal
    if (!openModalSet.contains(event.target)) {
        toggleModalSet();
    }
});