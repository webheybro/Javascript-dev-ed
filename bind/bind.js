const person = {
  firstname: "Ed",
  lastName: "Developer",
  getName() {
    console.log(this.firstname + " " + this.lastName);
  },
};

function registerUser(param1, param2) {
  this.getName();
  console.log(param1, param2);
}

//BIND : permet de faire référence à un objet ou autre
console.log("BIND :");
const register = registerUser.bind(person);
register("poute", "poute2");

console.log("----------------------");

//BIND : permet de faire référence à un objet ou autre
console.log("CALL :");
registerUser.call(person, "poute1", "poute2");

console.log("----------------------");

//APPLY : permet de faire référence à un objet ou autre
console.log("APPLY :");
registerUser.apply(person, ["poute1", "poute2"]);
