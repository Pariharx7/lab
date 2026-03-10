let bird = document.getElementById("bird");
function genRan(){
    return random = Math.floor(Math.random() * 482)
}
console.log(genRan())
setInterval(() => {
    console.log(bird.style.top);
    bird.style.top = `${genRan()}px`;
}, 1000)