// script.js
let angle = 0;

function rotateCircle() {
    angle += 1; // Increment angle
    document.querySelector('.circle').style.transform = `rotateY(${angle}deg)`;
    requestAnimationFrame(rotateCircle);
}

rotateCircle(); // Start the rotation
