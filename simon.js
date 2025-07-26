let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelup();
});

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomind = Math.floor(Math.random() * 3);
    // console.log(randomind);
    let randomcolor = btns[randomind];
    let randbtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    btnflash(randbtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}


let heighestscore = 0;
function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerHTML = `Game over! <b>your score is ${level}</b> <br>Press any key to start Again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    if(level > heighestscore){
        heighestscore = level;
        let h3 = document.querySelector("h3");
        h3.innerText = `Highest Score is : ${heighestscore}`;
    }
        reset();
    }
}

function btnpress(){
    let btn = this;
    btnflash(btn);

    let userbtn = btn.getAttribute("id");
    userSeq.push(userbtn);
    // console.log(userbtn);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
    btnflash(btn);
}

function reset(){
    started==false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

