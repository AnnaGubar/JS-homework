const formEl = document.querySelector('.login-form');
const emailEl = document.querySelector('[type="email"]');
const passwordEl = document.querySelector('[type="password"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let elements = {};

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    if (!value.length || !name.length) {
      alert('ВНИМАНИЕ!!! Необходимо заполнить все поля.');
    }

    elements[name] = value;
  });

  // 👇 если есть пустое поле - не отправлять

  if (!emailEl.value.length || !passwordEl.value.length) {
    return;
  }

  console.log('elements:', elements);

  formEl.reset();
}
