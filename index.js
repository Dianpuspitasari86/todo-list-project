const addBtn = document.getElementById("btn");

function addTodo() {
  const taskInput = document.getElementById("input").value;
  const listTodo = document.getElementById("list");
  console.log(taskInput);

  const li = document.createElement("li");
  const input = document.createElement("input");

  input.type = "checkbox";
  input.className = "checkbox";

  li.innerText = taskInput;
  li.appendChild(input);
  listTodo.appendChild(li);

  document.getElementById("input").value = "";
}

addBtn.addEventListener("click", addTodo);


