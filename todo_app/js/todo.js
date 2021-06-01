/*this function gets the task from input*/
function get_todos() {
    /*this creates an array of tasks that are inputted*/
    var todos = new Array[
    todos_str = localStorage.getItem('todo')];
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    todos = get_todos();
    return todos;
}
/*this function adds the inputted task to the get_todos function array*/
function add() {
    /*this takes the inputted task and makes a variable of it*/
    var task = document.getElementById('task').value;

    
    /*this adds a task to the end of the array*/
    todos.push(task);
    /*this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}
function show() {
    /*this sets the task that was retrieved as a variable*/
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
        var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };   
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    
}
document.getElementById('add').addEventListener('click', add)
show();
}