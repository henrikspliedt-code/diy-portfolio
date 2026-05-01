const navToggle = document.querySelector('.topbar__toggle');
const navMenu = document.getElementById('site-menu');
const navLinks = navMenu.querySelectorAll('a');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('is-open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach((element) => revealObserver.observe(element));
