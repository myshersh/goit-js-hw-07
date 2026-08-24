// Знаходимо всі елементи li з класом item всередині списку #categories
const categories = document.querySelectorAll('#categories .item');

// Виводимо в консоль загальну кількість знайдених категорій
console.log(`Number of categories: ${categories.length}`);

// Використовуємо forEach для перебору кожної категорії окремо
categories.forEach(category => {
  // Знаходимо тег h2 всередині поточної категорії та отримуємо його текст
  const categoryName = category.querySelector('h2').textContent;
  
  // Знаходимо всі теги li, які лежать всередині цієї категорії
  const categoryElements = category.querySelectorAll('li');
  
  // Виводимо результати в консоль у потрібному форматі
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});