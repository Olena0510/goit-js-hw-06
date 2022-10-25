const numberOfCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

for (let i = 0; i < numberOfCategoriesEl.length; i += 1){

    console.log(`Category: ${numberOfCategoriesEl[i].querySelector("h2").textContent}`);
    console.log(`Elements: ${numberOfCategoriesEl[i].querySelectorAll("li").length}`);
}