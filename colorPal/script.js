const header = document.querySelector("header");
const nav = document.querySelector("nav");
const hambg = document.querySelector(".heading");
const hambgrIcon = document.querySelector("#hamburger-icon");
const pageLinks = document.querySelectorAll(".page-links");

console.log(pageLinks);

hambgrIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
        header.classList.toggle('hambg-effect');

    console.log("Clickeddd")
})

for(page of pageLinks){
    page.addEventListener("click", () => {
        nav.style.display = "none";
        hambg.style.display = "block";
        header.classList.remove('hambg-effect');
    })
}

// add transtions to smoothen moves


function generateHEXcolors(){

}

function generateRGBcolors(){

}

function generateHSLcolors(){
    
}