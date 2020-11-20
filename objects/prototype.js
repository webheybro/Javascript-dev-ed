function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

//Evite d'enregister mille fois la function
Todo.prototype.getTodoName = function () {
  console.log("get : " + this.name);
  return this.name;
};
Todo.prototype.deleteTodo = function () {
  console.log("delete : " + this.name);
  return this.name;
};

const todo = new Todo("buy Eggs", false); //new crée un nouvel object
const todo2 = new Todo("Do my works", true); //new crée un nouvel object

todo.getTodoName();
todo.deleteTodo();

todo2.getTodoName();
todo2.deleteTodo();

console.log(todo, todo2);
