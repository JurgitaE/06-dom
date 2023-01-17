// Susirasti logotipa
const logoDOM = document.querySelector('.logo');
// Susirasti hamburgeri
const hamburgerDOM = document.querySelector('.hamburger');
// Paspaudus ant hamburgerio, logotipo elementui reikia uzdeti CSS class pavadinimu "big"
// Antra karta paspaudus ant hamburgerio, logotipo elementui reikia nuimti CSS class pavadinimu "big"
// Susirasti meniu elementa(nav)
// Paspaudus ant hamburgerio, meniu elementui reikia uzdeti CSS class pavadinimu "visible"
// Antra karta paspaudus ant hamburgerio, meniu elementui reikia nuimti CSS class pavadinimu "visible"
const navDOM = document.querySelector('nav')
hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big');
    navDOM.classList.toggle('visible');

})


// Extra: CSS perrasyti taip, jog meniu elementai butu atvaizduoti vertikaliai ir logo su hamburgeriu - "kabetu" virsuje

document.querySelector('header').style.justifyContent = 'center';