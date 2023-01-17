// Surasti h1 antraste
const h1DOM = document.querySelector('h1');
// h1 antrastei prideti CSS class "simba"
h1DOM.classList.add('simba');

// Surasti visas darzoves
const listDOM = [...document.querySelectorAll('li')].slice(0, 3);
// Kiekvienai darzovei prideti CSS class "darzove"
listDOM.forEach(a => a.classList.add('darzove'));
