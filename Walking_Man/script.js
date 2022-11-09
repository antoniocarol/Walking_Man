const man = document.querySelector('body img');
const pageSize = document.body.offsetWidth - 590;

console.log(pageSize);

function manPosition() {
    return parseInt(man.style.left.split('px')[0]) || 0;
}


let walkinAnimation = 1;
const boogie = setInterval(() => {
    const newPosition = manPosition() + 100;

    man.style.left = `${newPosition}px`;

    if (walkinAnimation == 8) {
        walkinAnimation = 1;
    } else {
        walkinAnimation++;
        man.src = `assets/${walkinAnimation}.png`
    }
    if (pageSize < newPosition) {
        clearInterval(boogie);
    }
}, 300);