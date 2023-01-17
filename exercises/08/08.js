// Pradinis rezultatas lygus nuliui
let result = 0;
// Susirasti minuso mygtuka
const minusDOM = document.querySelector('.minus');
// Susirasti pliuso mygtuka
const plusDOM = document.querySelector('.plus');
// Susirasti reset mygtuka
const resetDOM = document.querySelector('.reset');
// Susirasti rezultato atvaizdavimo elementa
const resultDOM = document.querySelector('.number');
// Susirasti h1 elementa
const h1DOM = document.querySelector('h1');
// Padaryti, jog paspaudus viena is mygtuku(pliusas, minusas) h1 elemento tekstas pasikeistu i "Žaidimas progrese"
// Paspaudus ant minuso, rezultatas mazinamas vienu vienetu
minusDOM.addEventListener('click', () => {
    --result;
    resultDOM.textContent = result;
    h1DOM.innerText = 'Žaidimas progrese';
})
// Paspaudus ant pliuso, rezultatas didinamas vienu vienetu
plusDOM.addEventListener('click', () => {
    ++result;
    resultDOM.textContent = result;
    h1DOM.innerText = 'Žaidimas progrese';
})
// Paspaudus ant reset, rezultatas turi grizti i nuli
resetDOM.addEventListener('click', () => {
    result = 0;
    resultDOM.textContent = result;
    h1DOM.innerText = 'Show must go on!';
})

// Jei zaidimas yra nu'reset'inamas - h1 tekstas grizta i pradine reiksme