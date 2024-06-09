const clickOpenSet = document.querySelectorAll(".set-open");
const clickClosedSet = document.getElementById("closeModalSet");
const openModalSet = document.getElementById("open_set");
const disappearModalSet = document.getElementById("disappear_set");
const clickRegisterButton = document.querySelector("#registerBtn");
const textareaObservacao = document.getElementById("textarea_observacao");

const toggleModalSet = () => {
    openModalSet.classList.toggle("cover2");
    disappearModalSet.classList.toggle("cover2");
};

clickOpenSet.forEach((elSet) => {
    elSet.addEventListener("click", toggleModalSet);
});

clickClosedSet.addEventListener("click", toggleModalSet);

disappearModalSet.addEventListener("click", (event) => {
    if (!openModalSet.contains(event.target)) {
        toggleModalSet();
    }
});

const addObservation = () => {
    const observation = textareaObservacao.value.trim();
    if (observation !== "") {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const observationItem = document.createElement("div");
        observationItem.classList.add("observation-item");
        observationItem.innerHTML = `
            <p>${formattedTime}: ${observation}</p>
        `;

        console.log("Adding observation:", observationItem.innerHTML); // Log para depuração
        document.querySelector(".container-main").appendChild(observationItem);

        textareaObservacao.value = "";
    } else {
        console.log("No observation entered."); // Log para depuração
    }
};

clickRegisterButton.addEventListener("click", addObservation);
