let numbar = document.getElementById("numbar");
let counter = 0;

setInterval(() => {
    if (counter == 65) {
        clearInterval();
    } else {
        counter+=1;
        numbar.innerHTML = counter + "%";
    }
}, 30);