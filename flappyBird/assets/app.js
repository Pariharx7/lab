const canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./assets/images/bxrd.png";

let birdY = 250;
let birdX = 2;
let birdSize = 30;
let velocity = 0;
let gravity = 0.8;
let jump = -10;
let autoMode = true;

let pipes = [];
let framesCount = 0;
let pipeGap = 120;


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    velocity += gravity;

    birdY += velocity;

    if(autoMode && birdY > 250){
        velocity = jump;
    }

    if(birdY + birdSize > canvas.height){
        birdY = canvas.height - birdSize;
        velocity = 0;
    } 
    if(birdY < 0){
        birdY = 0;
        velocity = 0;
    }

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