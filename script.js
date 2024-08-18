// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Set the initial state based on the current theme
function updateToggleIcon() {
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<span class="icon">☀️</span>';
    themeToggle.classList.remove('moon');
    themeToggle.classList.add('sun');
  } else {
    themeToggle.innerHTML = '<span class="icon">🌙</span>';
    themeToggle.classList.remove('sun');
    themeToggle.classList.add('moon');
  }
}

// Initialize the toggle icon when the page loads
updateToggleIcon();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateToggleIcon();
});

// Show About Box
document.getElementById('about-link').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('about-box').classList.add('show');
  document.getElementById('about-box').setAttribute('aria-hidden', 'false');
});

// Close About Box
document.getElementById('close-about').addEventListener('click', () => {
  document.getElementById('about-box').classList.remove('show');
  document.getElementById('about-box').setAttribute('aria-hidden', 'true');
});

// Hide/Show Navigator on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navigator');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  navbar.style.top = (scrollTop > lastScrollTop) ? '-60px' : '0';
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
