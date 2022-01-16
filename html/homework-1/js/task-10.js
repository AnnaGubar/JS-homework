const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');
const formEl = document.querySelector('#controls');

inputEl.addEventListener('blur', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  let boxAmount = Number(inputEl.value);

  btnCreateEl.addEventListener('click', () => {
    for (let i = 0; i < boxAmount; i += 1) {
      let div = document.createElement('div');

      div.style.background = getRandomHexColor();
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.marginTop = '5px';

      divEl.append(div);
    }
  });
}

function destroyBoxes() {
  // formEl.reset();
  // divEl.innerHTML = '';
  // inputEl.value = '';

  location.reload(); // полная перезагрузка страницы
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
