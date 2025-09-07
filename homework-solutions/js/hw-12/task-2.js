// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена



async function createTodo(todoBody) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoBody)
        });
        if (response.status !== 201) {
            throw new Error(`Failed to create todo. Status: ${response.status}`);
        }
        const body = await response.json();
        if (body.id !== 201) {
            throw new Error('The Todo ID is not 201.');
        }
        return body;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('The function has been executed.')
    }
}

createTodo({
    "userId": 16,
    "id": 16,
    "title": "complete all hw before the deadline",
    "completed": true

}).then(todo => console.log(todo));