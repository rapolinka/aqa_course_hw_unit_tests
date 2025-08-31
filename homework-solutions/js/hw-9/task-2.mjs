/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (!character || typeof character.name !== "string" || typeof character.age !== "number") {
    throw new Error("Incorrect data format")
  }
  characters.push(character);
  return character;
}

function getCharacter(name) {
  if (typeof name !== "string") {
    throw new Error("Incorrect data format");
  }

  const infoByName = characters.find(obj => obj.name === name);

  return infoByName;
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== "number") {
    throw new Error("Incorrect data format");
  }

  return characters.filter(obj => obj.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  if (typeof name !== "string") {
    throw new Error("Incorrect data format");
  }
  if (!newCharacter || typeof newCharacter !== "object" || Array.isArray(newCharacter)) {
    throw new Error("newCharacter must be an object");
  }

  const character = getCharacter(name);
  if (!character) {
    throw new Error(`Can't find character with name ${name}`);
  }
  Object.assign(character, newCharacter);
  return character;
}

function removeCharacter(name) {
  const indexObject = characters.findIndex(obj => obj.name === name);
  if (indexObject === -1) {
    throw new Error("There is no such name in the list");
  }
  characters.splice(indexObject, 1);
  return characters;
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };

