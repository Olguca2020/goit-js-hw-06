const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

input.addEventListener(`input`, onInputChange)

function onInputChange(event) {     
    event.currentTarget.value !== ``? span.textContent=event.currentTarget.value : span.textContent= `Anonimous`
    
}
