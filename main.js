const form = document.querySelector("form");
let list = document.querySelector(".todo-list");
let taskInput = document.querySelector(".task-input");
const deleteBtn = document.querySelector(".delete-btn");

let counter = 0; //tasks counter
const tasksCounter = document.querySelector("#counter");

init();

function onFormSubmit(event) {
  event.preventDefault();

  createItems();
  counter++;
  updateTasksCounter(counter);
  taskInput.value = "";
}

function createItems() {
  if (taskInput.value === "") {
    alert("This space requires an input, can not leave it blank");
  } else {
    let newItem = document.createElement("li");
    newItem.classList.add("item");

    let label = document.createElement("label");
    label.textContent = taskInput.value;

    let deleteBtn = document.createElement("span");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");

    newItem.appendChild(label);
    newItem.appendChild(deleteBtn);

    list.appendChild(newItem);
  }
}

function removeTask(e) {
  if (e.target.matches(".delete-btn")) {
    const item = e.target.closest("li");
    item.remove();
  }
}

function updateTasksCounter(counter) {
  if (counter == 1) {
    tasksCounter.textContent = `1 task`;
  } else {
    tasksCounter.textContent = `${counter} tasks`;
  }
}

//initialize the app
function init() {
  list.addEventListener(
    "click",
    (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        counter--;
        updateTasksCounter(counter);
      }
    },
    false
  );
}
