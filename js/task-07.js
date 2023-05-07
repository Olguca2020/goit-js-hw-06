const range = document.querySelector(`#font-size-control`);
const span = document.querySelector(`#text`);

range.addEventListener(`input`, onRangeInput);

function onRangeInput(event) {
  span.style.fontSize = `${event.currentTarget.value}px`;
}
