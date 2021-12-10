// Selectors
const todoInput = document.querySelector('.todo-input');
const addTodo = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos());
addTodo.addEventListener('click', setTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function setTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    saveLocal(todoInput.value);
    // checkbox button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    // remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add("remove-btn");
    todoDiv.appendChild(removeButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
};

function deleteCheck(el) {
    const item = el.target
    if (item.classList[0] === "remove-btn") {
        const todo = item.parentElement;
        todo.remove();
        removeLocalStorage(todo);
    }

    const todo = item.parentElement;
    todo.classList.toggle("completed-task");
};

function filterTodo(el) {
    const todos = Array.from(todoList.children);
    todos.forEach(function(todo) {
        switch (el.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed-task")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                };
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed-task")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                };
                break;
        }
    })
};

// Local storage
function saveLocal(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalStorage(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const indexTodo = todo.children[0].innerText;
    todos.splice(todos.indexOf(indexTodo), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // checkbox button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("completed-btn");
        todoDiv.appendChild(completedButton);
        // remove button
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        removeButton.classList.add("remove-btn");
        todoDiv.appendChild(removeButton);
        todoList.appendChild(todoDiv);
    })
}