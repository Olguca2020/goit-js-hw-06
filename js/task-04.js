let counterValue = 0;
const decrementButton = document.querySelector(`button[data-action="decrement"]`);
const incrementButton = document.querySelector(`button[data-action="increment"]`)
const counter =document.querySelector(`#value`)

decrementButton.addEventListener(`click`, onTargetDecrBtnClick);
function onTargetDecrBtnClick(event) {
    return counter.innerHTML=counterValue -=1
}
incrementButton.addEventListener(`click`, onTargetIncrBtnClick);
function onTargetIncrBtnClick(event) {
    return counter.innerHTML=counterValue +=1
}