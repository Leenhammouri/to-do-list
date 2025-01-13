window.onload = function () {
  const usernameSpan = document.getElementById("usernameSpan");

  var emailValue = sessionStorage.getItem("emailValue");

  emailValue = emailValue.split("@"); //leen , gmail.com

  usernameSpan.innerHTML = emailValue[0];
};

const taskInput = document.getElementById("taskinput");
const addBtn = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const selectAll = document.getElementById("selectAll");

addBtn.addEventListener("click", () => {
  addTask();
});

taskInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});

deleteAllBtn.addEventListener("click", () => {
  deleteAll();
});

selectAll.addEventListener("click", () => {
  selectAllTasks();
});

function addTask() {
  const inputTask = taskInput.value;

  if (inputTask == "") {
    window.alert("Please enter value first");
    return;
  }

  deleteAllBtn.removeAttribute("disabled");

  const listItem = document.createElement("li");
  const inputSpan = document.createElement("span");
  const completedBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const checkbox = document.createElement("input");

  checkbox.setAttribute("type", "checkbox");

  completedBtn.addEventListener("click", () => {
    toggleComplete(inputSpan);
  });

  deleteBtn.addEventListener("click", () => {
    deleteTask(listItem);
  });

  editBtn.addEventListener("click", () => {
    editTask(listItem);
  });

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

  taskInput.value = "";

  var childsCount = taskList.childElementCount;
  console.log(childsCount);
  if (childsCount > 0) {
    deleteAllBtn.removeAttribute("disabled");
  }
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}

function deleteTask(task) {
  remove();
}

function editTask(task) {
  var oldText = task.querySelector("span").innerText;
  taskInput.value = oldText;
  remove();
}

function deleteAll() {
  const allListItems = document.querySelectorAll("li");
  allListItems.forEach((itemList) => {
    const listCheckBox = itemList.querySelector('input[type="checkbox"]');
    if (listCheckBox.checked) {
      itemList.remove();
    }
  });
}

function selectAllTasks() {
  const allTasks = document.querySelectorAll("li");
  allTasks.forEach((task) => {
    const checkBoxTask = task.querySelector('input[type="checkbox"]');
    checkBoxTask.checked = true;
  });
}
