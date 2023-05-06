const input = document.querySelector(`#validation-input`);

// input.addEventListener(`focus`, onInputFocus);
input.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    console.log( typeof event.currentTarget.value.length)
   event.currentTarget.value.length === Number (event.currentTarget.getAttribute("data-length"))? input.classList.add(`valid`) :input.classList.add(`invalid`) 
}

