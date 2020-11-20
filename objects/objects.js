function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getTodoName = () => console.log(this.name);
}

const todo = new Todo("buy Eggs", false); //new crée un nouvel object
const todo2 = new Todo("Do my works", true); //new crée un nouvel object

console.log(todo, todo2);
