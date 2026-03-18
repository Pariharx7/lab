const canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");
const bgImg = new Image();
bgImg.src = "assets/images/background.png";
const bgImg2 = new Image();
bgImg.src = "assets/images/backgroundFL.png";
let birdImg = new Image();
birdImg.src = "./assets/images/birdxie.png";
let upperTowerImg = new Image();
upperTowerImg.src = "./assets/images/towerDown.png";
let lowerTowerImg = new Image();
lowerTowerImg.src = "./assets/images/towerUp.png";

let bgX = 0;
let bgSpeed = 10;

let birdY = 50;
let birdX = 2;
let birdSize = 30;
let velocity = 0;
let gravity = 0.12;
let jump = -1.5;

let pipes = [];
let framesCount = 0;
let pipeGap = 45;
let offScreenPoint = -50;
let pipeWidth = 50;

let score = 0;

function drawMovingBGImg() {
    ctx.drawImage(bgImg, 0, 0, canvas.width + 1, canvas.height);

    ctx.drawImage(bgImg2, bgX + canvas.width, 0, canvas.width + 1, canvas.height);

    bgX -= bgSpeed;

    if(bgX <= -canvas.width){
        bgX = 0;
    }
}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMovingBGImg();
    velocity += gravity;
    
    if(velocity > 3){
        velocity = 3;
    }
    birdY += velocity;

    framesCount++;


    if(birdY + birdSize > canvas.height){
        birdY = canvas.height - birdSize;
        velocity = 0;
    } 
    if(birdY < 0){
        birdY = 0;
        velocity = 0;
    }

    if(framesCount % 50 == 0){
        let randomTop = Math.floor(Math.random() * (canvas.height/2) + 20); 
        pipes.push({
            x: canvas.width,
            top: randomTop
        });
    }


    // ctx.fillStyle = "#FF5733";
    // ctx.fillRect(birdX, birdY, birdSize, birdSize);
    ctx.drawImage(birdImg, birdX, birdY, 30, 30);

// tower loop
    for(let i = pipes.length - 1; i >= 0; i--){
        
        pipes[i].x -= 2;

        ctx.fillStyle = "green";

        // ctx.fillRect(pipes[i].x, 0, 30, pipes[i].top);
        ctx.drawImage(upperTowerImg, pipes[i].x, 0, 30, pipes[i].top);

        let bottomPipeY = pipes[i].top + pipeGap;
        // ctx.fillRect(pipes[i].x, bottomPipeY, 30, canvas.height - bottomPipeY);
        ctx.drawImage(lowerTowerImg, pipes[i].x, bottomPipeY, 30, canvas.height - bottomPipeY);

        if(pipes[i].x < offScreenPoint){
            pipes.splice(i, -1);
        }
    }

    //detection logic

    for(let i = 0; i < pipes.length; i++){
        let pipe = pipes[i];
        let pipeWidth = 30;

        let birdRight = birdX + 25;
        let birdLeft = birdX + 10;
        let birdTop = birdY + 10;
        let birdBottom = birdY + 25;

        let pipeRight = pipe.x + pipeWidth;
        let pipeLeft = pipe.x;
        let topPipeBottom = pipe.top;
        let bottomPipeTop = pipe.top + pipeGap;

        if(birdRight > pipeLeft && birdLeft < pipeRight){
            if(birdTop < topPipeBottom){
                gameOver();
            }
            if(birdBottom > bottomPipeTop){
                gameOver();
            }
        }
        if(birdBottom > canvas.height) {
            gameOver();
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
window.addEventListener("click", () => {
        velocity = jump;
})

function gameOver(){
    birdY = 50;
    velocity = 0;
    pipes = [];
    // alert("Game over! Score : 0");
    // location.reload();
    console.log("Game over")
}