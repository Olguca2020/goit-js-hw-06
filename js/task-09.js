function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  body: document.querySelector(`body`),
  btn: document.querySelector(`button`),
  span: document.querySelector(`.color`),
};

refs.btn.addEventListener(`click`, onButtonChangColor);

function onButtonChangColor(event) {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.span.textContent = newColor;
}
