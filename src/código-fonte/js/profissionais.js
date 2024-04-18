// Seleciona os elementos HTML
const filterOptions = document.querySelectorAll('.filter-option');
const selectedSummary = document.getElementById('selectedSummary');
const applyfilters = document.getElementById('applyFilters');

// Função para lidar com a seleção de uma opção de filtro
filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Alterna a classe 'selected' na opção clicada
        option.classList.toggle('selected');
        
        // Atualiza o resumo das opções selecionadas
        updateSelectedSummary();
    });
});

// Função para atualizar o resumo das opções selecionadas
function updateSelectedSummary() {
    // Limpa o resumo atual
    selectedSummary.innerHTML = '';

    // Itera sobre as opções de filtro
    filterOptions.forEach(option => {
        // Verifica se a opção está selecionada
        if (option.classList.contains('selected')) {
            // Cria um elemento para o resumo da opção
            const summaryItem = document.createElement('div');
            summaryItem.classList.add('summary-item');

            // Cria um ícone de 'x' para remover a seleção
            const removeIcon = document.createElement('span');
            removeIcon.classList.add('remove-icon');
            removeIcon.innerHTML = '&times;'; // Ícone de 'x'

            // Adiciona um evento de clique ao ícone de 'x' para remover a seleção
            removeIcon.addEventListener('click', () => {
                option.classList.remove('selected');
                updateSelectedSummary(); // Atualiza o resumo após remover a seleção
            });

            // Adiciona o ícone e o texto ao resumo
            summaryItem.appendChild(removeIcon);
            summaryItem.appendChild(document.createTextNode(option.textContent));

            // Adiciona o item ao resumo
            selectedSummary.appendChild(summaryItem);
        }
    });
}


// Função para lidar com o clique no botão para aplicar os filtros
applyfilters.addEventListener('click', () => {
    // Coleta as opções selecionadas
    const selectedFilters = [];
    filterOptions.forEach(option => {
        if (option.classList.contains('selected')) {
            selectedFilters.push(option.dataset.filter);
        }
    });

    // Exibir os filtros selecionados no console
    console.log('Filtros selecionados:', selectedFilters);
});