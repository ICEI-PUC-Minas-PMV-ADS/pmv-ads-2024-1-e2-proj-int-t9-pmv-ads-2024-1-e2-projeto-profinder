document.addEventListener('DOMContentLoaded', function () {
    const infoIcon = document.querySelector('.info-icon');
    const infoBubble = document.querySelector('.info-bubble');

    // Exibir o balão ao passar o mouse sobre o ícone de informação
    infoIcon.addEventListener('mouseover', function () {
        infoBubble.style.display = 'block';
        const iconRect = infoIcon.getBoundingClientRect();
        infoBubble.style.top = (iconRect.top + iconRect.height) + 'px';
        infoBubble.style.left = iconRect.left + 'px';
    });

    // Ocultar o balão ao retirar o mouse do ícone de informação
    infoIcon.addEventListener('mouseout', function () {
        infoBubble.style.display = 'none';
    });

    const initialDateInput = document.getElementById('initial-date');
    const endDateInput = document.getElementById('end-date');
    const initialTimeInput = document.getElementById('initial-time');
    const endTimeInput = document.getElementById('end-time');
    const prossegButton = document.getElementById('prosseg');
    const daysContractedText = document.getElementById('days-contracted');
    const errorMessage = document.getElementById('error-message');
    const errorTimer = document.getElementById('error-timer');
    const progressBar = document.getElementById('progress-bar');
    const form = document.querySelector("form");

    prossegButton.addEventListener('click', function (event) {
        if (!validateInputs()) {
            event.preventDefault();
        } else {
            form.submit();
        }
    });

    function validateInputs() {
        let isValid = true;
        const today = new Date(); // Obtém a data atual

        // Verifica se a data inicial não está vazia e é anterior ou igual à data atual
        if (initialDateInput.value === '' || initialDateInput.valueAsDate <= today.setHours(0, 0, 0, 0)) {
            initialDateInput.classList.remove('invalid'); // Remover a classe de invalidade
        } else {
            initialDateInput.classList.add('invalid'); // Adicionar a classe de invalidade
            isValid = false;
        }

        // Verifica se a data final não está vazia e é posterior à data inicial
        if (endDateInput.value === '' || endDateInput.valueAsDate <= initialDateInput.valueAsDate) {
            endDateInput.classList.add('invalid');
            isValid = false;
        } else {
            endDateInput.classList.remove('invalid');
        }

        // Verifica se os horários iniciais e finais estão preenchidos e se o horário final não é anterior ao inicial
        if (initialTimeInput.value === '' || endTimeInput.value === '' || endTimeInput.value <= initialTimeInput.value) {
            if (initialTimeInput.value === '') {
                initialTimeInput.classList.add('invalid');
            } else {
                initialTimeInput.classList.remove('invalid');
            }
            if (endTimeInput.value === '') {
                endTimeInput.classList.add('invalid');
            } else {
                endTimeInput.classList.remove('invalid');
            }
            isValid = false;
        } else {
            initialTimeInput.classList.remove('invalid');
            endTimeInput.classList.remove('invalid');
        }

        // Mostra a mensagem de erro se os campos não forem válidos
        if (!isValid) {
            errorMessage.style.display = 'flex';
            showErrorTimer(); // Exibe o temporizador e a barra de progresso
        } else {
            errorMessage.style.display = 'none';
        }

        // Calcula e exibe a quantidade de dias contratados
        if (isValid) {
            const startDate = new Date(initialDateInput.value);
            const endDate = new Date(endDateInput.value);
            const daysContracted = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // Usando Math.ceil para arredondar para cima
            daysContractedText.textContent = `Dias contratados: ${daysContracted}`;
        } else {
            daysContractedText.textContent = 'Dias contratados:';
        }

        return isValid;
    }

    // Temporizador e a barra de progresso
    function showErrorTimer() {
        errorTimer.style.display = 'block';
        errorMessage.classList.add('show-error');

        progressBar.style.animation = 'none';
        void progressBar.offsetWidth;
        progressBar.style.animation = 'progressAnimation 7s linear forwards';

        setTimeout(function () {
            errorTimer.style.display = 'none';
            errorMessage.classList.remove('show-error');
            errorMessage.style.display = 'none';
        }, 7000);
    }
});
