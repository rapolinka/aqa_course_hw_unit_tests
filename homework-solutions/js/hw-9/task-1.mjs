/*
 Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
 1. Создать массив из ключей объекта character и присвоить его в переменную "keyWithFourChars" т.е., где 4 буквы //name, isQa
 2. Создать массив из значений объекта character и присвоить его в переменную "stringValues" е, где тип данных строка //'Barney', 'male'
 3. Создать массив из ключей и значений объекта character и присвоить его в переменную "keyValuePairs", перебрать массив циклом for. 
   На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
 4. Проверить, есть ли в объекте ключ salary, результат присвоить в переменные "hasSalaryKey1stOption | hasSalaryKey2ndOption"
   (Реализовать 2мя способами: через оператор "in" (1st) и "Object.hasOwn()" (2nd))
*/

const character = {
  name: 'Barney',
  age: 36,
  gender: 'male',
  isQa: true
};

// 1
const keyWithFourChars = Object.keys(character).filter(key => key.length === 4);
console.log(keyWithFourChars);

// 2
const stringValues = Object.values(character).filter(value => typeof value === "string");
console.log(stringValues);

// 3
/* Do not touch this part */
const logSpy = jest.spyOn(console, 'log');

const keyValuePairs = Object.entries(character);
for(const [key, value] of Object.entries(character)){
  console.log(`key = ${key}, value = ${value}`);
}
console.log(keyValuePairs);

const hasSalaryKey1stOption = Object.keys(character).includes(key => key === "salary");
console.log(hasSalaryKey1stOption);

const hasSalaryKey2ndOption = Object.hasOwn(character, "salary");
console.log(hasSalaryKey2ndOption);

export { keyWithFourChars, stringValues, hasSalaryKey1stOption, hasSalaryKey2ndOption, keyValuePairs, logSpy };

