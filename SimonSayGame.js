let gameSeq=[];
let userSeq=[];
let highscores=[];
let highscore=0;

let btns =["yellow","red","blue","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started.");
        started = true;

        levelUp();
    }
});
document.addEventListener("click",function(){
    if(started == false){
        console.log("Game is started.");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    //random btn chooser
};

function checkAns(){
    let idx=userSeq.length-1;
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML=`Game is over!!<b> Your score is ${level}. </b>`;
        if(level!=0){
            document.querySelector("body").style.backgroundColor="red";
        }
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
 
        highscores.push(level);
        setTimeout(highScore,1000);

        setTimeout(reset,2000);
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(let butn of allBtns){
    butn.addEventListener("click",btnPress);
}
function highScore(){
    for(let newHighScore of highscores){
        if ((newHighScore>highscore)&& (newHighScore!=1)) {
            highscore = newHighScore;  // Set the new high score. </b
            h2.innerHTML=`Woo Hoo!!!<b> You achive a highscore ${highscore}. </b> <br>Press a new button to start again the game.`;
        }
    }
}
function reset(){
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;      
}
