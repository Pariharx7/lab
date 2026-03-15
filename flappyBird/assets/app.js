const canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");
const bgImg = new Image();
bgImg.src = "assets/images/background.png"
console.log(bgImg)
let birdImg = new Image();
birdImg.src = "./assets/images/bxrd.png";
let upperTowerImg = new Image();
upperTowerImg.src = "./assets/images/towerDown.png";
let lowerTowerImg = new Image();
lowerTowerImg.src = "./assets/images/towerUp.png";

let birdY = 250;
let birdX = 2;
let birdSize = 30;
let velocity = 0;
let gravity = 0.8;
let jump = -7;
let autoMode = true;

let pipes = [];
let framesCount = 0;
let pipeGap = 45;
let offScreenPoint = -50;


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
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
        let randomTop = Math.floor(Math.random() * (canvas.height/2) + 30); 
        pipes.push({
            x: canvas.width,
            top: randomTop
        });
    }


    ctx.fillStyle = "#FF5733";
    // ctx.fillRect(birdX, birdY, birdSize, birdSize);
    ctx.drawImage(birdImg, birdX, birdY, 50, 50);

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
        let pipeX = pipes[i].x;
        let pipeWidth = 30;
        let topPipeBottomY = pipes[i].top;
        let bottomPipeTopY = pipes[i].top + pipeGap;

        if(birdX < pipeX + pipeWidth && birdX + 50 > pipeX && birdY < topPipeBottomY){
            // alert("Crash hogyi birdie Upar 9 wale tower se");
            // autoMode = false;
            console.log('9')
        }
        if(birdX < pipeX + pipeWidth && birdX + 50 > pipeX && birdY + 50 > bottomPipeTopY){
            // alert("Crash hogyi birdie Niche 11 wale tower se");
            // autoMode = false;
            console.log('11');
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