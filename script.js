const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask(){
    if(inputBox.value === '') {
        alert('You didnt write anything!');
    }
    else {
        // creates new task item from input box and adds it to the task list
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // adds the delete button to the task item
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    // clears the input box after adding the task and saves the task list to local storage
    inputBox.value = '';
    saveData();
}

// adds the task to the list when the enter key is pressed
listContainer.addEventListener("click", function(e){
    // adds the checked class to the task item when clicked and saves the changes to local storage
    if (e.target.tagName ==='LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    // removes the task item when the delete button is clicked and saves the changes to local storage
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
}
}, false);

// saves the task list to local storage
function saveData() {
    localStorage.setItem('taskList', listContainer.innerHTML);
}
// shows the tasks from local storage
function showTasks() {
    listContainer.innerHTML = localStorage.getItem('taskList');
}

showTasks();