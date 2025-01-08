class ToDo {
  constructor() {
    this.taskInput = document.getElementById("taskinput");
    this.addBtn = document.querySelector("#addTask");
    this.taskList = document.getElementById("taskList");
    this.deleteAllBtn = document.getElementById("deleteAllBtn");
    this.selectAll = document.getElementById("selectAll");

    this.addBtn.addEventListener("click", () => {
      this.addTask();
    });

    this.taskInput.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
        this.addTask();
      }
    });

    this.deleteAllBtn.addEventListener("click", () => {
      this.deleteAll();
    });

    this.selectAll.addEventListener("click", () => {
      this.selectAllTasks();
    });
  }

  addTask() {
    const inputTask = this.taskInput.value;

    if (inputTask == "") {
      window.alert("Please enter value first");
      return;
    }

    this.deleteAllBtn.removeAttribute("disabled");

    const listItem = document.createElement("li");
    const inputSpan = document.createElement("span");
    const completedBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");

    completedBtn.addEventListener("click", () => {
      this.toggleComplete(inputSpan);
    });

    deleteBtn.addEventListener("click", () => {
      this.deleteTask(listItem);
    });

    editBtn.addEventListener("click", () => {
      this.editTask(listItem);
    });
    // completedBtn.addEventListener("click", this.toggleComplete(inputSpan));
    completedBtn.classList.add("btn");
    completedBtn.classList.add("btn-success");

    editBtn.classList.add("btn");
    editBtn.classList.add("btn-warning");

    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");

    listItem.classList.add("mb-4");

    inputSpan.innerText = inputTask;
    completedBtn.innerText = "Complete";
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";

    listItem.appendChild(checkbox);
    listItem.appendChild(inputSpan);
    listItem.appendChild(completedBtn);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);

    taskList.appendChild(listItem);

    this.taskInput.value = "";

    var childsCount = this.taskList.childElementCount;
    console.log(childsCount);
    if (childsCount > 0) {
      this.deleteAllBtn.removeAttribute("disabled");
    }
  }

  toggleComplete(task) {
    task.classList.toggle("completed");
  }

  deleteTask(task) {
    task.remove();
  }

  editTask(task) {
    var oldText = task.querySelector("span").innerText;
    this.taskInput.value = oldText;
    task.remove();
  }

  // deleteAllSelected() {
  //   const arrayOfTasks = document.querySelectorAll("li");
  //   arrayOfTasks.forEach((task) => {
  //     const taskCheckBox = task.querySelector('input[type="checkbox"]');
  //     if (taskCheckBox.checked) {
  //       this.taskList.removeChild(task);
  //     }
  //   });
  // }

  deleteAll() {
    const allListItems = document.querySelectorAll("li");
    allListItems.forEach((itemList) => {
      const listCheckBox = itemList.querySelector('input[type="checkbox"]');
      if (listCheckBox.checked) {
        itemList.remove();
      }
    });
  }

  selectAllTasks() {
    const allTasks = document.querySelectorAll("li");
    allTasks.forEach((task) => {
      const checkBoxTask = task.querySelector('input[type="checkbox"]');
      checkBoxTask.checked = true;
    });
  }
}

const todoTask = new ToDo();
