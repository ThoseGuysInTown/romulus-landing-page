document.addEventListener('DOMContentLoaded', function() {
    console.log('Experiment page loaded - ready for your creative experiments!');
    
    // Simple hover animation for sample elements
    const sampleElements = document.querySelectorAll('.sample-element');
    
    sampleElements.forEach((element, index) => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.2)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.1)';
        });
        
        // Add a click event for experimentation
        element.addEventListener('click', function() {
            console.log(`Sample element ${index + 1} clicked!`);
            this.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        });
    });
    
    // Add subtle navbar animation on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'transparent';
        }
    });
    
    // This is your sandbox - add any experimental code here!
    // Try different animations, layouts, or interactive features
});