
//Variablen
var todoList = [],
    i = 0,
    storedTodoList,
    text;

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}


function checkForStorage(){
    if (localStorage.getItem("todoList") !== null ){
        todoList = getLocalStorage();
        for (i = 0; i < todoList.length; i++){
            return true;
        }
    }
}

function addEntry(event) {


    event.preventDefault();
    const myInput = document.getElementById("myInput");
    text = myInput.value;

    if (text === "" || typeof text === 'undefined' || text === null ) {
        return alert("Bitte gib Text ein!");
    }

    let textAlreadyThere = Array.from(document.querySelectorAll('label')).find(function(label) {
        return label.textContent === text
    });

    if(typeof textAlreadyThere != 'undefined' || textAlreadyThere != null ) {
        return alert("Du hast schon so ein To-Do!")
    }
    addTodoToList(myInput.value)

    const todoListDiv = document.getElementById("Todos")

    const todoEntryDiv = createTodoEntry(text, todoListDiv);

    todoListDiv.appendChild(todoEntryDiv);


    myInput.value = "";
    myInput.focus();
}

function createTodoEntry(todoEntry, todoListDiv) {

    todoEntryDiv = document.createElement("div");
    todoEntryDiv.setAttribute("class", "todo-item");

    let checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todoEntry.completed;//fix default

    checkbox.addEventListener('change', function(){
        if (checkbox.checked === true){
            let doneTodoList = document.getElementById("doneTodos");
            doneTodoList.appendChild(todoEntryDiv);
        }else {
           todoListDiv.appendChild(todoEntryDiv);
        }
    })

    let button = document.createElement("button");


    let label = document.createElement("label");

    if (typeof todoEntry === 'object'){
        label.innerText = todoEntry.todoText;
    }else {
        label.innerText = todoEntry;
    }

    todoEntryDiv.appendChild(checkbox);

    todoEntryDiv.appendChild(label);

    todoEntryDiv.appendChild(button);

    button.innerText = "Remove";

    button.onclick = function(){
        todoListDiv.removeChild(todoEntryDiv);//Es fehlt das entfehrnen aus dem Array
        rmTodo(todoList.findIndex(todo => todo === todoEntry.todoTest))
    }

    return todoEntryDiv;
}

function setLocalStorage(storeData){
    localStorage.setItem("savedTodoList", JSON.stringify(storeData));
}

function getLocalStorage(){
    storedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));

    return storedTodoList;
}

function addTodoToList(todo) {
    todoList.push({
        completed: false,
        todoText: todo,
    })
}

function getTodoList() {
  return todoList;
}

function foo(bar) {
  return bar;
}


function rmTodo(position){
    todoList.splice(position, 1);
}

module.exports = {
  addTodoToList: addTodoToList,
  foo: foo,
  getTodoList: getTodoList,
  localStorage: localStorage
}
