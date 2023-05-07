function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector(`input`),
  createButton: document.querySelector(`button[data-create]`),
  destroyButton: document.querySelector(`button[data-destroy]`),
  divEl: document.querySelector(`#boxes`),
};
console.log(refs.input.value);
refs.createButton.addEventListener(`click`, createBoxes);
refs.destroyButton.addEventListener(`click`, destroyBoxes);

function createBoxes(event) { 
  
  const container=document.createDocumentFragment()
  let boxSize = 30;
  for (let i = 0; i < Number(refs.input.value); i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.animation = "box-appear 0.3s ease forwards";
    box.style.animationDelay = `${i * 0.1}s`;
    container.append(box);
    boxSize += 10;
    
  }
  refs.divEl.append(container)
}
function destroyBoxes() {
  refs.divEl.innerHTML = "";
}
