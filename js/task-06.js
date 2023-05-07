const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.getAttribute("data-length"))
  ) {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  } else {
    input.classList.add(`invalid`);
    input.classList.remove(`valid`);
  }
}
