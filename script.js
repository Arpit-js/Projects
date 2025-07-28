
let container = document.querySelector(".container");
let startBtn = document.querySelector(".start");
let subHeading = document.querySelector("h3");
let colors = ["red", "blue", "green", "yellow"];

let gameSeq = [];
let playerSeq = [];
let level = 0;
let started = false;

startBtn.addEventListener("click", () => {
    if (started) return;
    started = true;

    const exitBtn = document.createElement("button");
    exitBtn.classList.add("exit");
    exitBtn.textContent = "Exit";
    exitBtn.addEventListener("click", () => location.reload());

    startBtn.remove();
    container.appendChild(exitBtn);

    levelUp();
});

function levelUp() {
    playerSeq = [];
    level++;
    subHeading.textContent = `Level ${level}`;

    let rndm = Math.floor(Math.random() * 4);

    let rndmColor = colors[rndm];
    gameSeq.push(rndmColor);
    let color = document.querySelector(`.${rndmColor}`);
    flash(color);
    // ----------------
    subHeading.textContent = `Level ${level}`;
subHeading.classList.add("level-up");
setTimeout(() => subHeading.classList.remove("level-up"), 600);

}

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

function btnPress(){
    btnId = this;
    let idColor = btnId.getAttribute("id");
    playerSeq.push(idColor);
    flash(this);
    check(playerSeq.length-1);
}

let keys = document.querySelectorAll(".color");
for(key of keys){
    key.addEventListener("click", btnPress);
}

function check(indx) {

    if(gameSeq[indx] === playerSeq[indx]){
        if(gameSeq.length == playerSeq.length){
            setTimeout(() => {
            levelUp();
            }, 600);
        } else{
            
        }
    } else{
        subHeading.textContent = "game over!!! Please try again";
        started = false;
        level = 0;
        return;
    }
    
}
