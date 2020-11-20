//local storage
const todoList = ["feed the cat", "feeding the cat", "where is the cat"];

//localStorage.setItem("todo", "feed the cat"); //reste apres la fermeture du browser
//sessionStorage.setItem("todo 2", "session feeding the cat"); //disparait à la fermeture du browser

localStorage.clear();
//sessionStorage.clear();

localStorage.setItem("todos", JSON.stringify(todoList));

const store = localStorage.getItem("todos");
console.log(JSON.parse(store));
