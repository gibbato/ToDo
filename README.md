# Task Stash

![Task Stash](images/icon.png)

## Overview
Task Stash is a simple and intuitive to-do list application designed to help you keep track of your tasks. This project was built using HTML, CSS, and JavaScript, and it leverages local storage to save tasks between sessions.

## Features
- **Add Tasks**: Easily add tasks with a simple input field.
- **Delete Tasks**: Remove tasks by clicking the delete button.
- **Mark as Complete**: Click on tasks to mark them as completed.
- **Persistent Storage**: Tasks are saved in local storage, so they persist even when you close the browser.


## How to Use

1. **Add a Task**: Type your task in the input field and click the "Add" button.
2. **Mark a Task as Complete**: Click on a task to toggle its completion status.
3. **Delete a Task**: Click the '×' button next to a task to remove it from the list.

## Code Structure

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header></header>
    <main>
        <div class="container">
            <div class="todo-app">
                <h2>Task Stash <img src="images/icon.png"/></h2>
                <div class="row">
                    <input type="text" id="input-box" placeholder="Enter a task">
                    <button onclick="addTask()">Add</button>
                </div>
                <ul id="list-container"></ul>
            </div>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
