// Todo Task Array
var todo = [['Other', 'Do Workout'], ['Office Work', 'Do Coding']];
// Completed Task Array
var completedTodo = [['Other', 'Study']];

// Display Todo and Completed Task
function display(todo,completedTodo) {
    var list = document.getElementById('remaining-tasks');
    var listCompleted = document.getElementById('completed-tasks');

    list.innerHTML = '';
    listCompleted.innerHTML = '';
    
    if(todo.length == 0) {
        var elem = document.createElement("li");
        elem.setAttribute("class", "no-todo-task");
        elem.setAttribute("id", "no-todo-task");
        elem.innerHTML= "No Tasks. Add Some Tasks";
        list.appendChild(elem);
    }
    else {
        for(var i=0; i<todo.length; i++) {
            var divele = document.createElement("div");
            divele.setAttribute("class", "info-todo");
    
            var elem = document.createElement("li");
            elem.setAttribute("class", "list-todo");
    
            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "delete");
            btnDelete.setAttribute("id","btnDelete"+i);
            btnDelete.setAttribute("onclick", "deleteTask(this)");
            btnDelete.innerHTML = "Delete";
    
            var btnComplete = document.createElement("button");
            btnComplete.setAttribute("class", "completed");
            btnComplete.setAttribute("id","btncompleted"+i);
            btnComplete.setAttribute("onclick", "completedTask(this)");
            btnComplete.innerHTML = "Completed"
    
            var btnEdit = document.createElement("button");
            btnEdit.setAttribute("class", "edit");
            btnEdit.setAttribute("id","btnEdit"+i);
            btnEdit.setAttribute("onclick", "editTask(this)");
            btnEdit.innerHTML = "Edit"        
            
            elem.innerHTML= todo[i][1];
    
            divele.appendChild(btnComplete);
            divele.appendChild(elem);
            divele.appendChild(btnEdit);
            divele.appendChild(btnDelete);
    
            list.appendChild(divele);
        }
    }

    if(completedTodo.length == 0) {
        var elem = document.createElement("li");
        elem.setAttribute("class", "no-completed-task");
        elem.setAttribute("id", "no-completed-task");
        elem.innerHTML= "No Completed Tasks";
        listCompleted.appendChild(elem);
    }
    else {
        for(var j=0; j<completedTodo.length; j++) {
            var divele = document.createElement("div");
            divele.setAttribute("class", "info-completed");
    
            var elem = document.createElement("li");
            elem.setAttribute("class", "list-completed");
            
            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "delete");
            btnDelete.setAttribute("id","deleteBtn"+j);
            btnDelete.setAttribute("onclick", "removeTask(this)");
            btnDelete.innerHTML = "Delete";
    
            var btnIncomplete = document.createElement("button");
            btnIncomplete.setAttribute("class", "incompleted");
            btnIncomplete.setAttribute("id","btnincompleted"+j);
            btnIncomplete.setAttribute("onclick", "incompletedTask(this)");
            btnIncomplete.innerHTML = "Incompleted";
            
            elem.innerHTML= completedTodo[j][1];
    
            divele.appendChild(btnIncomplete);
            divele.appendChild(elem);
            divele.appendChild(btnDelete);
    
            listCompleted.appendChild(divele);
        }
    }
}