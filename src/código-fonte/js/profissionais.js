// Seleciona os elementos HTML
const filterOptions = document.querySelectorAll('.filter-option');
const selectedSummary = document.getElementById('selectedSummary');
const applyfilters = document.getElementById('applyFilters');

filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('selected');
        updateSelectedSummary();
    });
});

// Função para atualizar o resumo das opções selecionadas
function updateSelectedSummary() {
    selectedSummary.innerHTML = '';

    filterOptions.forEach(option => {

        if (option.classList.contains('selected')) {
            const summaryItem = document.createElement('div');
            summaryItem.classList.add('summary-item');

            const removeIcon = document.createElement('span');
            removeIcon.classList.add('remove-icon');

            removeIcon.innerHTML = '&times;';
            removeIcon.addEventListener('click', () => {
                option.classList.remove('selected');
                updateSelectedSummary(); 
            });

            summaryItem.appendChild(removeIcon);
            summaryItem.appendChild(document.createTextNode(option.textContent));
            selectedSummary.appendChild(summaryItem);
        }
    });
}


applyfilters.addEventListener('click', () => {
    const selectedFilters = [];
    filterOptions.forEach(option => {
        if (option.classList.contains('selected')) {
            selectedFilters.push(option.dataset.filter);
        }
    });

    console.log('Filtros selecionados:', selectedFilters);
});



const input = document.getElementById('searchInput');
const placeholderText = "Pesquise um profissional pela especialidade ou nome";
let position = 0;
function typeWriter() {
    if (position < placeholderText.length) {
        input.setAttribute('placeholder', placeholderText.substring(0, position + 1));
        position++;
        setTimeout(typeWriter, 30);
    } else {
        position = 0;
        setTimeout(typeWriter, 2000);
    }
}
typeWriter();