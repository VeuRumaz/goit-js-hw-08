const ulCat = document.querySelector('#categories');

const liItems = ulCat.querySelectorAll('.item');

console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(item => {
  const catTitle = item.querySelector('h2').textContent;

  const elemCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${catTitle}`);
  console.log(`Elements: ${elemCount}`);
});
