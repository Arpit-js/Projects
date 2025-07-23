let input = document.querySelector(".t1");
let btn = document.querySelector(".add-btn");
let container = document.querySelector(".container2");

function assignTask() {
    const taskText = input.value.trim(); 

    if (taskText !== '') {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("tasks");

        const divLabel = document.createElement("label");

        const divInput = document.createElement("input");
        divInput.type = "checkbox";

        const divSpan = document.createElement("span");
        divSpan.textContent = taskText;
        
         divLabel.appendChild(divInput);
        divLabel.appendChild(divSpan);

        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            taskDiv.remove();
        });

        taskDiv.appendChild(divLabel);
        taskDiv.appendChild(deleteBtn);
        

        container.appendChild(taskDiv);

        input.value = "";
    }
}

btn.addEventListener("click", assignTask);
