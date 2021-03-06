var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function() { document.createElement("li");
event.preventDefault();
var taskNameInput = document.querySelector("input[name='task-name']").value;
var taskTypeInput = document.querySelector("select[name='task-type']").value;
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
}
formEl.reset();
var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
};
createTaskEl(taskDataObj);
};
var createTaskEl = function(taskDataObj){
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
var taskInfoEl = document.createElement("div")
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl)
taskToDoEl.appendChild(listItemEl);
console.dir(listItemEl);


};
formEl.addEventListener("submit" ,  taskFormHandler);
