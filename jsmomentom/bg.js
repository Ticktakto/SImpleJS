const body = document.querySelector("body");


//////////////////////////////////////////////////////////////////////////

function paintImage(imgNumber){
   const image = new Image();
   image.src = `images/${imgNumber + 1}.jpg`;
   image.classList.add("bgImage");
   body.prepend(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * 3);
    // 0 ~ 3 random float number -> and remove decimal point by using 'floor'
    return number;
}

//////////////////////////////////////////////////////////////////////////

function init(){
 const randomNumber = getRandom();
 paintImage(randomNumber);   
}

init();