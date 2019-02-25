
//Variablen
var todoList = [],
    i = 0,
    storedTodoList,
    text;

const todoListDiv = document.getElementById("Todos");

// if (typeof localStorage === "undefined" || localStorage === null) {
//   var LocalStorage = require('node-localstorage').LocalStorage;
//   localStorage = new LocalStorage('./scratch');
// }


function checkForStorage(){
    if (localStorage.getItem("savedTodoList") !== null ){
        todoList = getLocalStorage("savedTodoList");
        for (var i = 0; i < todoList.length; i++){
          console.log(i);
          createTodoFromStorage(i);
        }
    }
}

function createTodoFromStorage(position){
  createTodoEntry(position);
}

function addEntry(event) {


    event.preventDefault();
    const myInput = document.getElementById("myInput");
    text = myInput.value;

//checking the submited text
    if (text === "" || typeof text === 'undefined' || text === null ) {
        return alert("Bitte gib Text ein!");
    }

    let textAlreadyThere = Array.from(document.querySelectorAll('label')).find(function(label) {
        return label.textContent === text
    });

    if(typeof textAlreadyThere != 'undefined' || textAlreadyThere != null ) {
        return alert("Du hast schon so ein To-Do!")
    }

//adding the text to the local list and into the storage
    addTodoToList(text);
    setLocalStorage(todoList);

    let lastTodo = todoList.length -1;

    createTodoEntry(lastTodo);

    myInput.value = "";
    myInput.focus();
}
//Main function <---
//creating the entry / element inside the HTML
function createTodoEntry(todoEntry) {

    todoEntryDiv = document.createElement("div");
    todoEntryDiv.setAttribute("class", "todo-item");
    todoEntryDiv.setAttribute("id", todoEntry);

    let checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todoList[todoEntry].completed;


    checkbox.addEventListener('change', function(){
        if (checkbox.checked === true){
          let doneTodoList = document.getElementById("doneTodos");
          doneTodoList.appendChild(document.getElementById(todoEntry));
          todoList[todoEntry].completed = true;
          setLocalStorage(todoList);
        }else {
          todoListDiv.appendChild(document.getElementById(todoEntry));
          todoList[todoEntry].completed = false;
          setLocalStorage(todoList);
        }
    })

    let button = document.createElement("button");


    let label = document.createElement("label");


    label.innerText = todoList[todoEntry].todoText;


    todoEntryDiv.appendChild(checkbox);

    todoEntryDiv.appendChild(label);

    todoEntryDiv.appendChild(button);

    button.innerText = "Remove";

    button.onclick = function(){
      rmTodo(todoEntry);
      setLocalStorage(todoList);
      location.reload(true);
    }

    if (checkbox.checked === true){
      let doneTodoList = document.getElementById("doneTodos");
      return doneTodoList.appendChild(todoEntryDiv);
    }

    return todoListDiv.appendChild(todoEntryDiv);
}

function setLocalStorage(storeData) {
    localStorage.setItem("savedTodoList", JSON.stringify(storeData));
}

function getLocalStorage() {
   return JSON.parse(localStorage.getItem("savedTodoList"));
}

//TodoList object
function addTodoToList(todo) {
    todoList.push({
        completed: false,
        todoText: todo,
    })
}

function rmTodo(position) {
    todoList.splice(position, 1);
}

checkForStorage()
// module.exports = {
//   addTodoToList: addTodoToList,
//   foo: foo,
//   getTodoList: getTodoList,
//   localStorage: localStorage,
//   setLocalStorage: setLocalStorage,
//   getLocalStorage: getLocalStorage,
//   createTodoEntry: createTodoEntry,
// }
