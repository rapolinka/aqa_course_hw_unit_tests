//TASK 1
//Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds.
function delayTwoSeconds(callback) {
    setTimeout(callback, 1000);
}

console.log("Start...");
delayTwoSeconds(() => {
    console.log("Got it in 1 sec!");
});

//TASK 2
//Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль
const resolvedPromise = Promise.resolve(1);
resolvedPromise.then(result => console.log(result));


//TASK 3
// Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". Обработайте промис методом .catch и выведите результат его резолва в консоль
const rejectedPromise = Promise.reject("Promise failed");
rejectedPromise.catch(error => console.error(error));

//TASK 4
// Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
async function promiseNumber(number) {
    return number;
}
promiseNumber(10).then(result => console.log(result));

//FUNCTION FOR 5 and 6, 7 TASKS
function promiseNumber(number) {
    if (typeof number !== "number") {
        return Promise.reject("Error on invalid number");
    }
    return Promise.resolve(number);
}
//TASK 5
//Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(result => {
    result.forEach(num => console.log(num));
})
    .catch(error => console.error(error));

//TASK 6
//Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(4), promiseNumber("failed"), promiseNumber(6)]).then(result => {
    result.forEach(num => console.log(num));
})
    .catch(error => console.log(error));

//TASK 7
//Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function displayResultsSequentiallyAll() {
    try {
        const result = await Promise.all([promiseNumber(7), promiseNumber(8), promiseNumber(9)]);
        result.forEach(num => console.log(num));
    } catch (error) {
        console.error(error);
    }
}
displayResultsSequentiallyAll();

async function displayResultsSequentiallyAllSettled(params) {
    try{
        const result = await Promise.allSettled([promiseNumber(7), promiseNumber(8), promiseNumber(9)]);
        result.forEach(num => console.log(num))
    }
    catch(error){
        console.error(error);
    }
}