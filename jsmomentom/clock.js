const clockContainer = document.querySelector(".js-clock");
//among the entire html's paragraph, choose class=js-clock paragrah. 
const clockTitle = clockContainer.querySelector("h1");
//choose js-clock's child node, among the clockContainer(class=js-clock p)

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const min =  date.getMinutes();
    const sec = date.getSeconds();

    if(sec >= 10 && min >= 10){
    clockTitle.innerHTML = `${hours}:${min}:${sec}`;
     }
    else if(sec < 10 && min >= 10){
        clockTitle.innerHTML = `${hours}:${min}:0${sec}`;
    } else if(min < 10 && sec >= 10){
        clockTitle.innerHTML = `${hours}:0${min}:${sec}`;
    } else {
        clockTitle.innerHTML = `${hours}:0${min}:0${sec}`;
    }
}
//use setInterval(fuc, interval) function, it is performed fuc
// by interval loop 


function init(){
    getTime();
    setInterval(getTime,1000);
    //fuc & (millsec)
}

init();