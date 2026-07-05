// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get button to show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.style.opacity = '0.8';
            
            // Simulate network request
            setTimeout(() => {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
            }, 800);
        });
    }

    // 3. Scroll Reveal Animation for Cards
    const cards = document.querySelectorAll('.card');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once it has animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it comes into view
    });

    // Add initial hidden class and observe each card
    cards.forEach(card => {
        card.classList.add('hidden');
        observer.observe(card);
    });
});
