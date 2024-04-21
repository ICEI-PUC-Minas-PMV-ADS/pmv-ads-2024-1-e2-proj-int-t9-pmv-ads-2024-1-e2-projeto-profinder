// Captura os elementos do DOM
// Captura os elementos do DOM
const toggleMenu = document.querySelector('.toggle-menu');
const listMenuFinder = document.querySelector('.list-menu-finder');
const header = document.querySelector('body');

// Adiciona um listener para clicar no ícone do hamburger
toggleMenu.addEventListener('click', () => {
    listMenuFinder.classList.toggle('show');
    header.classList.toggle('blur-background'); // Alternar classe para aplicar/remover efeito de blur
});

// Adiciona um listener para redimensionar a tela
window.addEventListener('resize', () => {
    // Verifica se a largura da tela é menor que 850px
    if (window.innerWidth < 850) {
        // Exibe o ícone do hamburger e oculta o menu
        toggleMenu.style.display = 'block';
        listMenuFinder.style.display = 'none';
    } else {
        // Exibe o menu convencional e oculta o ícone do hamburger
        toggleMenu.style.display = 'none';
        listMenuFinder.style.display = 'flex';
        listMenuFinder.classList.remove('show'); // Garante que o menu não permaneça visível em telas maiores
        header.classList.remove('blur-background'); // Remove o fundo desfocado
    }
});
