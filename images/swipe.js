document.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.parallax-layer');
    const scrollY = window.scrollY;

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
});
