let input = document.querySelector("#newtask input")
let push = document.querySelector("#push")
let alltasks = document.querySelector("#tasks")

function addTask(){
    if(input.value.trim() === ""){
        alert("Please Enter Task to do....");
    }
    else{
        alltasks.innerHTML += `
        <div class = "task">
            <span class="taskname">
                ${input.value}
            </span>
            <button class="delete">
                <i class="ri-delete-bin-6-line"></i>
            </button>
        </div>
        `
        input.value = ""
    }
}

push.addEventListener("click",addTask)

input.addEventListener("click",function(e){
    if(e.key =="Enter"){
        addTask()
    }
})

alltasks.addEventListener("click",function(e){
    if(e.target.closest(".delete")){
        e.target.closest(".task").remove()
        return;
    }
    const task = e.target.closest(".task")
    if(task){
        task.classList.toggle("completed")
    }
})