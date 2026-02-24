const refreshButton = document.getElementById("refresh-btn");
const pictureBoxes = document.querySelectorAll(".picture-box");
const imageCollection = document.querySelectorAll(".picturebox-img")
console.log(imageCollection);

refreshButton.addEventListener("click", () => {
    alert("Clicked");
})


async function getCarPhoto() {

    const response = await fetch(`https://pixabay.com/api/?key=54751795-c55b4d219897c093d0f1db0c0&q=cars&image_type=photo`);
    const data = await response.json();

    const randomNum = Math.floor(Math.random() * data.hits.length);
    const images = data.hits[randomNum].previewURL;

    return images
}


function getRandomURL(url= ""){
    getCarPhoto().then(ul => {
        url = ul;
    })
    return url;
}

console.log("Line 30 getRandom => ",getRandomURL());


window.addEventListener("load", () => {
    let carUrl = "";
    getCarPhoto().then(url => {
        carUrl = url;
        console.log("var updated", carUrl);
    })
    // image1.setAttribute("src", `${carUrl}`);
})

// we have got two ways to do this shit
// one we can go the way it is 
// or we can create a img tag push it into picture-box 
// and for other stuff we need to iterate and push that shit in the box

window.addEventListener("load", () => {
    let carUrl = "";
    getCarPhoto().then(url => {
        carUrl = url;
        console.log("var updated", carUrl);
    })
    imageCollection.forEach((img) => {
        img.setAttribute("src", `${carUrl}`);
        console.log("This takes time")
    })
})