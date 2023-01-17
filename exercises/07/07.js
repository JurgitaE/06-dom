
// Susirasti minuso mygtuka
const minusDOM = document.querySelector('.minus');
// Susirasti pliuso mygtuka
const plusDOM = document.querySelector('.plus');
// Susirasti reset mygtuka
const resetDOM = document.querySelector('.reset');
// Susirasti rezultato atvaizdavimo elementa
const resultDOM = document.querySelector('.number')
// Paspaudus ant minuso, rezultatas mazinamas vienu vienetu
let result = 0;
minusDOM.addEventListener('click', () => {
    --result;
    resultDOM.innerText = result;
});
// Paspaudus ant pliuso, rezultatas didinamas vienu vienetu
plusDOM.addEventListener('click', () => {
    ++result;
    resultDOM.innerText = result;
});
// Paspaudus ant reset, rezultatas turi grizti i nuli
resetDOM.addEventListener('click', () => {
    result = 0;
    resultDOM.innerText = result;
})