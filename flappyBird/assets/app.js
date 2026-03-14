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
let pipeGap = 40;
let offScreenPoint = -50;


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

    if(framesCount % 70 == 0){
        let randomTop = Math.random() * (canvas.height / 2) + 50; 
        console.log(randomTop)
        pipes.push({
            x: canvas.width,
            top: randomTop
        });
    }


    ctx.fillStyle = "#FF5733";
    // ctx.fillRect(birdX, birdY, birdSize, birdSize);
    ctx.drawImage(img,birdX, birdY, 50, 50);

// tower loop
    for(let i = pipes.length - 1; i >= 0; i--){
        pipes[i].x -= 2;

        ctx.fillStyle = "green";

        ctx.fillRect(pipes[i].x, 0, 30, pipes[i].top);

        let bottomPipeY = pipes[i].top + pipeGap;
        ctx.fillRect(pipes[i].x, bottomPipeY, 30, canvas.height - bottomPipeY);

        if(pipes[i].x < offScreenPoint){
            pipes.splice(i, -1);
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