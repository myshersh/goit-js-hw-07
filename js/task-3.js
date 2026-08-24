// Знаходимо елементи інпуту та спану за їхніми ID
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухача події 'input', яка спрацьовує при кожній зміні тексту
nameInput.addEventListener('input', (event) => {
  // Отримуємо поточне значення інпуту та очищаємо його від пробілів по краях за допомогою trim()
  const trimmedValue = event.target.value.trim();

  // Якщо після очищення від пробілів рядок порожній, підставляємо "Anonymous", інакше підставляємо введений текст
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
});
