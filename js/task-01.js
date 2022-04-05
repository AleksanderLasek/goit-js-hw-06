const $categoriesList = document.querySelector("ul#categories").children;

console.log(`Number of categories: ${$categoriesList.length}`);

const categoriesArray = Array.from($categoriesList);

for (const category of categoriesArray) {
  console.log("\n" + `Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
}
