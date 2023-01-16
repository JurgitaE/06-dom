const listDOM = document.querySelectorAll('li')

// Surasti visus ingredietus ir ju pavadinimus atspausdinti i console

for (let item of listDOM) {
    console.log(item.innerText);
}

/* 
Visu ingredienu pavadinimai turi buti didziosiomis raidemis ir sudeti i array
Isspausdinti gauta array i console
 */

console.log([...listDOM].map(a => a.innerText.toLocaleUpperCase()));