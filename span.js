const box = document.getElementById('box');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');
let isDragging = false;
let startX, startY, startRotationX, startRotationY;

// Handle mouse down event for rotation
box.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    startY = e.pageY;
    startRotationX = parseFloat(getComputedStyle(box).getPropertyValue('--rotate-x')) || 0;
    startRotationY = parseFloat(getComputedStyle(box).getPropertyValue('--rotate-y')) || 0;
});

// Handle mouse move event for rotation
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.pageX - startX;
        const deltaY = e.pageY - startY;
        const rotationX = startRotationX - deltaY / 2;
        const rotationY = startRotationY + deltaX / 2;
        box.style.setProperty('--rotate-x', rotationX + 'deg');
        box.style.setProperty('--rotate-y', rotationY + 'deg');
        box.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
});

// Handle mouse up event
document.addEventListener('mouseup', () => {
    isDragging = false;
});


    document.querySelectorAll('.box span').forEach(span => {
        span.addEventListener('mouseenter', () => {
            const img = span.querySelector('img');
            enlargedImage.src = img.src;  // Set the enlarged image source to the hovered image source
            enlargedImageContainer.style.display = 'block';  // Show the enlarged image container
            box.style.animationPlayState = 'paused';  // Pause the rotation when hovered
        });
    span.addEventListener('mouseleave', () => {
        enlargedImageContainer.style.display = 'none';  // Hide the enlarged image container
        box.style.animationPlayState = 'running';  // Resume the rotation when mouse leaves
    });
   
});

