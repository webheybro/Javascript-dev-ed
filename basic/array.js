const listUser = ["jack", "michel", "pierre"];

//extract
const newList = listUser.filter((user) => {
  console.log(user);
  if (user === "jack") {
    return null;
  }
  return user;
});

newList.pop(); //dégage le denier
newList.push("new end"); //add in end
newList.shift(); //dégage le premier
newList.unshift("new first"); //ajouter au début

console.log(newList);
console.log(newList.indexOf("new end"));
