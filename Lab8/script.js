let form = document.querySelector("form");
let AllList = document.querySelector("ul");
let tasksList = [];

class Task{
    constructor(taskName, status){
        this.taskName = taskName;
        this.status = status;
    }
}

AllList.addEventListener("click", (e)=>{
    let parent = e.target.parentElement.parentElement;
    if(e.target.classList.contains("done")){
        parent.querySelector("p").classList.add("ItsDone")
        EditTask(parent.querySelector("p").innerHTML);
    }
    else if (e.target.classList.contains("notDone")) {
        parent.remove();
        RemoveTask(parent.querySelector("p").innerHTML)
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    AddTasks();
})

function InsertHTMLList(task){
    AllList.insertAdjacentHTML(
        "beforeend",
        `<li class="list-group-item d-flex text-white justify-content-between">
                <p class="${task.status}">${task.taskName}</p>
                <div class="check">
                <i class="bi bi-check-square-fill text-success done"></i>
                <i class="bi bi-x-square-fill text-danger notDone"></i>
                </div>
            </li>`
    );
}

function AddTasks(){
    let task = new Task(document.querySelector("#floatingName").value, "NotDoneYet");
    document.querySelector("#floatingName").value = "";
    InsertHTMLList(task);
    tasksList.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasksList));
}

function EditTask(taskToEdit) {
    tasksList.forEach((task) => {
        if (task.taskName == taskToEdit) {
            task.status = "ItsDone";
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasksList));
}

function loadData(){
    tasksList = JSON.parse(localStorage.getItem("tasks"));
    if (tasksList == null){
        document.querySelector(".NoData").style.display = "block";
    }
    else{
        tasksList.forEach((task) => {
            InsertHTMLList(task)
        });
    }
}

function RemoveTask(taskToRemove){
    tasksList.forEach((task) => {
        if (task.taskName == taskToRemove){
            tasksList.splice(tasksList.indexOf(task), 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasksList));
}

loadData();