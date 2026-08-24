const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();

  // Отримуємо посилання на елементи форми через властивість elements
  const { email, password } = event.currentTarget.elements;

  // Очищаємо значення від пробілів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевіряємо, чи є порожні поля
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return; // Зупиняємо виконання функції, якщо є порожні поля
  }

  // Якщо всі поля заповнені, збираємо дані в об'єкт
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт з даними в консоль
  console.log(formData);

  // Очищаємо значення полів форми
  event.currentTarget.reset();
});
