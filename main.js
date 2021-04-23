// Todo Task Array
var todo = [['Other', 'Do Workout'], ['Office Work', 'Do Coding']];
// Completed Task Array
var completedTodo = [['Other', 'Study']];

// Display Todo and Completed Task
function display(todo,completedTodo) {
    var list = document.getElementById('remaining-tasks');
    var listCompleted = document.getElementById('completed-tasks');

    document.getElementById('new-title').value = '';
    document.getElementById('new-task').value = '';
    document.getElementById('myInput1').value = '';
    list.innerHTML = '';
    listCompleted.innerHTML = '';

    document.getElementById("filter-task").selectedIndex = 0;
    document.getElementById("search-todo-msg").style.display = "none";
    document.getElementById("search-completed-msg").style.display = "none";
    
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

// For Search and Filter
function searchFilter() {
    var list = document.getElementById('remaining-tasks');
    var divele_todo = list.getElementsByClassName("info-todo");
    var li_todo = list.getElementsByClassName("list-todo");
    var emt_todo = document.getElementById("search-todo-msg");

    var filter = document.getElementById('filter-task').value;

    var listCompleted = document.getElementById('completed-tasks');
    var divele_completed = listCompleted.getElementsByClassName("info-completed");
    var li_completed = listCompleted.getElementsByClassName("list-completed");
    var emt_completed = document.getElementById("search-completed-msg");

    var value = document.getElementById("myInput1").value.toLowerCase().trim();

    let counter_todo = li_todo.length;
    let counter_completed  = li_completed.length;

    if(li_todo.length == 0) {
        emt_todo.style.display = "block";
        document.getElementById('no-todo-task').style.display = "none";
    }
    else {
        for(let i=0; i<li_todo.length; i++) {
            let txt = li_todo[i].textContent || li_todo[i].innerText;
            if (txt.toLowerCase().indexOf(value) > -1 && (filter == 'All Task' || todo[i][0] == filter)) {
                divele_todo[i].style.display = "";
            } else {
                divele_todo[i].style.display = "none";
                counter_todo--;
            }
        }
    }

    if(li_completed.length == 0) {
        emt_completed.style.display = "block";
        document.getElementById('no-completed-task').style.display = "none";
    }
    else {
        for(let i=0; i<li_completed.length; i++) {
            let txt = li_completed[i].textContent || li_completed[i].innerText;
            if (txt.toLowerCase().indexOf(value) > -1 && (filter == 'All Task' || completedTodo[i][0] == filter)) {
                divele_completed[i].style.display = "";
            } else {
                divele_completed[i].style.display = "none";
                counter_completed--;
            }
        }
    }
   
    if(counter_todo == 0) 
        emt_todo.style.display = "block";
    else 
        emt_todo.style.display = "none";

    if(counter_completed == 0) 
        emt_completed.style.display = "block";
    else 
        emt_completed.style.display = "none";
}

// Input text length increase when text is long
function check(len) {
    if(len.value.length < 40) len.style.width = ((len.value.length + 1) * 8) + 'px';
}

document.getElementById('myForm1').onsubmit = () => {
    addTask();
    return false;
};

// Open Modal For Add New Task
function addNewTask() {
    document.getElementById('new-task').focus();

    var modal = document.getElementById("myModal1");

    var inp = document.getElementById('new-task');
    inp.style.width = ((inp.getAttribute('placeholder').length + 1) * 10) + 'px';

    var span = document.getElementsByClassName("close1")[0];

    var validate_title = document.getElementById('validation_error_title1');
    var validate_task = document.getElementById('validation_error_task1');

    validate_title.innerHTML = '';
    validate_task.innerHTML = '';

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
    var validate_title = document.getElementById('validation_error_title1');
    var validate_task = document.getElementById('validation_error_task1');

    validate_title.innerHTML = '';
    validate_task.innerHTML = '';

    var inp = document.getElementById('new-task');
    inp.style.width = ((inp.getAttribute('placeholder').length + 1) * 10) + 'px';

    if(newTitle == '') {
        validate_title.innerHTML = "Please select title";
    }
    if(newTask.trim().length == 0) {
        validate_task.innerHTML = "Please write task to add todo";
    }
    if(newTitle != '' && newTask.trim().length != 0) {
        validate_title.innerHTML = '';
        validate_task.innerHTML = '';
        todo.push([newTitle, newTask]);

        var a = document.getElementById('toast');
        
        a.className = 'show';
        setTimeout(() => { 
            a.className = a.className.replace('show','');
        }, 3000);
        a.innerHTML = "Task Added Successfully";
        display(this.todo, this.completedTodo);

        document.getElementById('new-title').value = '';
        document.getElementById('new-task').value = '';

        modal.style.display = "none";

    }
    document.getElementById('new-task').focus();
}

// Delete Task From Todo
function deleteTask(dlt) {
    var index = document.getElementById(dlt.id);
    index = index.id;
    var last = index.toString().split('btnDelete', 2);
    
    todo.splice(last[1],1);

    var a = document.getElementById('toast');
    a.className = 'show';
    setTimeout(() => {
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Deleted Successfully";

    display(this.todo, this.completedTodo);
    
    document.getElementById("filter-task").selectedIndex = 0;
    console.log("Task Permanently Deleted From Todo");
    console.log(todo);
}

// Task Go To Todo to Completed Task
function completedTask(ele) {
    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btncompleted', 2);
    
    completedTodo.push(todo[last[1]]);
    todo.splice(last[1],1);

    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Completed Successfully";

    display(this.todo, this.completedTodo);
    
    console.log("Task Go To Completed");
    console.log(completedTodo);
}

// Delete Task From Completed Task
function removeTask(dlt) {
    var index = document.getElementById(dlt.id);
    index = index.id;
    var last = index.toString().split('deleteBtn', 2);
    
    completedTodo.splice(last[1],1);
    
    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Deleted Successfully";

    display(this.todo, this.completedTodo);
    
    document.getElementById("filter-task").selectedIndex = 0;

    console.log("Task Permanently Deleted From Completed Task");
    console.log(completedTodo);
}

// Task Go To Completed to Todo Task
function incompletedTask(ele) {
    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btnincompleted', 2);
    
    todo.push(completedTodo[last[1]]);
    completedTodo.splice(last[1],1);
    
    var a = document.getElementById('toast');    
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Task Back Todo Successfully";

    display(this.todo, this.completedTodo);
    
    console.log("Task Back To Go Todo");
    console.log(completedTodo);
}

document.getElementById('myForm').onsubmit = () => {
    editmyTask();
    return false;
};

// Open Modal and Send Data To Modal For Particular Task
function editTask(ele) {
    document.getElementById('edit-newtask').focus();

    var index = document.getElementById(ele.id);
    index = index.id;
    var last = index.toString().split('btnEdit', 2);

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var e = document.getElementById('edit-task');

    var inp1 = document.getElementById('edit-newtask');
    inp1.value = todo[last[1]][1];

    var inp2 = document.createElement("input");
    inp2.setAttribute("type", "hidden");
    inp2.setAttribute("id", "editValue");
    inp2.setAttribute("value", last[1]);

    e.appendChild(inp2);

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
    
    console.log("Task Go To Edit");
}

// For Edit Task
function editmyTask() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    var validate_title = document.getElementById('validation_error_title');
    var validate_task = document.getElementById('validation_error_task');

    var inp = document.getElementById('new-task');
    inp.style.width = ((inp.getAttribute('placeholder').length + 1) * 10) + 'px';

    validate_title.innerHTML = '';
    validate_task.innerHTML = '';

    if(document.getElementById("edit-newtitle").value == '') {
        modal.style.display = "block";
        validate_title.innerHTML = "Please select title";
    }
    if(document.getElementById("edit-newtask").value.trim().length == 0) {
        modal.style.display = "block";
        validate_task.innerHTML = "Please write task to edit todo";
    }
    if(document.getElementById("edit-newtitle").value != '' && document.getElementById("edit-newtask").value.trim().length != 0) {
        var arrId = document.getElementById("editValue").value;
        todo[arrId][0] = document.getElementById("edit-newtitle").value;
        todo[arrId][1] = document.getElementById("edit-newtask").value;

        var a = document.getElementById('toast');
        a.className = 'show';
        setTimeout(() => { 
            a.className = a.className.replace('show','');
        }, 3000);
        a.innerHTML = "Task Edited Successfully";
        display(this.todo, this.completedTodo);
        modal.style.display = "none";
    }
    document.getElementById('edit-newtask').focus();
}

// Submit Feedback and Show Toast Message
function submitFeedback() {
    var feedback = document.getElementById('feedback');
    feedback.style.display = "none";

    var a = document.getElementById('toast');
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Thank You For Feedback Us";
}

// Cancel Feedback and Show Toast Message
function cancelFeedback() {
    var a = document.getElementById('toast');
    a.className = 'show';
    setTimeout(() => { 
        a.className = a.className.replace('show','');
    }, 3000);
    a.innerHTML = "Feedback Cancel";

    var submit = document.getElementById('submit-feedback');
    var cancel = document.getElementById('cancel-feedback');

    submit.style.display = "none";
    cancel.style.display = "none";
}

// Show Submit and Cancel Button Feedback
function showButton() {
    var submit = document.getElementById('submit-feedback');
    var cancel = document.getElementById('cancel-feedback');

    submit.style.display = "block";
    cancel.style.display = "block";
    
    setTimeout(() => {
        submit.style.display = "none";
        cancel.style.display = "none";
    }, 5000);
}