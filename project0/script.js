const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  };
  
  const list = document.getElementById('todo-list');
  const itemCountSpan = document.getElementById('item-count');
  const uncheckedCountSpan = document.getElementById('unchecked-count');
  
  let totalCount = 0;
  let uncheckedCount = 0;
  
  function addTodo() {
    const todoText = prompt("Enter your TODO item:");
  
    if (!todoText) return;
  
    const todoItem = document.createElement('li');
    todoItem.className = classNames.TODO_ITEM;
  
    const textNode = document.createElement('span');
    textNode.className = classNames.TODO_TEXT;
    textNode.innerText = todoText;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.addEventListener('change', toggleTodo);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = classNames.TODO_DELETE;
    deleteButton.addEventListener('click', deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(textNode);
    todoItem.appendChild(deleteButton);
    list.appendChild(todoItem);
  
    totalCount++;
    uncheckedCount++;
    updateCounters();
  }
  
  function toggleTodo(event) {
    if (event.target.checked) {
      uncheckedCount--;
    } else {
      uncheckedCount++;
    }
    updateCounters();
  }
  
  function deleteTodo(event) {
    const todoItem = event.target.parentElement;
    const checkbox = todoItem.querySelector(`.${classNames.TODO_CHECKBOX}`);
  
    if (!checkbox.checked) {
      uncheckedCount--;
    }
    totalCount--;
  
    list.removeChild(todoItem);
    updateCounters();
  }
  
  function updateCounters() {
    itemCountSpan.innerText = totalCount;
    uncheckedCountSpan.innerText = uncheckedCount;
  }
  