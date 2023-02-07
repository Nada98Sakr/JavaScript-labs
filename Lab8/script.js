let form = document.querySelector("form");
let AllList = document.querySelector("ul");
// let tasksList = [];

AllList.addEventListener("click", (e)=>{
    let parent = e.target.parentElement.parentElement;
    if(e.target.classList.contains("done")){
        parent.querySelector("p").style.textDecoration = "line-through";
    }
    else if (e.target.classList.contains("notDone")) {
        parent.remove();
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = document.querySelector("#new").value;
    document.querySelector("#new").value = "";
    localStorage.setItem("tasks", userName);
    AllList.insertAdjacentHTML(
        "beforeend",
        `<li class="list-group-item d-flex bg-dark text-white justify-content-between">
                <p>${task}</p>
                <div class="check">
                <i class="bi bi-check-square-fill text-success done"></i>
                <i class="bi bi-x-square-fill text-danger notDone"></i>
                </div>
            </li>`
    );
    // AddTasks();
})

// function AddTasks(){
//     localStorage.setItem("tasks", JSON.stringify(tasksList));
// }

// function loadData(){
//     return tasksList = JSON.parse(localStorage.getItem(tasks));
// }