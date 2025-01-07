class ToDo {
  constructor() {
    this.taskInput = document.getElementById("taskinput");
    this.addBtn = document.querySelector("#addTask");
    this.taskList = document.getElementById("taskList");

    this.addBtn.addEventListener("click", () => {
      this.addTask();
    });
  }

  addTask() {
    const inputTask = this.taskInput.value;

    if (inputTask == "") {
      window.alert("Please enter value first");
      return;
    }

    const listItem = document.createElement("li");
    const inputSpan = document.createElement("span");
    const completedBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    completedBtn.addEventListener("click", () => {
      this.toggleComplete(inputSpan);
    });

    deleteBtn.addEventListener("click", () => {
      this.deleteTask(listItem);
    });
    // completedBtn.addEventListener("click", this.toggleComplete(inputSpan));
    completedBtn.classList.add("btn");
    completedBtn.classList.add("btn-success");

    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");

    listItem.classList.add("mb-4");

    inputSpan.innerText = inputTask;
    completedBtn.innerText = "complete";
    deleteBtn.innerText = "delete";

    listItem.appendChild(inputSpan);
    listItem.appendChild(completedBtn);
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);

    this.taskInput.value = "";
  }

  toggleComplete(task) {
    task.classList.toggle("completed");
  }

  deleteTask(task) {
    task.remove();
  }
}

const todoTask = new ToDo();
