const btn = document.querySelector("#myform");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const champ = document.getElementById("champ");
const numberList = document.querySelector("#numberList span");
//Click scroll resizing etc

btn.addEventListener("submit", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  const nbOfItem = items.length + 1;
  newItem.innerHTML = champ.value + " " + nbOfItem;
  todoList.appendChild(newItem);

  champ.value = "";
  champ.focus();
  numberList.innerHTML = items.length;
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
  numberList.innerHTML = items.length;
}
