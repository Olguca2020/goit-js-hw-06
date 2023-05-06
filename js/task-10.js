function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector(`input`),
  createButton: document.querySelector(`button[data-create]`),
  destroyButton: document.querySelector(`button[data-destroy]`),
  divEl: document.querySelector(`#boxes`)
}
console.log(refs.input.value)
refs.createButton.addEventListener(`click`, createBoxes);
refs.destroyButton.addEventListener(`click`, destroyBoxes)

function createBoxes(event) { 
  let boxSize = 30;
  for (let i = 0; i < Number(refs.input.value); i += 1){    
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    refs.divEl.append(box);
    boxSize += 10;
  }
}
function destroyBoxes() {
  refs.divEl.innerHTML = "";
}