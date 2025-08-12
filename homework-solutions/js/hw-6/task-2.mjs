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

const resultUnique = [];
let resultNull = null;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const allPizzas = [...myPizzasT1, ...myPizzasT2];


const competitorPizza = [];
for (const competitor of competitorPizzas) {
  competitorPizza.push(competitor.toLowerCase());
}


const myPizas = [];
for (const allMyPizza of allPizzas) {
  myPizas.push(allMyPizza.toLowerCase());
}


for (let i = 0; i < myPizas.length; i++) {
  if (!competitorPizza.includes(myPizas[i])) {
    resultUnique.push(allPizzas[i]);
  }
}
if (resultUnique.length === 0) {
  console.log(resultNull);
} else {
  console.log(resultUnique);
}

export { resultNull, resultUnique };
