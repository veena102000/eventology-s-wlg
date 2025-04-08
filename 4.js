const slider = document.querySelector('.slider');
let rotationY = 0;

window.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    rotationY += event.deltaY * 0.5; // Adjust rotation speed
    slider.style.transform = `rotateX(-40deg) rotateY(${rotationY}deg)`; // Apply backward tilt and rotation
});

// Hover effect to duplicate image to the top-right corner
const topRightImgDiv = document.getElementById('top-right-img');
const topRightImg = topRightImgDiv.querySelector('img');

slider.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'IMG') {
        topRightImg.src = event.target.src;
        topRightImgDiv.style.display = 'block'; // Show the div
    }
});

slider.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'IMG') {
        topRightImgDiv.style.display = 'none'; // Hide the div
    }
});