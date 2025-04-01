// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }

        // Close mobile menu after clicking a link
        if (document.body.classList.contains('mobile-menu-open')) {
            toggleMenu();
        }
    });
});

// Mobile Menu Toggle (Hamburger Menu)
const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

function toggleMenu() {
    document.body.classList.toggle('mobile-menu-open');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    // Add blur effect to the background when menu is open
    if (document.body.classList.contains('mobile-menu-open')) {
        overlay.style.filter = 'blur(5px)';
    } else {
        overlay.style.filter = 'none';
    }

    // Change icon to 'X' when open, back to ☰ when closed
    if (document.body.classList.contains('mobile-menu-open')) {
        menuButton.innerHTML = '&times;'; // "X" symbol
    } else {
        menuButton.innerHTML = '&#9776;'; // "☰" hamburger icon
    }
}

if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
}

// Close menu when clicking outside
overlay.addEventListener('click', toggleMenu);

// Automatic Review Slider with Adjustable Speed
let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;
const reviewSpeed = 3000; // Adjust speed (milliseconds)

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.display = i === index ? 'block' : 'none';
    });
}

function nextReview() {
    currentReview = (currentReview + 1) % totalReviews;
    showReview(currentReview);
}

// Auto-slide reviews at set speed
if (reviews.length > 0) {
    showReview(currentReview);
    setInterval(nextReview, reviewSpeed);
}

// Button Hover Animation
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Fade-in Animation on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
    const scrollY = window.scrollY + window.innerHeight * 0.85;

    fadeInElements.forEach(el => {
        if (el.offsetTop < scrollY) {
            el.classList.add('visible');
        }
    });
}

// Run animation on scroll
window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Run once on page load
