const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const gretting = document.querySelector(".js-grettings");
//get elements(paragraph) from class name

const USER_LOCAL_STORAGE = "UserName";
const SHOWING_CN = "showing";
//class 'name' var, using classList object

////////////////////////////////////////////////////////////////////////
function saveName(text){
    localStorage.setItem(USER_LOCAL_STORAGE,text);
}

function paintGreeting(text){
    //form.classList.remove(SHOWING_CN);
    form.remove();
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello, ${text}`;
    //remove form(text box) -> show gretting(user text) -> change text
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForMe(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    //when we tab 'enter', event will cause!
}

function loadName(){
const currentUserName = localStorage.getItem(USER_LOCAL_STORAGE);

if(currentUserName === null){
    askForMe();
    //user has not name 
} else {
    paintGreeting(currentUserName);
   //user already has name 
}
//local storage = small information data set in JS
}
////////////////////////////////////////////////////////////////
function init(){
    loadName();
}

init();