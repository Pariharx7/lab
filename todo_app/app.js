const inputBox = document.querySelector(".inputBox");
const addTodoBtn = document.getElementById("addTodo");

const Todos = document.querySelector(".Todos");


addTodoBtn.addEventListener('click', () => {
    const todoText = inputBox.value.trim();
    if (todoText === '') {
        alert("Please enter a to-do item");
        return;
    }

    const todoDiv = document.createElement("div");
    todoDiv.classList = "todo";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "chkbox";

    const todoTitle = document.createElement("p");
    todoTitle.textContent = todoText

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList = "deleteBtn";


    todoDiv.appendChild(checkBox);
    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(deleteButton);

    Todos.append(todoDiv)

    deleteButton.addEventListener('click', () => {
        Todos.removeChild(todoDiv);
    })

    inputBox.value='';
})

//modify the code 