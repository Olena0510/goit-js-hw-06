const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector("#ingredients");

const arr = [];

for (let i = 0; i < ingredients.length; i += 1) {

  const newIngredient = document.createElement("li");

  newIngredient.textContent = ingredients[i];
  newIngredient.classList.add("item");
  arr.push(newIngredient);
}

  listIngredientsEl.append(...arr);


  