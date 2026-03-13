// async function main() {
//     const canvas = document.querySelector("#gameCanvas");
//     let ctx = canvas.getContext("2d");
//     let y = 0;
//     setInterval(() => {
//         y = y + 1;
//         ctx.clearRect(0, 0, 1400, 600)
//         ctx.beginPath();
//         ctx.rect(1, y, 20, 20);
//         ctx.fill();
//     }, 1000)
//     await new Promise((r) => setTimeout(r, 0.33333333 * 1000));

// }
// main()


//trying diff approach

const canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");

let birdY = 200;
let birdX = 10;
let birdSize = 30;
let velocity = 0;
let gravity = 0.5;
let jump = -8;



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
    ctx.fillRect(birdX, birdY, birdSize, birdSize);

    requestAnimationFrame(update);
}
update();

window.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        velocity = jump;
    }
})