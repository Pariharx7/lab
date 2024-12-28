const showButton = document.getElementById("show");
const closeButton = document.getElementById("close");
const navBar = document.querySelector("nav");
showButton.addEventListener('click', () => {
    navBar.style.opacity = "1";
    navBar.style.width = "300px";
})

closeButton.addEventListener('click', () => {
    navBar.style.opacity = "0";
    navBar.style.width = "0";
})