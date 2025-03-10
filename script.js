// --- Data Model & CRUD Functions ---

let tasks = [];
let taskIdCounter = 1;

// Task Model (represented as a JavaScript object)
function Task(id, name, description) {
  this.id = id;
  this.name = name;
  this.description = description;
}

// Create (Add a new task) – renamed to avoid conflict
function createTask(name, description) {
  const newTask = new Task(taskIdCounter++, name, description);
  tasks.push(newTask);
  return newTask;
}

// Read (View all tasks)
function getAllTasks() {
  return tasks;
}

// Read (View a single task)
function getTaskById(id) {
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

// --- DOM Interaction Functions ---

// This function is called when the user clicks the "Add Task" button.
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task in the data model.
  // Here we use an empty string for the description.
  const newTask = createTask(taskText, "");

  let taskList = document.getElementById("taskList");

  // Create a new list item to represent the task.
  let li = document.createElement("li");
  // Store the task id in a data attribute for later reference.
  li.dataset.taskId = newTask.id;

  let taskSpan = document.createElement("span");
  taskSpan.textContent = newTask.name;
  taskSpan.className = "task-text";

  // Create the Edit button.
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = function() {
    let newText = prompt("Edit your task:", taskSpan.textContent);
    if (newText) {
      // Update the task in the data model.
      updateTask(newTask.id, newText, newTask.description);
      // Update the displayed text.
      taskSpan.textContent = newText;
    }
  };

  // Create the Delete button.
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function() {
    let confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      // Delete the task from the data model.
      deleteTask(newTask.id);
      // Remove the task from the DOM.
      taskList.removeChild(li);
    }
  };

  // Append the text and buttons to the list item.
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add the list item to the task list in the DOM.
  taskList.appendChild(li);
  // Clear the input field for the next task.
  input.value = "";
}

// Attach the event listener to the "Add Task" button.
// Make sure your HTML contains an element with id="addTaskBtn".
document.getElementById("addTaskBtn").addEventListener("click", addTask);

/* 
// --- Example Usage (Optional) ---
// You can pre-populate tasks if desired:
createTask('Learn JavaScript', 'Complete basic JavaScript tutorials.');
createTask('Build a Todo App', 'Implement CRUD functionality.');
createTask('Exercise', 'Go for a run.');

// If you want to load these pre-populated tasks into the DOM, 
// you can create a function (e.g., loadTasks()) to iterate through tasks and add them.
// For now, we log all tasks to the console:
console.log('All Tasks:', getAllTasks());
*/
