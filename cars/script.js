const refreshButton = document.getElementById("refresh-btn");
const pictureBoxes = document.querySelectorAll(".picture-box");

// console.log(pictureBoxes);

refreshButton.addEventListener("click", () => {
    alert("Clicked");
})

//next thing to do is to find an API that provides images of cars// work on pixabay api

const API_KEY = '54751795-c55b4d219897c093d0f1db0c0';
const query = 'car';

async function getCarPhoto() {
    const proxy = "https://cors-anywhere.herokuapp.com"
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const url = `https://pixabay.com/${API_KEY}/&q=${query}&image_type=photo&page={randomPage}`;
    const finalUrl = proxy + url;
    const response = await fetch(`https://pixabay.com/api/?key=54751795-c55b4d219897c093d0f1db0c0&q=cars&image_type=photo`);
    const data = await response.json();
    
    console.log(data.hits[0].pageURL);
    
}

getCarPhoto();