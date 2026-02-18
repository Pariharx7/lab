const header = document.querySelector("header");
const nav = document.querySelector("nav");
const hambg = document.querySelector(".heading");
const hambgrIcon = document.querySelector("#hamburger-icon");
const pageLinks = document.querySelectorAll(".page-links");
const hexBoxes = document.querySelectorAll(".hex-boxes");
const rgbBoxes = document.querySelectorAll(".rgb-boxes");
const hslBoxes = document.querySelectorAll(".hsl-boxes");
const shuffleColorsButton = document.getElementById("shuffleColors");
const allBoxes = document.querySelectorAll(".color-box-div");

const containers = {
    hex: hexBoxes,
    hsl: hslBoxes,
    rgb: rgbBoxes
};



hambgrIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
    header.classList.toggle('hambg-effect');
    hambgrIcon.classList.toggle('special-hm-effect');
})


function generateHEXcolors() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, '0').toUpperCase();
}

function generateRGBcolors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateHSLcolors() {
    const h = Math.floor(Math.random() * 361);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
}


// a higher out fn 
function rollOutColors(cb, arr) {
    for (box of arr) {
        const color = cb();
        box.style.transitionDuration = "2.7s";
        box.style.backgroundColor = color;
        box.style.borderColor = color;
        box.innerHTML = "";
    }
}

function genNewColors() {
    rollOutColors(generateHSLcolors, hslBoxes);

    rollOutColors(generateRGBcolors, rgbBoxes);

    rollOutColors(generateHEXcolors, hexBoxes);
}

window.addEventListener("load", () => {
    genNewColors();
})

shuffleColorsButton.addEventListener("click", () => {
    genNewColors();
})

Object.values(containers).forEach(boxes => {
    boxes.forEach((container) => {
        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('color-box')) {
                const rawColor = e.target.style.backgroundColor;

                if (container.classList.contains('hex-boxes')) {
                    let currentColor = rgbToHex(rawColor);
                    container.innerHTML = `<b>${currentColor}</b>`;

                } else if (container.classList.contains('hsl-boxes')) {
                    let currentColor = rgbToHSL(rawColor);
                    container.innerHTML = `<b>${currentColor}</b>`;
                } else if (container.classList.contains('rgb-boxes')) {
                    let currentColor =  rawColor;
                     container.innerHTML = `<b>${currentColor}</b>`; 

                }
            }
        })
    })
});

function rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

function rgbToHSL(rgb) {
    let [r, g, b] = rgb.match(/\d+/g).map(x => x / 255);
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}