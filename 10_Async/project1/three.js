// generate a random color 

const random_color = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        console.log(color);
    }
    return color
}
let intervalId;
const startChangingColor = function name(params) {
    if (!intervalId) {
        intervalId = setInterval(ChangeBgColor, 1000);
    }
    function ChangeBgColor() {
        document.body.style.backgroundColor = random_color();
    }
}
const stopChangingColor = function name(params) {
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)