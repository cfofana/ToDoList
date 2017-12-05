
var todos = ["item 1", "item 2", "item 3"];

function displayTodo(){
    console.log(todos);
}

function addTodo(todo){
   todos.push(todo); 
}

function changeTodo(position, newValue){
    todos[position] = newValue;
}

function deleteTodo(position){
    todos.splice(position, 1);
}