document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
   
    event.preventDefault();

    const taskDescription = taskInput.value;

    if (taskDescription.trim() !== "") {
     
      const taskItem = document.createElement("li");

      const prioritySelect = document.createElement("select");
      const priorities = ["High", "Medium", "Low"];
      priorities.forEach((priority) => {
        const option = document.createElement("option");
        option.value = priority.toLowerCase();
        option.textContent = priority;
        prioritySelect.appendChild(option);
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";

      deleteButton.addEventListener("click", () => {
        tasksList.removeChild(taskItem);
      });

      taskItem.textContent = taskDescription + " ";
      taskItem.appendChild(prioritySelect);
      taskItem.appendChild(deleteButton);

      prioritySelect.addEventListener("change", (event) => {
        const priority = event.target.value;
        switch (priority) {
          case "high":
            taskItem.style.color = "red";
            break;
          case "medium":
            taskItem.style.color = "orange";
            break;
          case "low":
            taskItem.style.color = "green";
            break;
          default:
            taskItem.style.color = "black";
        }
      });

      taskItem.style.color = "green"; 
      prioritySelect.value = "low";

      tasksList.appendChild(taskItem);

      taskInput.value = "";
    } else {
      alert("Task description cannot be empty.");
    }
  });
});
