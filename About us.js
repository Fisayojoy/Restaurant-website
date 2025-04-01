// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑ Scroll to Top";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

// Show/Hide the Scroll-to-Top Button
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to Top on Button Click
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in Animation for Team Section (on Scroll)
const teamSection = document.querySelector('.team');
const teamMembers = document.querySelectorAll('.team-member');

function fadeInOnScroll() {
    const windowHeight = window.innerHeight;
    const teamSectionTop = teamSection.getBoundingClientRect().top;

    if (teamSectionTop < windowHeight - 100) {
        teamMembers.forEach((member, index) => {
            setTimeout(() => {
                member.classList.add('fade-in');
            }, index * 300); // Stagger the fade-in for each team member
        });
    }
}

// Listen for scroll events to trigger fade-in effect
window.addEventListener('scroll', fadeInOnScroll);

// Initially run fade-in check to show content on page load
fadeInOnScroll();
