document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 12px 40px rgba(20,81,160,0.14)';
    } else {
      navbar.style.boxShadow = '0 12px 40px rgba(20,81,160,0.08)';
    }
  });

  const navLinks = document.querySelectorAll('.navbar__link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('navbar__link--active'));
      link.classList.add('navbar__link--active');
    });
  });
});
