const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

let toDos = [];
const TODOS_LS = "toDos";
/////////////////////////////////////////////////////////////////////////

function deleteToDo(event){
const btn = event.target;//btn button element
const li = btn.parentNode;//btn's parent = <li>
toDoList.removeChild(li); // delete all <li> elements

const cleanToDos = toDos.filter(function (toDo){
    return toDo.id !== parseInt(li.id);
   }); // almost same perform 'forEach'
                                   // filter is performed by all items in array,
                                   // and it make another new array with 'true' value of items.

toDos = cleanToDos;//finally, we change 'toDos'array to new array.
saveToDos();
//first, to delete elements, we need to know parent node,
//we figure out <li> is parent,
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const listElement = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "🈚";
    deleteButton.addEventListener("click", deleteToDo);
    const Span = document.createElement("span");
    Span.innerText = `${text} `;
    //make ul->li, list

    listElement.appendChild(Span);
    listElement.appendChild(deleteButton);
    listElement.id = toDos.length + 1; // newId
    //li form finished(span + delete button)

    toDoList.appendChild(listElement);
    // push listElement in toDoList

    const toDoObj = {
        text: text,
        id: toDos.length + 1
    };
    toDos.push(toDoObj);
    saveToDos();
    //push a toDoObj in toDos array to save in local storage

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //saveToDo(currentValue);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //get item from LS

    if(loadedToDos !== null){
       const parsedToDos = JSON.parse(loadedToDos);

       parsedToDos.forEach(
           function (toDo) {
               //put current item on the first argument
           paintToDo(toDo.text);
       } // we can remember List, and print them entirely.
    );
       //foreach -> 'one' access per all of array elements
    }
//toDos === null, this 'to-do' form is always showing, so nothing to do.
    
}




//////////////////////////////////////////////////////////////////////////
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
