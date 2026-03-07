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

    console.log(posY);
    console.log(posX);

    switch (e.key){
        case "ArrowUp":
        case "W":
        case "w":
            if(posY - pixelsToMove > 0){
                posY -= pixelsToMove;
                break;
            } else{
                posY = 0;
                break;
            }
            
        case "ArrowDown":
        case "S":
        case "s":
            if(posY + boxHeight + pixelsToMove <= screenHeight){
                posY += pixelsToMove;
                break;
            } else{
                posY = screenHeight + pixelsToMove;
                break;
            }

        case "ArrowLeft":
        case "A":
        case "a":
            if(posX - pixelsToMove > 0) {
                posX -= pixelsToMove;
                break;
            }else{
                posX = 0;
                break;
            }
            
        case "ArrowRight":
        case "D":
        case "d":
            if(posX + boxWidth + pixelsToMove <= screenWidth){
                posX += pixelsToMove; 
                break;
            } else {
                posX = screenWidth - boxWidth;
                break;
            }
        default: 
            console.log('huhu');
            
            return;
    }

    e.preventDefault();

    blockBox.style.transform = `translate(${posX}px, ${posY}px)`;
})

//upon E change color of box