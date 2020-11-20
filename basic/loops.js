const names = ["ricchard", "emile", "rené", "la taupe", "jean"];
//FOR OF
// for (let name of names) {
//   if (name === "la taupe") {
//     break;
//   }
//   console.log(name);
// }

//FOR EACH
// names.forEach((name) => {
//   console.log(name);
// });

const user = {
  name: "Dev ed",
  age: 25,
  subscribers: {
    number: 200,
  },
  money: "lolno",
};

//FOR
// for (let x in user) {
//   console.log(x);
//   if (x === "subscribers") {
//     console.log(user[x].number);
//   }
// }

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let j = 10;
do {
  console.log(j);
  j++;
} while (j < 20);
