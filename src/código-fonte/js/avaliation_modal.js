const clickOpen = document.querySelectorAll(".user-open");
const clickClosed = document.querySelector("#closeModal");
const openModal = document.querySelector("#open");
const disappearModal = document.querySelector("#disappear");

const clickOpenSet = document.querySelectorAll(".set-open");
const clickClosedSet = document.querySelector("#closeModalSet");
const openModalSet = document.querySelector("#open_set");
const disappearModalSet = document.querySelector("#disappear_set");

const toggleModal = () => {
    openModal.classList.toggle("cover");
    disappearModal.classList.toggle("cover");
};

clickOpen.forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

[clickClosed,disappearModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

//Modal - Inserir Observações ---------------------------------------------
const toggleModalSet = () => {
    openModalSet.classList.toggle("cover2");
    disappearModalSet.classList.toggle("cover2");
};

clickOpenSet.forEach((elSet) => {
    elSet.addEventListener("click", () => toggleModalSet());
});

[clickClosedSet,disappearModalSet].forEach((elSet) => {
    elSet.addEventListener("click", () => toggleModalSet());
});