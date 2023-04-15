
const elementCategory = document.getElementById('categories');
const items = elementCategory.querySelectorAll('.item h2');

console.log("Number of categories: ", items.length);

for (const item of items) {
    const titleText = item.textContent;
    const elementscount = item.nextElementSibling.childElementCount;

    console.log("Category: ", titleText);
    console.log("Elements: ", elementscount);
}