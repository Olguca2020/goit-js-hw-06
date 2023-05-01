const categoriesEl = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categoriesEl.length}`);
categoriesEl.forEach(elem => {
    console.log(`Category: ${elem.querySelector(`h2`).textContent}`)
    console.log(`Elements: ${elem.querySelectorAll(`li`).length}`)
});
