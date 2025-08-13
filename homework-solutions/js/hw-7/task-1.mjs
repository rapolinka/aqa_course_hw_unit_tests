/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(mergeArrays([1, 2], [34, 56, 65], [6, 7, 8, 9]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  if (typeof sentence !== "string" ) {
    return "";
  }

  const trimmed = sentence.trim();
  if (trimmed === "") {
    return trimmed;
  }

  const words = sentence.trim().toLowerCase().split(/\s+/);
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);

  }
  return words.join("_");
}
console.log(devideBy(" GH fdref dfdf dfdf  "));


/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(num) {
  const array = [0, 1];
  if (typeof num !== "number" || num < 0) {
    return `${num} is not a number or below zero`;
  }

  if(num < 2){
    return array[num]
  }
  for (let i = 2; i <= num; i++) {
    array[i] = array[i - 1] + array[i - 2]; 
  }
  return array[num];

}

console.log(fibonacci(3));

export { mergeArrays, fibonacci, devideBy };

