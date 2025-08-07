/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull = null;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const competitorPizzaInLowerCase = [];
for(let i = 0; i < competitorPizzas.length; i++){
  competitorPizzaInLowerCase.push(competitorPizzas[i].toLowerCase());
}

const myPizzaInLowerCase = [];
for(let i = 0; i < myPizzasT1.length; i++){
  myPizzaInLowerCase.push(myPizzasT1[i].toLowerCase());
}


for (let i = 0; i < myPizzaInLowerCase.length; i++) {
  let foundUnique = false;

  for (let j = 0; j < competitorPizzaInLowerCase.length; j++) {
    if (myPizzaInLowerCase[i] === competitorPizzaInLowerCase[j]) {
      foundUnique = true;
      break;
    }
  }

  if (!foundUnique) {
    resultUnique.push(myPizzasT1[i]); 
  }
}

if (resultUnique.length === 0) {
  resultNull = null;
  resultUnique = null;
}


console.log(resultUnique);
console.log(resultNull);     




export { resultNull, resultUnique };
