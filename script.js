
let curTarget=0;
let score = 0;
function resetbubble(){
let bubble = '';

for (let i = 0; i < 102; i++) {
    let val = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${val}</div>`;
}

 curTarget = Math.floor(Math.random() * 10);
 document.querySelector("#Target-value").innerHTML = curTarget;

let maingamecanvas = document.querySelector(".right-canvas");
maingamecanvas.innerHTML = bubble;

}


let TimeLeft =10;
function addtimer()
{
    let time = setInterval(() => {
        // 1 s por por call hobe
        if(TimeLeft==0){
            clearInterval(time);
            document.querySelector(".right-canvas").innerHTML =
            `<div class="game-over">
              <div>Game Over</div>
              <div >Score : ${score}</div>
            </div>`;
        }
        TimeLeft--;
        document.querySelector("#current-timer").innerHTML = TimeLeft;
    },1000);

    
}

addtimer();
resetbubble();

document.querySelector(".right-canvas").addEventListener("click",(x) =>{
     let num = Number(x.target.innerHTML)
     if(num==curTarget){
        resetbubble();
        score+=TimeLeft;
        TimeLeft=8;
        document.querySelector("#score").innerHTML = score;
     }
     else{
        TimeLeft=0;
     }
})