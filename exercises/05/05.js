// Surasti h1(antraste)
const h1DOM = document.getElementsByTagName('h1')[0];

// Perrasyti h1 elemento teksta i "Zuikio pomidoru darzas"
h1DOM.innerText = "Zuikio pomidoru darzas";
// Padaryk, jog h1 elementas turetu CSS class "pavadinimas"
h1DOM.classList.add('pavadinimas')
// Surasti visus darzoves
const listDOM = document.querySelectorAll('li');
// Kiekvienos darzoves teksta pakeisti i "Pomidoras"
listDOM.forEach(a => a.innerText = 'Pomidoras')
// Kiekvienai darzovei suteikti CSS class "pomidoras"
listDOM.forEach(a => a.classList.add('pomidoras'));