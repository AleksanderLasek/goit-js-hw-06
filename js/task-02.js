const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const $ingredientsList = document.querySelector("ul");

let $li;
const elementsArray = [];

for (let i = 0; i < ingredients.length; i++) {
  $li = document.createElement("li");
  $li.textContent = ingredients[i];
  $li.classList.add("item");
  elementsArray.push($li);
}

for (const ingredient of elementsArray) {
  $ingredientsList.append(ingredient);
}
