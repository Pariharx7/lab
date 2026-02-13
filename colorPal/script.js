const header = document.querySelector("header");
const nav = document.querySelector("nav");
const hambg = document.querySelector(".heading");
const hambgrIcon = document.querySelector("#hamburger-icon");

console.log(hambgrIcon);

hambgrIcon.addEventListener("click", () => {
        nav.style.display = "block"
        hambg.style.display = "none"
        header.classList.add('hambg-effect')

    console.log("Clickeddd")
})