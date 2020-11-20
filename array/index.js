const tabs = [
  "Bonjour comment tu vas wesh?",
  "Demain je vais à la salle",
  "Après demain je vais pas à la salle",
  "Et toi tu vas ou hier ?",
];

const tabsObj = [
  {
    title: "Bonjour comment tu vas wesh?",
    rating: 8,
  },
  {
    title: "demain je vais à la salle",
    rating: 5,
  },
  {
    title: "après demain je vais pas à la salle",
    rating: 4,
  },
  {
    title: "et toi tu vas ou hier ?",
    rating: 5,
  },
];

//MAP
//map génère une copie du tableau de base
const newTabs = tabs.map((tab) => tab.toUpperCase());

console.log("newTabs : ", newTabs);
console.log("tabs : ", tabs);

//FIND
//S'arrête au premier cas trouvé...
const searchFind = tabs.find((f) => f.includes("salle"));
console.log("searchFind : ", searchFind);

//FILTER
//Tous les cas trouvés
const searchFilter = tabs.filter((f) => f.includes("salle"));
console.log("searchFilter : ", searchFilter);

//SOME and EVERY
//EvERY : Tous
const checkRating = tabsObj.every((tab) => tab.rating > 4);
console.log("Every : ", checkRating);

//SOME : quelques'uns
const checkRatingS = tabsObj.some((tab) => tab.rating > 4);
console.log("Some : ", checkRatingS);

const newSort = tabs.sort();
console.log(newSort);

const sortItems = tabsObj.sort((a, b) => a.rating - b.rating);
const sortItems2 = tabsObj.sort((a, b) => b.rating - a.rating); //reverse

console.log(sortItems);

//Exemple Copie with spread
// .concat for new
const name = "Jeanmsdfdsmmdsf";

const newTabsObj = [...name];

const copi = [...newTabsObj];
copi.pop();
//newTabsObj[0].title = "ta mere";

console.log(newTabsObj);
