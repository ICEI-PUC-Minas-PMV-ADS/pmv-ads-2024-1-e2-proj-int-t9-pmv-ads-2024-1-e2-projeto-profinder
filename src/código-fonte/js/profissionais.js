const filterOptions = document.querySelectorAll('.filter-option');

filterOptions.forEach(option => {
    option.addEventListener('click', () => {
    
        option.classList.toggle('selected');
    
    });
});