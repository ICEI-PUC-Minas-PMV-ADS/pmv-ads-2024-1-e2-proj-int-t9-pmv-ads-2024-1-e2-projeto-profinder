document.addEventListener('DOMContentLoaded', function() {
    const infoIcon = document.querySelector('.info-icon');
    const infoBubble = document.querySelector('.info-bubble');

    // Exibir o balão ao passar o mouse sobre o ícone de informação
    infoIcon.addEventListener('mouseover', function() {
        infoBubble.style.display = 'block';
        const iconRect = infoIcon.getBoundingClientRect();
        infoBubble.style.top = (iconRect.top + iconRect.height) + 'px';
        infoBubble.style.left = iconRect.left + 'px';
    });

    // Ocultar o balão ao retirar o mouse do ícone de informação
    infoIcon.addEventListener('mouseout', function() {
        infoBubble.style.display = 'none';
    });
});