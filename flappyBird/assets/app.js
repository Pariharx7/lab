const canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");
let bird = document.getElementById("bird");

setInterval(() => {
    ctx.clearRect(0, 0, 1400, 600)
    ctx.beginPath();
    ctx.rect(1, genRan(), 20, 20);
    ctx.fill();
}, 1000)


function genRan(){
    return random = Math.floor(Math.random() * 482)
}
// console.log(genRan())
// setInterval(() => {
// //     console.log(bird.style.top);
// //     bird.style.top = `${genRan()}px`;
// // }, 1000)
