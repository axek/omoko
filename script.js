const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const scenarios = document.querySelectorAll('.scenario');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scenarios.forEach((item) => item.classList.remove('active'));
        entry.target.classList.add('active');
      }
    });
  },
  { rootMargin: '-35% 0px -45% 0px' }
);
scenarios.forEach((scenario) => observer.observe(scenario));

document.querySelector('.access-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.innerHTML = 'You’re on the list <span>✓</span>';
});
