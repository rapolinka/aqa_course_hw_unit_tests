// 1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
function wrapInArray<T>(input: T): T[] {
  return [input];
}
const numberArray = wrapInArray(5);
const stringArray = wrapInArray('Hello');

console.log(numberArray);
console.log(stringArray);

// 2. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).
function getLastItem<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}

console.log(getLastItem([1, 2, 3, 4]));
console.log(getLastItem(['a', 'b', 'c']));
console.log(getLastItem([]));

// 3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U.
//    Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

interface IPair<T, U> {
  first: T;
  second: U;
}

const pair: IPair<string, number> = {
  first: 'Masha',
  second: 30,
};

function describePair<T, U>(object: IPair<T, U>): string {
    return `${object.first} and ${object.second}`
}

console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"