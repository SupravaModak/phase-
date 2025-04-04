// Animate text on load
gsap.to(".text", { opacity: 1, y: -20, duration: 1, ease: "power2.out" });

// Hover effect
document.querySelectorAll('.image').forEach(img => {
    img.addEventListener('mouseenter', () => {
        document.querySelectorAll('.image').forEach(other => {
            if (other !== img) other.style.filter = 'grayscale(100%) brightness(0.5)';
        });
    });
    img.addEventListener('mouseleave', () => {
        document.querySelectorAll('.image').forEach(other => {
            other.style.filter = 'none';
        });
    });
});
