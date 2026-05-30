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
        deadline: deadline.value
    };

    tasks.push(task);
    taskInput.value = "";
    deadline.value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${task.subject}</strong> - ${task.name}
            <br>
            📅 Deadline: ${task.deadline}
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}