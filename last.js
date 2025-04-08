

/*const box = document.getElementById('box');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');
let isDragging = false;
let startX, startY, startRotationX, startRotationY;
let lastMoveTime = 0;

// Debounce function to limit the rate of execution
function debounce(fn, delay) {
    return function (...args) {
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

// Initialize comparison functionality for overlay images
function initComparisons() {
    var x = document.getElementsByClassName("img-comp-overlay");
    for (let i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, clicked = 0, w = img.offsetWidth, h = img.offsetHeight;
        img.style.width = (w / 2) + "px";

        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");

        img.parentElement.insertBefore(slider, img);
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchend", slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            clicked = 0;
        }

        function slideMove(e) {
            if (clicked === 0) return false;
            const pos = getCursorPos(e);
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            img.style.width = x + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
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

// Initialize the comparison feature on page load
window.addEventListener('load', initComparisons);

*/
const box = document.getElementById('box');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');
let isDragging = false;
let startX, startY, startRotationX, startRotationY;
let lastMoveTime = 0;

// Debounce function to limit the rate of execution
function debounce(fn, delay) {
    return function (...args) {
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

// Initialize comparison functionality for overlay images
function initComparisons() {
    var x = document.getElementsByClassName("img-comp-overlay");
    for (let i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, clicked = 0, w = img.offsetWidth, h = img.offsetHeight;
        img.style.width = (w / 2) + "px";

        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");

        img.parentElement.insertBefore(slider, img);
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchend", slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            clicked = 0;
        }

        function slideMove(e) {
            if (clicked === 0) return false;
            const pos = getCursorPos(e);
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            img.style.width = x + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
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

// Initialize the comparison feature on page load
window.addEventListener('load', initComparisons);

