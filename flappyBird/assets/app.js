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

    framesCount++;

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

    if(framesCount % 120 == 0){
        let minPipeHeight = 50;
        let maxPipeHeight = canvas.height - pipeGap - minPipeHeight;
        let randomHeight = Math.floor(Math.random() * (maxPipeHeight - minPipeHeight + 1)) + minPipeHeight;

        pipes.push({
            x: canvas.width,
            top: randomHeight
        });
    }


    ctx.fillStyle = "#FF5733";
    // ctx.fillRect(birdX, birdY, birdSize, birdSize);
    ctx.drawImage(img,birdX, birdY, 50, 50);

    for(let i = 0; i < pipes.length; i++){
        pipes[i].x -= 2;

        ctx.fillStyle = "green";

        ctx.fillRect(pipes[i].x, 0, 50, pipes[i].top);

        let bottomPipeY = pipes[i].top + pipeGap;
        ctx.fillRect(pipes[i].x, bottomPipeY, 50, canvas.height - bottomPipeY);

        if(pipes[i].x < -50){
            pipes.splice(i, -1);
            i--;
        }
    }

    requestAnimationFrame(update);
}
update();

window.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        velocity = jump;
    }
})