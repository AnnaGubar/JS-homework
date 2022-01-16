const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');
// console.log(counterValue.textContent);

btnDecrementEl.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
  console.log('counterValue.textContent', counterValue.textContent);
});
btnIncrementEl.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
  console.log('counterValue.textContent', counterValue.textContent);
});
