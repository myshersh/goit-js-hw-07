function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо необхідні елементи з DOM
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення заданої кількості квадратів
function createBoxes(amount) {
  const boxes = [];
  let size = 30; // Початковий розмір першого квадрата

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    
    // Встановлюємо розміри і колір фону
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    // Додаємо створений квадрат у масив
    boxes.push(box);
    
    // Збільшуємо розмір для наступного квадрата на 10px
    size += 10;
  }
  
  // Додаємо весь масив квадратів у контейнер за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення контейнера
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Обробник для кнопки Create
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  
  // Перевіряємо, чи значення входить у діапазон від 1 до 100
  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); // Очищаємо старі квадрати перед рендером нових
    createBoxes(amount); // Рендеримо нові
    input.value = ''; // Очищаємо значення інпуту
  }
});

// Обробник для кнопки Destroy
destroyBtn.addEventListener('click', destroyBoxes);
