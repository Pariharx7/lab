const header = document.querySelector("header");
const nav = document.querySelector("nav");
const hambg = document.querySelector(".heading");
const hambgrIcon = document.querySelector("#hamburger-icon");
const pageLinks = document.querySelectorAll(".page-links");
const hexBoxes = document.querySelectorAll(".hex-boxes");
const rgbBoxes = document.querySelectorAll(".rgb-boxes");
const hslBoxes = document.querySelectorAll(".hsl-boxes");

console.log(hslBoxes);

hambgrIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
        header.classList.toggle('hambg-effect');

    console.log("Clickeddd")
})


function generateHEXcolors(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, '0').toUpperCase();
}

function generateRGBcolors(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(generateHEXcolors());
console.log(generateRGBcolors());
console.log(generateHSLcolors());

function generateHSLcolors(){
    const h = Math.floor(Math.random() * 361);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
}