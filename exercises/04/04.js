// Surasti h1(antraste)
const h1DOM = document.querySelector('h1');
// Perrasyti h1 elemento teksta i "Zuikio darzas"
h1DOM.textContent = "Zuikio darzas";
// Surasti visus darzoves
const listDOM = document.querySelectorAll('li');
// Kiekvienos darzoves teksta pakeisti i "Israuta darzove"
[...listDOM].forEach(a => a.textContent = 'Israuta darzove');