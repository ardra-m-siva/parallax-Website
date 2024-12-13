let moon = document.getElementById("moon")
let satellite = document.getElementById("satellite")

let initialSatelliteTop = parseInt(getComputedStyle(satellite).top) || 0;
let button = document.getElementById("btn")
let heading = document.getElementById("a-mhead")

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * .76 + "px";

    satellite.style.right = value * .3 + "px"
    satellite.style.top = initialSatelliteTop + value * .05 + "px"; // Move upward

    let newSize = 50 + value * 0.3; // Adjust the base size and growth rate
    satellite.style.width = newSize + "px";

    if (newSize <= 50) {
        heading.style.color = "#555"; 
    } else {
        heading.style.color = "orange";
    }

    const newSizeHead = Math.max(100 - 0.06 * value, 30); // Decrease size but don't go below 20px
    heading.style.fontSize = newSizeHead + "px";

    
});
