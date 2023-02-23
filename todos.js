function loadTodos(){
const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
    .then(res =>res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    // get the container
    const todosContainer = document.getElementById('todos-container');
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('post-style');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
        <h3>User: ${todo.userId}</h3>
        <h3>Id: ${todo.id}</h3>
        <p>Title: ${todo.title}</p>
        <p>Is Completed: ${todo.completed ===true? 'completed' : 'Uncompleted'}</p>
        `;
        // appendChild
        todosContainer.appendChild(todoDiv);
    }
}
loadTodos();