export function updateCurrent(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function updateAll(todos) {
    const currentAllTodos = JSON.parse(localStorage.getItem('allTodos')) || [];
    currentAllTodos.unshift(todos); 
    localStorage.setItem('allTodos', JSON.stringify(currentAllTodos));
}

export function updateDeleteAll(todos) {
    let deletedTodos = JSON.parse(localStorage.getItem('deletedTodos')) || [];
    deletedTodos = [...todos, ...deletedTodos]
    localStorage.setItem('deletedTodos', JSON.stringify(deletedTodos));
}

export function updateDeleteOne(todos) {
    const deletedTodos = JSON.parse(localStorage.getItem('deletedTodos')) || [];
    deletedTodos.unshift(todos);
    localStorage.setItem('deletedTodos', JSON.stringify(deletedTodos));
}