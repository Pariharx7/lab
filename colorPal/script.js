const header = document.querySelector("header");
const nav = document.querySelector("nav");
const hambg = document.querySelector(".heading");
const hambgrIcon = document.querySelector("#hamburger-icon");
const pageLinks = document.querySelectorAll(".page-links");

console.log(pageLinks);

hambgrIcon.addEventListener("click", () => {
        nav.style.display = "block"
        hambg.style.display = "none"
        header.classList.add('hambg-effect')

    console.log("Clickeddd")
})

for(page of pageLinks){
    page.addEventListener("click", () => {
        nav.style.display = "none";
        hambg.style.display = "block";
        header.classList.remove('hambg-effect');
    })
}