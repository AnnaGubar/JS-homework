const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector('#ingredients');

const itemList = ingredients.map(el => {
  let item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  // listOfIngredientsEl.append(item); //! добавление поэлементно
  return item;
});

listOfIngredientsEl.append(...itemList); //! добавление всех эл-ов

console.log(listOfIngredientsEl.children);
