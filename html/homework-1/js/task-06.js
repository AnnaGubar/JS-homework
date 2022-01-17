const inputEl = document.querySelector('#validation-input');

// const validAmountOfSymbols = inputEl.dataset.length; //6

// inputEl.addEventListener('blur', event => {
//   event.preventDefault();

//   let inputLength = event.currentTarget.value.length;

//   if (inputLength === Number(validAmountOfSymbols)) {
//     if (inputEl.classList.contains('invalid')) {
//       inputEl.classList.remove('invalid');
//     }
//     inputEl.classList.add('valid');

//     console.log(inputEl.classList);
//   }

//   if (inputLength !== Number(validAmountOfSymbols)) {
//     if (inputEl.classList.contains('valid')) {
//       inputEl.classList.remove('valid');
//     }
//     inputEl.classList.add('invalid');

//     console.log(inputEl.classList);
//   }
// });

// ----------------------------------

inputEl.addEventListener('input', handleInputValue);
inputEl.addEventListener('blur', handleValidity);

function handleInputValue(event) {
  inputEl.value = event.target.value.trim();
}

function handleValidity(event) {
  if (event.currentTarget.value.length === 0) {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
  } else if (
    event.currentTarget.value.length === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
