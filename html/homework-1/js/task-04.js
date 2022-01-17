const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');

btnDecrementEl.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
  console.log('counterValue.textContent', counterValue.textContent);
});
btnIncrementEl.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
  console.log('counterValue.textContent', counterValue.textContent);
});

// -------------------------------------

// let startValue = 0;
// btnDecrementEl.addEventListener('click', valueMinus);
// btnIncrementEl.addEventListener('click', valuePlus);

// function valueMinus() {
//   startValue -= 1;
//   return (counterValue.textContent = startValue);
// }

// function valuePlus() {
//   startValue += 1;
//   return (counterValue.textContent = startValue);
// }
