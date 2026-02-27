const refreshButton = document.getElementById("refresh-btn");
const pictureBoxes = document.querySelectorAll(".picture-box");
const imageCollection = document.querySelectorAll(".picturebox-img");

refreshButton.addEventListener("click", () => {
    updateImages();
})


async function getCarPhoto() {

    const response = await fetch(`https://pixabay.com/api/?key=54751795-c55b4d219897c093d0f1db0c0&q=car&image_type=photo`);
    const data = await response.json();
    
    const randomNum = Math.floor(Math.random() * data.hits.length);
    const images = data.hits[randomNum].webformatURL;

    return images
}

async function updateImages() {
    
    imageCollection.forEach(async (img) => {
        const carURL = await getCarPhoto();
        img.src = carURL;
    });
}

function modifyUpdateImagesFn(fn, timeout){
    setTimeout(fn,timeout)
}

const statusx = navigator.onLine;
if(statusx){
    window.addEventListener("load", modifyUpdateImagesFn(updateImages, 7000));
} else{
    pictureBoxes.forEach((box) => {
        box.innerHTML = "No Internet";
        box.style.display = "flex";
        box.style.alignItems = "flex-end";
        box.style.fontWeight = "bold";
    })
}

// SHort Method
// navigator.onLine ?  window.addEventListener("load", modifyUpdateImagesFn(updateImages, 7000)) : pictureBoxes.forEach((box) => {
//         box.innerHTML = "No Internet";
//         box.style.display = "flex";
//         box.style.alignItems = "flex-end";
//         box.style.fontWeight = "bold";
//     })
