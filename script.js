// Function to add a task
function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskList = document.getElementById("task-list");
    
    // Create a new list item
    const listItem = document.createElement("li");

    // Add task text to the list item
    listItem.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(listItem);
    
    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();
}

