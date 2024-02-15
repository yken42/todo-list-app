const form = document.querySelector('form')
let list = document.querySelector('.todo-list');
 let taskInput = document.querySelector(".task-input");



function onFormSubmit(event){
    event.preventDefault();
    // on new task entered --> create new list item
   createItems();
    taskInput.value = '';
   
}
form.addEventListener("submit", onFormSubmit);


function removeTask(){
  
}
 

function createItems(){
    if(taskInput.value === ''){
        alert('This space requires an input, can not leave it blank');
    }
    else{

    
   let newItem = document.createElement('li');
   newItem.classList.add('item');
   let itemText = taskInput.value;
   newItem.innerHTML = `
   <input type="checkbox" class="unchecked" />
   <label for="task">${itemText}</label>
   <span>X</span>`
   list.appendChild(newItem);
}




   

}

function init(){
   
}