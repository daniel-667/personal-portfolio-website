// Minimal JS for smooth scrolling to sections on $whoami page
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add fade-in on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('section, img');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) { // Trigger when in view
            el.classList.add('in-view');
        }
    });
});

// Initial check on load
window.dispatchEvent(new Event('scroll'));

// Back to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide button on scroll
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) { // Show after scrolling 300px
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});