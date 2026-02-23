const refreshButton = document.getElementById("refresh-btn");
const pictureBoxes = document.querySelectorAll(".picture-box");
const image1 = document.getElementById("im1");
// console.log(pictureBoxes);

refreshButton.addEventListener("click", () => {
    alert("Clicked");
})

//next thing to do is to find an API that provides images of cars// work on pixabay api

const API_KEY = '54751795-c55b4d219897c093d0f1db0c0';
const query = 'car';

async function getCarPhoto() {
    
    const response = await fetch(`https://pixabay.com/api/?key=54751795-c55b4d219897c093d0f1db0c0&q=cars&image_type=photo`);
    const data = await response.json();
    console.log(data);

    let images = data.hits[0].previewURL;
    console.log("images url ",images)
    console.log(data.hits[0].pageURL);
    let urlx = data.hits[0].pageURL;
}

let image = getCarPhoto();

window.addEventListener("load", () => {
    image1.setAttribute("src","https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_150.jpg");
})

// we have got two ways to do this shit
// one we can go the way it is 
// or we can create a img tag push it into picture-box 
// and for other stuff we need to iterate and push that shit in the box