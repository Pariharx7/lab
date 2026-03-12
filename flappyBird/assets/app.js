async function main() {
    const canvas = document.querySelector("#gameCanvas");
    let ctx = canvas.getContext("2d");
    let bird = document.getElementById("bird");
    let y = 0;
    setInterval(() => {
        y = y + 1;
        ctx.clearRect(0, 0, 1400, 600)
        ctx.beginPath();
        ctx.rect(1, y, 20, 20);
        ctx.fill();
    }, 1000)
    await new Promise((r) => setTimeout(r, 0.33333333 * 1000));

}
main()

function genRan() {
    return random = Math.floor(Math.random() * 100)
}
// console.log(genRan())
// setInterval(() => {
// //     console.log(bird.style.top);
// //     bird.style.top = `${genRan()}px`;
// // }, 1000)
