const form = document.querySelector("form");
let list = document.querySelector(".todo-list");
let taskInput = document.querySelector(".task-input");
const deleteBtn = document.querySelector(".delete-btn");

let counter = 0; //tasks counter
const tasksCounter = document.querySelector("#counter");

const genID = () => Math.random().toString(36).slice(2, 8);

let todos = [];

init();

function onFormSubmit(event) {
  event.preventDefault();

  if (taskInput.value != "") {
    todos.push({
      id: genID(),
      task: taskInput.value,
      completed: false,
    });
    counter++;
    updateTasksCounter(counter);
  } else {
    alert("This space requires an input, can not leave it blank");
  }
  render();
  taskInput.value = "";
}

function render() {
  let markup = "";
  for (let todo of todos) {
    markup += `
      <li class="item" id="${todo.id}">
        <input type="checkbox" class="checked" ${
          todo.completed ? "checked" : ""
        }>
        <label for="check">${todo.task}</label> 
        <span class="delete-btn">X</span>
      </li>`;
  }

  list.innerHTML = markup;
}

// function removeTask(id) {
//   todos = todos.filter((task) => task.id !== id);
//   createItems();
// }

function updateTasksCounter(counter) {
  if (counter == 1) {
    tasksCounter.textContent = `1 task`;
  } else {
    tasksCounter.textContent = `${counter} tasks`;
  }
}

//initialize the app
function init() {
  form.addEventListener("submit", onFormSubmit);
  list.addEventListener(
    "click",
    (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        counter--;
        updateTasksCounter(counter);
        todos = todos.filter((task) => task.id !== e.target.parentElement.id);
        render();
      }
    },
    false
  );
}
