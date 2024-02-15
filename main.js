const form = document.querySelector("form");
let list = document.querySelector(".todo-list");
let taskInput = document.querySelector(".task-input");
const deleteBtn = document.querySelector(".delete-btn");

form.addEventListener("submit", onFormSubmit);
list.addEventListener("click", removeTask);

function onFormSubmit(event) {
  event.preventDefault();

  createItems();
  taskInput.value = "";
}

function createItems() {
  if (taskInput.value === "") {
    alert("This space requires an input, can not leave it blank");
  } else {
    let newItem = document.createElement("li");
    newItem.classList.add("item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let label = document.createElement("label");
    label.textContent = taskInput.value;

    let deleteBtn = document.createElement("span");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");

    newItem.appendChild(checkbox);
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
  // console.log("HELO");
}
