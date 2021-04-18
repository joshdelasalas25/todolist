const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
document.querySelector('ul').addEventListener('click', handleClick);



function newTodo() {
  var text = prompt('Enter Todo activity', "");
  (text !== '') ? addTodo(text) : alert('Please enter an activity to do. Try again.');
}

//Adds the todo item to the list
function addTodo(text) {

  let todoItem = document.createElement('li');
  todoItem.innerHTML = `
      <div class ="${classNames.TODO_ITEM}">
        <button class="${classNames.TODO_CHECKBOX}"  name='checkButton'><i class="fa fa-check-square"></i></button>
        <span type="text" class="${classNames.TODO_TEXT}">${text}</span>
        <button class="${classNames.TODO_DELETE}" name='deleteButton' ><i class="fa fa-trash"></i></button>
        </div>    
  `;
  todoItem.classList.add('todo-list-item');
  list.appendChild(todoItem);
  updateItemsCount(list);
}

//Handles the clicks for checkbox and delete button
function handleClick(e) {
  switch(e.target.name){
    case 'checkButton':
      checkTodo(e);
      break;
    
    case 'deleteButton':
      deleteTodo(e);
      break;
  }
updateItemsCount(list);
}


function checkTodo(e) {
  let item = e.target.parentNode;
  item.classList.toggle('done');
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.closest('li').remove();   
}
  

//Counts the number of items 
// and the number of unchecked items 
function updateItemsCount(todoList){
  
  let listItemsCount = todoList.getElementsByTagName('li').length;
  let checked = document.getElementsByClassName('done').length;
 
  itemCountSpan.textContent = listItemsCount;
  uncheckedCountSpan.textContent = (checked) ? listItemsCount - checked : listItemsCount;
}
  