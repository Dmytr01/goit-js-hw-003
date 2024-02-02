function filterArray(numbers, value) {
  // Порожній масив для підходящих чисел
  const resultArray = [];

  // Ітерація через елементи масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Перевірка умови та додавання числа до результату
    if (numbers[i] > value) {
      resultArray.push(numbers[i]);
    }
  }

  // Повернення нового масиву
  return resultArray;
}