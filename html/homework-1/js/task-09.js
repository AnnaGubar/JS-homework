function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  let currentColor = getRandomHexColor();
  document.body.style.background = currentColor;
  spanEl.textContent = currentColor;
});
