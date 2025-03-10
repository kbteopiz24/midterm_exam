//script.js

let tasks = [];
let taskIdCounter = 1;

// Task Model (represented as a JavaScript object)
function Task(id, name, description) {
  this.id = id;
  this.name = name;
  this.description = description;
}

// Create (Add a new task)
function addTask(name, description) {
  const newTask = new Task(taskIdCounter++, name, description);
  tasks.push(newTask);
  return newTask;
}

// Read (View all tasks)
function getAllTasks() {
  return tasks;
}

// Read (View a single task)
function getTaskById(id){
    return tasks.find(task => task.id === id);
}

// Update (Update a task)
function updateTask(id, name, description) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = name;
    task.description = description;
    return task;
  }
  return null; // Task not found
}

// Delete (Delete a task)
function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true; // Task deleted
  }
  return false; // Task not found
}

// Example usage:
addTask('Learn JavaScript', 'Complete basic JavaScript tutorials.');
addTask('Build a Todo App', 'Implement CRUD functionality.');
addTask('Exercise', 'Go for a run');

console.log('All Tasks:', getAllTasks());

const updatedTask = updateTask(2, 'Build a Todo App (Updated)', 'Implement CRUD and add styling.');
console.log('Updated Task:', updatedTask);

console.log('Task by ID 1:', getTaskById(1));

deleteTask(3);
console.log('Tasks after deletion:', getAllTasks());

// index.html
/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h2>To-Do List</h2>
        <div class="input-section">
            <input type="text" id="taskInput" placeholder="Enter a task...">
            <button onclick="addTask()">Add Task</button>
        </div>
        <ul id="taskList"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html> */

//styles.css

/** body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h2 {
    margin-bottom: 10px;
}

.input-section {
    display: flex;
    gap: 10px;
}

input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 8px 12px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background: #0056b3;
}

ul {
    list-style: none;
    padding: 0;
    margin-top: 15px;
}

li {
    background: #e3e3e3;
    padding: 8px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
}

.edit, .delete {
    border: none;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 3px;
}

.edit {
    background: #ffc107;
}

.delete {
    background: #dc3545;
    color: white;
}

.edit:hover {
    background: #e0a800;
}

.delete:hover {
    background: #c82333;
}
*/



