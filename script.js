// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Function to add a new task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    // Function to add a task to the list
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Add a delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  
    // Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTaskBtn.click();
      }
    });
  });