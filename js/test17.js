document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#todo");
  const todoList = document.querySelector("#todo-list");
  const allList = document.querySelector("#all-list");
  const addButton = document.querySelector("#add-button");

  let keyCount = 0;

  const allCheckbox = document.createElement("input");
  allCheckbox.type = "checkbox";
  const allButton = document.createElement("button");
  allList.appendChild(allCheckbox);
  allList.appendChild(allButton);
  allButton.textContent = "💮";

  /*--------
  const temp = localStorage.getItem("todoArr");
  let todoArr = [];
  if (temp) {
    todoArr = JSON.parse(temp);
  }
  todoArr.push({});
  --------*/

  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("할 일을 입력해주세요.");
      return;
    }

    const item = document.createElement("div");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const button = document.createElement("button");
    const deleItem = document.createElement("div");

    const key = keyCount;
    keyCount += 1;

    item.setAttribute("data-key", key);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todoList.appendChild(item);

    checkbox.type = "checkbox";
    checkbox.addEventListener("change", event => {
      item.style.textDecoration = event.target.checked ? "line-through" : "";
    });

    text.textContent = input.value;

    button.textContent = "❌";
    button.addEventListener("click", () => {
      if (checkbox.checked === true) {
        removeTodo(key);
      }
    });

    input.value = "";
  };
  const removeTodo = key => {
    const item = document.querySelector(`[data-key = "${key}"]`);
    todoList.removeChild(item);
  };

  addButton.addEventListener("click", addTodo);
  input.addEventListener("keyup", event => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      addTodo();
      console.log(text.value);
    }
  });

  allCheckbox.addEventListener("change", event => {
    const checkboxes = todoList.querySelectorAll('input[type="checkbox"]');
    console.log(checkboxes);
    console.log(allCheckbox.checked);
    if (allCheckbox.checked === true) {
      checkboxes.forEach(element => (element.checked = true));
    } else {
      checkboxes.forEach(element => (element.checked = false));
    }
  });
});
