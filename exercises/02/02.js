const listDOM = document.querySelectorAll('li')

for (let item of listDOM) {
    console.log(item.innerText);
}

console.log([...listDOM].map(a => a.innerText.toLocaleUpperCase()));