/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (const el of str.toLowerCase()) {
    if (vowels.includes(el)) count++;
  }
  return count;
}

function sortedByVowels(array) {
  if (!Array.isArray(array)) throw new Error("It is not array");
  return [...array].sort((a, b) => countVowels(a) - countVowels(b));
}

console.log(sortedByVowels(words));


export { sortedByVowels };


