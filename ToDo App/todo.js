let todoList = [];

let inputElement = document.querySelector('#todo-input');
let dateElement = document.querySelector('#todo-date');

function addTodo(){
    
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    
    todoList.push({
        item: todoItem,
        dueDate: todoDate,
    });
    
    inputElement.value = '';
    dateElement.value = '';
    
    displayElement();
    AddButton();  // Update button state after adding a Todo
}

function displayElement(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    
    for(let i = 0; i < todoList.length; i++){
        let { item, dueDate } = todoList[i];
        
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="todo-delete" onclick="todoList.splice(${i},1);
            displayElement();">Delete</button>
        `;
    }
    
    containerElement.innerHTML = newHtml;
}


function AddButton() {
    let addButton = document.querySelector('#add-btn');
    addButton.disabled = inputElement.value.trim() ==='' || dateElement.value.trim()=== '';
}