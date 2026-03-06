const body = document.querySelector("body");
const blockBox = document.getElementById("block");

let posX = 0;
let posY = 0;
const pixelsToMove = 10;

body.addEventListener("keydown", (e) => {   
    switch (e.key){
        case "ArrowUp":
        case "W":
        case "w":
            posY -= pixelsToMove;
            break;
        case "ArrowDown":
        case "S":
        case "s":
            posY += pixelsToMove;
            break;
        case "ArrowLeft":
        case "A":
        case "a":
            posX -= pixelsToMove;
            break;
        case "ArrowRight":
        case "D":
        case "d":
            posX += pixelsToMove; 
            break;
        default: 
            return;
    }

    e.preventDefault();

    blockBox.style.transform = `translate(${posX}px, ${posY}px)`;
})

//upon E change color of box