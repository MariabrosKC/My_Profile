document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio website loaded successfully!");

    // --- Optional: Add subtle entrance animations ---
    const tiles = document.querySelectorAll('.portfolio-tile');
    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the tile is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Optional: Unobserve after animation to save resources
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    tiles.forEach((tile, index) => {
        // Initial state for animation (set via JS for progressive enhancement)
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(30px)';
        tile.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        observer.observe(tile); // Start observing the tile
    });

    // --- Add any other interactive elements here ---
    // e.g., filter buttons, modal popups for projects, etc.

});