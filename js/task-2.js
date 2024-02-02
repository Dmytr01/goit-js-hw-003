function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо елементи першого і другого масивів
  const newArray = firstArray.concat(secondArray);

  // Перевіряємо, чи перевищує довжина нового масиву maxLength
  if (newArray.length > maxLength) {
    // Обрізаємо масив до maxLength елементів, якщо необхідно
    return newArray.slice(0, maxLength);
  }

  // Повертаємо весь новий масив, якщо його довжина не перевищує maxLength
  return newArray;
}