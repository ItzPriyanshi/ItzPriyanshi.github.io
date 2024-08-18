document.getElementById('theme-toggle').addEventListener('click', () => {
    const backgroundImages = [
        'https://i.imgur.com/XfAq4Ep.jpeg',
        'https://i.imgur.com/g8UYq7S.jpeg',
        'https://i.imgur.com/f4H9unz.jpeg',
        'https://i.imgur.com/ChKuPl1.jpeg'
    ];

    // Get current background image
    const currentImage = document.body.style.backgroundImage;

    // Remove the 'url("...")' part to compare
    const cleanedCurrentImage = currentImage.replace(/url\(["']?|["']?\)$/g, '');

    // Find the index of the current image in the array
    let currentIndex = backgroundImages.indexOf(cleanedCurrentImage);

    // Set the next image, looping back to the start if necessary
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url(${backgroundImages[nextIndex]})`;
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

// AJAX form submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('form-response').innerText = 'Message sent successfully!';
        event.target.reset();
    })
    .catch(error => {
        document.getElementById('form-response').innerText = 'An error occurred. Please try again.';
    });
});