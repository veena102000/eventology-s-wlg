/*const box = document.getElementById('box');
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

// Update enlarged image on hover
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
*/

/*const box = document.getElementById('box');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');
let isDragging = false;
let startX, startY, startRotationX, startRotationY;

// Handle mouse down event for rotation
box.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startRotationX = parseFloat(getComputedStyle(box).getPropertyValue('--rotate-x')) || 0;
    startRotationY = parseFloat(getComputedStyle(box).getPropertyValue('--rotate-y')) || 0;
});

// Handle mouse move event for rotation
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
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

// Event delegation for hover effect
box.addEventListener('mouseover', (e) => {
    const span = e.target.closest('span');
    if (span) {
        const img = span.querySelector('img');
        if (img) {
            enlargedImage.src = img.src;  // Set the enlarged image source to the hovered image source
            enlargedImageContainer.style.display = 'block';  // Show the enlarged image container
            box.style.animationPlayState = 'paused';  // Pause the rotation when hovered
        }
    }
});

box.addEventListener('mouseout', (e) => {
    const span = e.target.closest('span');
    if (span) {
        enlargedImageContainer.style.display = 'none';  // Hide the enlarged image container
        box.style.animationPlayState = 'running';  // Resume the rotation when mouse leaves
    }
});*/


const box = document.getElementById('box');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');
let isDragging = false;
let startX, startY, startRotationX, startRotationY;
let lastMoveTime = 0;

// Debounce function to limit the rate of execution
function debounce(fn, delay) {
    return function(...args) {
        const now = Date.now();
        if (now - lastMoveTime > delay) {
            fn(...args);
            lastMoveTime = now;
        }
    };
}

// Handle rotation on mouse/touch events
function handleMove(e) {
    if (isDragging) {
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;
        const rotationX = startRotationX - deltaY / 2;
        const rotationY = startRotationY + deltaX / 2;
        box.style.setProperty('--rotate-x', rotationX + 'deg');
        box.style.setProperty('--rotate-y', rotationY + 'deg');
        box.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
}

// Mouse down/touch start event for initiating drag
function startDrag(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    startY = e.clientY || e.touches[0].clientY;
    startRotationX = parseFloat(getComputedStyle(box).getPropertyValue('--rotate-x')) || 0;
    startRotationY = parseFloat(getComputedStyle(box).getPropertyValue('--rotate-y')) || 0;
}

// Mouse up/touch end event to stop drag
function stopDrag() {
    isDragging = false;
}

// Event delegation for hover effect on images
function handleHover(e) {
    const span = e.target.closest('span');
    if (span) {
        const img = span.querySelector('img');
        if (img) {
            enlargedImage.src = img.src;  // Set the enlarged image source to the hovered image source
            enlargedImageContainer.style.display = 'block';  // Show the enlarged image container
            box.style.animationPlayState = 'paused';  // Pause the rotation when hovered
        }
    }
}

// Mouse out/touch leave event for ending hover effect
function handleMouseOut(e) {
    const span = e.target.closest('span');
    if (span) {
        enlargedImageContainer.style.display = 'none';  // Hide the enlarged image container
        box.style.animationPlayState = 'running';  // Resume the rotation when mouse leaves
    }
}

// Adding event listeners for mouse and touch events
box.addEventListener('mousedown', startDrag);
box.addEventListener('touchstart', startDrag);

document.addEventListener('mousemove', debounce(handleMove, 10));
document.addEventListener('touchmove', debounce(handleMove, 10));

document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

box.addEventListener('mouseover', handleHover);
box.addEventListener('mouseout', handleMouseOut);

