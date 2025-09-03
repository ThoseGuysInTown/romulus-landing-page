document.addEventListener('DOMContentLoaded', function() {
    const floatingItems = document.querySelectorAll('.floating-item');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Initialize orbital positions for floating items
    floatingItems.forEach((item, index) => {
        // Set up orbital parameters for each item
        const orbitalRadius = 150 + (index * 60); // Different orbital distances
        const initialAngle = (index * 60) * (Math.PI / 180); // Spread items around the orbit
        
        item.orbitalRadius = orbitalRadius;
        item.currentAngle = initialAngle;
        item.mouseOffsetStrength = 0.02 + (index * 0.005); // Varying mouse sensitivity
        item.staticRotation = 5 + Math.random() * 15; // Random rotation between 5-20 degrees
        
        // Add orbital animation
        animateOrbit(item, index);
    });
    
    function animateOrbit(element, index) {
        const speed = parseFloat(element.dataset.speed) || 1;
        const orbitalSpeed = 0.0008 * speed; // Slow orbital rotation
        
        let start = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - start;
            
            // Calculate center of the screen
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            // Update orbital angle
            element.currentAngle += orbitalSpeed;
            
            // Calculate base orbital position
            const baseOrbitalX = centerX + Math.cos(element.currentAngle) * element.orbitalRadius;
            const baseOrbitalY = centerY + Math.sin(element.currentAngle) * element.orbitalRadius;
            
            // Calculate mouse offset (subtle parallax effect)
            const mouseOffsetX = (mouseX - centerX) * element.mouseOffsetStrength;
            const mouseOffsetY = (mouseY - centerY) * element.mouseOffsetStrength;
            
            // Apply orbital position + mouse offset
            const finalX = baseOrbitalX + mouseOffsetX;
            const finalY = baseOrbitalY + mouseOffsetY;
            
            // Apply subtle static rotation to each artwork
            element.style.transform = `rotate(${element.staticRotation}deg)`;
            
            // Position the element
            element.style.left = (finalX - 60) + 'px'; // Offset by half width to center
            element.style.top = (finalY - 40) + 'px';  // Offset by half height to center
            
            requestAnimationFrame(animate);
        }
        
        requestAnimationFrame(animate);
    }
    
    // Handle window resize to recalculate center
    window.addEventListener('resize', function() {
        // The orbital animation will automatically adjust to new center on next frame
    });
    
    // Add subtle navbar animation on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });
    
    // Add art piece hover effects with improved styling for artwork
    document.querySelectorAll('.art-piece').forEach(piece => {
        piece.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.1)';
            this.style.boxShadow = '0 12px 40px rgba(255, 255, 255, 0.3)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        });
        
        piece.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.1)', '');
            this.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
});