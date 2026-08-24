function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо необхідні елементи
const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо слухача події на клік по кнопці
changeColorBtn.addEventListener('click', () => {
  // Генеруємо новий випадковий колір
  const newColor = getRandomHexColor();
  
  // Змінюємо фон body
  body.style.backgroundColor = newColor;
  
  // Записуємо згенерований колір у span
  colorSpan.textContent = newColor;
});
