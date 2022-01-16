const listOfCategoriesEl = document.querySelector('#categories');

console.group('Number of categories:', listOfCategoriesEl.children.length);

[...listOfCategoriesEl.children].forEach(el => {
  console.log('Category:', el.firstElementChild.textContent),
    console.log('Elements:', el.lastElementChild.children.length);
});

console.groupEnd();
