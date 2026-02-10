const scroreboard = document.querySelector(".scoreboard");
const canvasBox = document.querySelector("#playground");
const ctx = canvasBox.getContext("2d");
canvasBox.width = window.innerWidth;
canvasBox.height = window.innerHeight;

let bubblesArray = [];
let count = 0;

// #user input

let userInputNum;

do{
    userInputNum = prompt("Please enter a number: ");

    if(userInputNum === null) break;

} while(userInputNum === "" || isNaN(userInputNum));

console.log(userInputNum)

function createBubbles(count){
    for(let i = 1; i <= count; i++){
        let radius = Math.random() * count + 10;
        bubblesArray.push({
            x: Math.random() * (canvasBox.width - radius * 2) + radius,
            y: Math.random() * (canvasBox.height - radius * 2) + radius,
            radius: radius,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
            dx: (Math.random() - 0.5) * 4,
            dy: (Math.random() - 0.5) * 4
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvasBox.width, canvasBox.height);

    bubblesArray.forEach((b, index) => {
        b.x += b.dx;
        b.y += b.dy;

        if(b.x + b.radius > canvasBox.width || b.x - b.radius < 0){
            b.dx = -b.dx;
        }
        if(b.y + b.radius > canvasBox.height || b.y - b.radius < 0){
            b.dy = -b.dy;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color ;
        ctx.fill();
        ctx.closePath();
    });
    requestAnimationFrame(animate);
}

canvasBox.addEventListener('click', (e) => {
    bubblesArray.forEach((b, index) => {
        let dx = e.offsetX - b.x;
        let dy = e.offsetY - b.y;
        let distance = Math.sqrt(dx * dx + dy * dy);


        if(distance< b.radius) {
            bubblesArray.splice(index, 1);
            count++;
            console.log("Popped");
            console.log("Count : "+ count);
        }
        scroreboard.innerHTML = count;
    });
});


createBubbles(userInputNum);
animate();
