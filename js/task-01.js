const categoriesEl = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categoriesEl.length}`);
categoriesEl.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.childNodes[3].children.length}`);
});
