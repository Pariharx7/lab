const refreshButton = document.getElementById("refresh-btn");
const pictureBoxes = document.querySelectorAll(".picture-box");

console.log(pictureBoxes);

refreshButton.addEventListener("click", () => {
    alert("Clicked");
})

//next thing to do is to find an API that provides images of cars