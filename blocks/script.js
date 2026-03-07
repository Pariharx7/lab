const body = document.querySelector("body");
const blockBox = document.getElementById("block");

let posX = blockBox.offsetLeft;
let posY = blockBox.offsetTop;
const pixelsToMove = 100;

body.addEventListener("keydown", (e) => {   

    const boxWidth = blockBox.offsetWidth;
    const boxHeight = blockBox.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    switch (e.key){
        case "ArrowUp":
        case "W":
        case "w":
            if(posX > 0) posY -= pixelsToMove;
            break;
        case "ArrowDown":
        case "S":
        case "s":
            if(posX + boxHeight < screenHeight) posY += pixelsToMove;
            break;
        case "ArrowLeft":
        case "A":
        case "a":
            if(posY > 0) posX -= pixelsToMove;
            break;
        case "ArrowRight":
        case "D":
        case "d":
            if(posY + boxWidth < screenWidth) posX += pixelsToMove; 
            break;
        default: 
            return;
    }

    e.preventDefault();

    blockBox.style.transform = `translate(${posX}px, ${posY}px)`;
})

//upon E change color of box