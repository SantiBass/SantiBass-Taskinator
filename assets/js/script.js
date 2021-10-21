var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() { document.createElement("li");
    var listItemEl =document.createElement("li");
listItemEl.className ="task-item";
listItemEl.textContent = "This is a new task.";
taskToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click" ,  createTaskHandler);
