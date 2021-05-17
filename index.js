import UI from './UI.js';
import Task from './Task.js';

const ui = new UI();

ui.showAllTasks();

document.querySelector('.AddTaskBtn').addEventListener('click', e => {
    const taskTitle = document.querySelector('#newtaskID').value;

    if (taskTitle.length > 0) {
        const task = new Task(taskTitle);

        ui.addToUI(task);
        ui.resetForm();
    };
});

document.querySelector('.tasklist').addEventListener('click', e => {
    if (e.target.className.includes('task__op_edit')) {
        ui.editTask(e);
    };

    if (e.target.className.includes('task__op_delete')) {
        ui.deleteTask(e);
    };

    if (e.target.className.includes('task-check')) {
        ui.completedTask(e);
    };
});


document.querySelector('.EditTaskBtn').addEventListener('click', (e) => {
    ui.updateTask(e)
});
document.querySelector('.CancelTaskBtn').addEventListener('click', (e) => {
    ui.cancelTask(e)
});
