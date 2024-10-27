const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
        if(e.target.className === 'red'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className === 'green'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className === 'blue'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.textContent === 'Reset'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.textContent === 'Random'){
            generateRandomColor();
        }
    })
})

function generateRandomColor(){
    
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
                body.style.backgroundColor = `rgb(${red},${green},${blue})`;

}
