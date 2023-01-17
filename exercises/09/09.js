let result = 0;
const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const resultDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');
// Susirasti zinuciu rasymo elementa(ul)

const listDOM = document.querySelector('ul')
// Kiekviena karta prasidedant zaidimui, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Tu pasileidai zaidima - sekmes!"
listDOM.innerHTML = `<li>Tu pasileidai zaidima - sekmes!</li>`
// Kiekviena karta spaudziant minuso mygtuka, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei minusa ir dabartinis rezultatas yra [skaicius]."
minusDOM.addEventListener('click', () => {
    --result;
    resultDOM.textContent = result;
    listDOM.innerHTML += `<li>Paspaudei minusa ir dabartinis rezultatas yra ${result}.</li>`
    h1DOM.innerText = 'Žaidimas progrese';
})

// Kiekviena karta spaudziant pliuso mygtuka, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei pliusa ir dabartinis rezultatas yra [skaicius]."
plusDOM.addEventListener('click', () => {
    ++result;
    resultDOM.textContent = result;
    listDOM.innerHTML += `<li>Paspaudei pliusa ir dabartinis rezultatas yra ${result}.</li>`
    h1DOM.innerText = 'Žaidimas progrese';
})
// Kiekviena karta spaudziant reset mygtuka, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei reset ir dabartinis rezultatas yra [skaicius]."
resetDOM.addEventListener('click', () => {
    result = 0;
    resultDOM.textContent = result;
    listDOM.innerHTML += `<li>Paspaudei reset ir dabartinis rezultatas yra ${result}.</li>`
    h1DOM.innerText = 'Show must go on!';
})
