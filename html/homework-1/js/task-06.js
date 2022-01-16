const inputEl = document.querySelector('#validation-input');

const validAmountOfSymbols = inputEl.dataset.length; //6

inputEl.addEventListener('blur', event => {
  event.preventDefault();
  let inputLength = event.currentTarget.value.length;

  if (inputLength === Number(validAmountOfSymbols)) {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
    inputEl.classList.add('valid');

    console.log(inputEl.classList);
  }

  if (inputLength !== Number(validAmountOfSymbols)) {
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
    inputEl.classList.add('invalid');

    console.log(inputEl.classList);
  }
});
