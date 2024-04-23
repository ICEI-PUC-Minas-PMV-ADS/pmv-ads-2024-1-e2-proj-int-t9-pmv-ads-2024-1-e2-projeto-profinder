const openItemAvaliar = document.querySelector(".item-avaliar");
const closeItemAvaliar = document.querySelector(".closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"))
}

[openItemAvaliar, closeItemAvaliar, fade].forEach((el) => 
    el.addEventListener("click", () => toggleModal())
)