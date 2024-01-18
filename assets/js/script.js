document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    addTaskButton.addEventListener("click", addTask);

    let tasks = [
        { description: 'Tarea 1', completed: false },
        { description: 'Tarea 2', completed: false },
        { description: 'Tarea 3', completed: false }
    ];

    function renderTasks() {
        taskList.innerHTML = '';
        let completedCount = 0;

        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <button>X</button>
            `;

            listItem.querySelector('input[type="checkbox"]').addEventListener('change', () => toggleTask(index));
            listItem.querySelector('button').addEventListener('click', () => deleteTask(index));

            taskList.appendChild(listItem);

            if (task.completed) {
                completedCount++;
            }
        });

        totalTasks.textContent = tasks.length;
        completedTasks.textContent = completedCount;
    }

    function addTask() {
        const description = taskInput.value.trim();

        if (description !== '') {
            tasks.push({ description, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    renderTasks();
});