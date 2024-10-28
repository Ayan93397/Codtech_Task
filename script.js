document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
             <button class="complete-btn" onclick="completeTask(this)">Complete</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = ''; // Clear the input field
    }
}

function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
