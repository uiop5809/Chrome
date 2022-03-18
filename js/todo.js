const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  localStorage.setItem("todos", JSON.stringify(toDos));
}

todoForm.addEventListener("submit", handleToDoSubmit);

if (localStorage.getItem("todos") !== null) {
  const parsedToDos = JSON.parse(localStorage.getItem("todos"));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
