const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log()

const ingredientsElement = document.getElementById('ingredients');

const elements = [];
for (const ingredient of ingredients) {
  const newElement = document.createElement('li');
  newElement.textContent = ingredient;
  newElement.classList.add('item');
  elements.push(newElement)
}
console.log(ingredientsElement);
console.log(elements);

ingredientsElement.append(...elements);
