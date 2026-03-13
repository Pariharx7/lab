const canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./assets/images/bxrd.png";

let birdY = 200;
let birdX = 10;
let birdSize = 30;
let velocity = 0;
let gravity = 0.8;
let jump = -7;



function update(){
    velocity += gravity;

    birdY += velocity;

    if(birdY + birdSize > canvas.height){
        birdY = canvas.height - birdSize;
        velocity = 0;
    } 
    if(birdY < 0){
        birdY = 0;
        velocity = 0;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FF5733";
    // ctx.fillRect(birdX, birdY, birdSize, birdSize);
    ctx.drawImage(img,birdX, birdY, 50, 50);

    requestAnimationFrame(update);
}
update();

window.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        velocity = jump;
    }
})