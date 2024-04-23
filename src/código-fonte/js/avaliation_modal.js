const clickOpen = document.querySelector("#user-assess");
const clickClosed = document.querySelector("#closeModal");
const openModal = document.querySelector("#open");
const disappearModal = document.querySelector("#disappear");


const toggleModal = () => {
    openModal.classList.toggle("cover");
    disappearModal.classList.toggle("cover");
};

[clickOpen, clickClosed, disappearModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});