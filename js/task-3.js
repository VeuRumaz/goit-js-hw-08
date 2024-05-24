// Функция для обновления текста в span
function updateNameOutput() {
  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim(); // Удаляем пробелы по краям

    // Обновляем текст в span в зависимости от значения в input
    if (trimmedValue) {
      nameOutput.textContent = trimmedValue;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  });
}

// Запускаем функцию после загрузки DOM
document.addEventListener('DOMContentLoaded', updateNameOutput);
