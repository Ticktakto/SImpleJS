const canvas = document.getElementById("js-Canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js-Color");
const range = document.getElementById("js-Range"); 
const mode = document.getElementById("jsFill");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.fillStyle="white";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting=false;
let filling=false;

function startPainting(){
    painting=true;
}

function stopPainting(){
    painting=false;
}

function onMouseMove(event){
   //offsetX,Y -> 객체(캔버스) 내부만의 좌표, clientX,Y -> 전체 페이지의 좌표
   const x = event.offsetX;
   const y = event.offsetY;
   if(!painting){
      ctx.beginPath();
      ctx.moveTo(x, y);
   } else {
      ctx.lineTo(x, y);
      ctx.stroke();
   }
}

function handleClickColor(event){
    const Color = event.target.style.backgroundColor;
    ctx.strokeStyle = Color;
    ctx.fillStyle = Color;
}

function handleRangeChange(event){
 ctx.lineWidth=event.target.value;
}
//내가 필요한 목표 객체의 속성을 얻기 위해서, 먼저 console.log(event);로 모든 객체 속성을 파악해서 거기서 필요한 것을 추출한다.

function handleFillingMode(event){
    if(filling===true){
       filling=false;
       mode.innerText="Fill";
    }else{
        filling=true;
        mode.innerText="Paint";

    }
}

function handleCanvasMake(){
    if(filling){
    ctx.fillRect(0,0,canvas.width,canvas.height);
 }
}

function handleCM(event){
    event.preventDefault();
}

function handleSave(event){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href=image;
    link.download="This_is_downloading..";
    link.click();
    //link, <a>의 기능 3가지를 나타냄.
}

if(canvas){
    
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click",handleCanvasMake);
    canvas.addEventListener("contextmenu", handleCM);
}
Array.from(colors).forEach(color=>color.addEventListener("click",handleClickColor));
//'color' parameter means -> 배열 안에 있는 div 같은, item들을 뜻함. 배열의 원소

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleFillingMode);
}

if(save){
    save.addEventListener("click", handleSave);
}