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
    
            var itag1 = document.createElement('i');
            itag1.setAttribute("class", "fa fa-trash");
            var itag2 = document.createElement('i');
            itag2.setAttribute("class", "fa fa-square-o");
            var itag3 = document.createElement('i');
            itag3.setAttribute("class", "fa fa-edit");
    
            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "delete");
            btnDelete.setAttribute("id","btnDelete"+i);
            btnDelete.setAttribute("onclick", "deleteTask(this)");
    
            var btnComplete = document.createElement("button");
            btnComplete.setAttribute("class", "completed");
            btnComplete.setAttribute("id","btncompleted"+i);
            btnComplete.setAttribute("onclick", "completedTask(this)");
    
            var btnEdit = document.createElement("button");
            btnEdit.setAttribute("class", "edit");
            btnEdit.setAttribute("id","btnEdit"+i);
            btnEdit.setAttribute("onclick", "editTask(this)");        
            
            elem.innerHTML= todo[i][1];
    
            btnDelete.appendChild(itag1);
            btnComplete.appendChild(itag2);
            btnEdit.appendChild(itag3);
    
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
    
            var itag1 = document.createElement('i');
            itag1.setAttribute("class", "fa fa-trash");
            var itag2 = document.createElement('i');
            itag2.setAttribute("class", "fa fa-check-square-o");
            
            var btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "delete");
            btnDelete.setAttribute("id","deleteBtn"+j);
            btnDelete.setAttribute("onclick", "removeTask(this)");
    
            var btnIncomplete = document.createElement("button");
            btnIncomplete.setAttribute("class", "incompleted");
            btnIncomplete.setAttribute("id","btnincompleted"+j);
            btnIncomplete.setAttribute("onclick", "incompletedTask(this)");
            
            elem.innerHTML= completedTodo[j][1];
    
            btnDelete.appendChild(itag1);
            btnIncomplete.appendChild(itag2);
    
            divele.appendChild(btnIncomplete);
            divele.appendChild(elem);
            divele.appendChild(btnDelete);
    
            listCompleted.appendChild(divele);
        }
    }
}

// Open Modal For Add New Task
function addNewTask() {
    document.getElementById('new-task').focus();

    var modal = document.getElementById("myModal1");

    var span = document.getElementsByClassName("close1")[0];

    document.getElementById('new-title').value = '';
    document.getElementById('new-task').value = '';
    
    modal.style.display = "block";

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });
}

// For Add New Task in Todo
function addTask() {
    var modal = document.getElementById("myModal1");
    modal.style.display = "block";

    var newTitle = document.getElementById('new-title').value;
    var newTask = document.getElementById('new-task').value;

        todo.push([newTitle, newTask]);

        var a = document.getElementById('toast');

        document.getElementById('new-title').value = '';
        document.getElementById('new-task').value = '';

        modal.style.display = "none";

        display(this.todo, this.completedTodo);

    document.getElementById('new-task').focus();
}