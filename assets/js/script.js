var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() { document.createElement("li");
event.preventDefault();
var taskNameInput = document.querySelector("input[name='task-name']").value;
var taskTypeInput = document.querySelector("select[name='task-type']").value;



    var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
var taskInfoEl = document.createElement("div")
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
listItemEl.appendChild(taskInfoEl)


taskToDoEl.appendChild(listItemEl);
console.dir(listItemEl);
};

formEl.addEventListener("submit" ,  createTaskHandler);
