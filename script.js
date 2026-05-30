let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const subject = document.getElementById("subject");
    const deadline = document.getElementById("deadline");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        name: taskInput.value,
        subject: subject.value,
        deadline: deadline.value,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";
    deadline.value = "";

    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <div>
                <strong>${task.subject}</strong> - ${task.name}
                <br>
                📅 ${task.deadline}
            </div>

            <div>
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">🗑</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
