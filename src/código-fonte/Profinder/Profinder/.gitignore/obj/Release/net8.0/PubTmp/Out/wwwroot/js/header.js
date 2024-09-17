const userDropdown = document.getElementById('user-dropdown');
  const userMenu = document.getElementById('user-menu');

  function toggleUserMenu() {
    if (userMenu.style.display === 'none') {
      userMenu.style.display = 'block';
      userDropdown.classList.add('active');
    } else {
      userMenu.style.display = 'none';
      userDropdown.classList.remove('active');
    }
  }

  userDropdown.addEventListener('click', toggleUserMenu);
