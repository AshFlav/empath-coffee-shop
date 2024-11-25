// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// When hamburger menu is clicked
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// Click outside the sidebar to remove the nav
document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
