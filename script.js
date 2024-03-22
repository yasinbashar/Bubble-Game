

let bubble=""

for(let i=0;i<100;i++)
{
    bubble +='<div class="bubble">1</div>'
}
let maingamecanvas = document.querySelector(".right-canvas");
maingamecanvas.innerHTML = bubble;