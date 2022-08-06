window.addEventListener('load', () => {
    const form = document.getElementById('new_task_form')
    const input = document.getElementById('new_task_input')
    const elList = document.querySelector('.tasks')
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        const task = input.value;
        if(!task) {
           return alert("Please fill out the task");
        }
        const elTask = document.createElement("div")
        const elTaskContent = document.createElement("div")
        const elTaskAction = document.createElement("div")
        const elTaskEdit = document.createElement("button")
        const elTaskDelete = document.createElement("button")
        const elTaskInput = document.createElement("input")
        elTaskEdit.innerHTML = "Edit";
        elTaskDelete.innerHTML = "Delete";
        elTaskInput.type = "text"
        elTaskInput.value = task;
        input.innerHTML = null;
        elTaskInput.setAttribute("readonly", "readonly")
        elTaskInput.classList.add("text")
        elTask.classList.add("task")
        elTaskContent.classList.add("content")
        elTaskAction.classList.add("actions")
        elTaskEdit.classList.add("edit")
        elTaskEdit.classList.add("btn")
        elTaskDelete.classList.add("delete")
        elTaskDelete.classList.add("btn")
        elTaskContent.appendChild(elTaskInput)
        elTaskAction.appendChild(elTaskEdit)
        elTaskAction.appendChild(elTaskDelete)
        elTask.appendChild(elTaskContent)
        elTask.appendChild(elTaskAction)
        elList.appendChild(elTask)
        elTaskEdit.addEventListener('click', () => {
            if (elTaskEdit.innerText.toLowerCase() == "edit") {
                elTaskInput.removeAttribute("readonly");
                elTaskInput.focus();
                elTaskEdit.innerText = "Save";
            } else {
                elTaskInput.setAttribute("readonly", "readonly")
                elTaskEdit.innerText = "Edit";
            }
        })
        elTaskDelete.addEventListener('click', () => {
            elList.removeChild(elTask)
        })
    })
})