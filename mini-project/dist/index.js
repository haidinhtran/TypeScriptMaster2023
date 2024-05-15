"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todo");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("submitted");
// });
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    console.log(todosJSON);
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// btn?.addEventListener("click", function(){
//     alert(input.value);
//     input.value="";
// });
// (<HTMLInputElement>input).value; /* to avoid since doesn't work in jsx */
// let mystery: unknown = "Hello World!";
// const numChars = (mystery as string).length;
