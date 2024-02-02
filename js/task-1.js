function slugify(title) {
  // Перетворюємо рядок у нижній регістр
  title = title.toLowerCase();

  // Розділяємо рядок на слова за допомогою пробілів
  const words = title.split(' ');

  // З'єднуємо слова тире і створюємо slug
  const slug = words.join('-');

  return slug;
}