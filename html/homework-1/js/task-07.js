const inputEl = document.querySelector('#font-size-control');
const textValueEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {
  textValueEl.style.fontSize = `${inputEl.value}px`;
  console.log(
    `inputEl.value: ${inputEl.value}, textValueEl.style.fontSize: ${textValueEl.style.fontSize}`,
  );
});
