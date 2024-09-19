export function updateCurrentTasksList(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function updateAllTasks(tasks) {
    const currentAllTodos = JSON.parse(localStorage.getItem('allTasks')) || [];
    currentAllTodos.unshift(tasks); 
    localStorage.setItem('allTasks', JSON.stringify(currentAllTodos));
}