const inputValueEl = document.querySelector('#name-input');
let greetingName = document.querySelector('#name-output');

inputValueEl.addEventListener('input', () => {
  greetingName.textContent =
    inputValueEl.value === '' ? 'Anonymous' : inputValueEl.value;
});

// inputValueEl.addEventListener('input', event => {
//   event.preventDefault();

//   inputValueEl.value = event.target.value;

//   greetingName.textContent =
//     event.target.value === '' ? 'Anonymous' : event.target.value.trim();
//   greetingName.textContent = event.currentTarget.value;
// });

// ? какая разница ?
