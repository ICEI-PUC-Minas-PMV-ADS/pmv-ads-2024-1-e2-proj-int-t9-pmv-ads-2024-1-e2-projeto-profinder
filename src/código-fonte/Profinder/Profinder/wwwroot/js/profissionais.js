// Seleciona os elementos HTML
const filterOptions = document.querySelectorAll('.filter-option');
const selectedSummary = document.getElementById('selectedSummary');
const applyFilters = document.getElementById('applyFilters');
const searchInput = document.getElementById('searchInput');

// Função para filtrar os cards com base na entrada do usuário
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('.professional-name').textContent.toLowerCase();
        const aboutMe = card.querySelector('.professional-about-me h6').textContent.toLowerCase();
        const qualifications = card.querySelector('.qualifications').textContent.toLowerCase();

        if (name.includes(query) || aboutMe.includes(query) || qualifications.includes(query)) {
            card.style.display = 'block'; // Mostra o card se corresponder à consulta
        } else {
            card.style.display = 'none'; // Oculta o card se não corresponder à consulta
        }
    });
});

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

applyFilters.addEventListener('click', () => {
    const selectedFilters = [];
    filterOptions.forEach(option => {
        if (option.classList.contains('selected')) {
            selectedFilters.push(option.dataset.filter);
        }
    });

    console.log('Filtros selecionados:', selectedFilters);

    // Lógica de filtragem de AJAX omitida para simplificação
});

// Função para atualizar a lista de profissionais exibida
function updateProfessionalsList(professionals) {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    professionals.forEach(professional => {
        const card = document.createElement('div');
        card.classList.add('card');

        const profilePicture = document.createElement('div');
        profilePicture.classList.add('profile-picture');

        const photoExample = document.createElement('div');
        photoExample.classList.add('photo-example');
        photoExample.innerHTML = `<span>${professional.nomeUsuario.substring(0, 2).toUpperCase()}</span>`;

        const professionalName = document.createElement('h6');
        professionalName.classList.add('professional-name');
        professionalName.textContent = professional.nomeUsuario;

        profilePicture.appendChild(photoExample);
        profilePicture.appendChild(professionalName);

        const cadContent = document.createElement('div');
        cadContent.classList.add('cad-content');

        const professionalBio = document.createElement('p');
        professionalBio.classList.add('professional-bio');
        professionalBio.textContent = 'Quem sou eu';

        const professionalAboutMe = document.createElement('div');
        professionalAboutMe.classList.add('professional-about-me');
        professionalAboutMe.innerHTML = `<h6>${professional.sobreMim}</h6>`;

        const professionalQualifications = document.createElement('p');
        professionalQualifications.classList.add('professional-qualifications');
        professionalQualifications.textContent = 'Minhas Qualificações';

        const qualifications = document.createElement('div');
        qualifications.classList.add('qualifications');

        if (professional.habilidades) {
            const habilidades = professional.habilidades.split(',');
            habilidades.forEach(habilidade => {
                const qualificationsItem = document.createElement('div');
                qualificationsItem.classList.add('qualifications-item');
                qualificationsItem.textContent = `+ ${habilidade}`;
                qualifications.appendChild(qualificationsItem);
            });
        }

        const userRating = document.createElement('div');
        userRating.classList.add('user-rating');

        const ratingSpan = document.createElement('span');
        ratingSpan.classList.add('rating');
        ratingSpan.textContent = 'Avaliação dos usuários';

        const ratingArea = document.createElement('div');
        ratingArea.classList.add('rating-area');

        const ratingText1 = document.createElement('p');
        ratingText1.classList.add('rating-text');
        ratingText1.textContent = 'Qualidade do Serviço';

        const ratingText2 = document.createElement('p');
        ratingText2.classList.add('rating-text');
        ratingText2.textContent = 'Preço';

        ratingArea.appendChild(ratingText1);
        ratingArea.appendChild(ratingText2);

        const comments = document.createElement('div');
        comments.classList.add('comments');

        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.textContent = 'Comentários dos usuários'; // Aqui você pode adicionar logicamente os comentários se existirem

        comments.appendChild(comment);

        userRating.appendChild(ratingSpan);
        userRating.appendChild(ratingArea);
        userRating.appendChild(comments);

        cadContent.appendChild(professionalBio);
        cadContent.appendChild(professionalAboutMe);
        cadContent.appendChild(professionalQualifications);
        cadContent.appendChild(qualifications);
        cadContent.appendChild(userRating);

        card.appendChild(profilePicture);
        card.appendChild(cadContent);

        cardContainer.appendChild(card);
    });
}
