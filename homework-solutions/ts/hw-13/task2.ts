// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.



function validatePassword(password: string): boolean {
  const chars = password.trim();
  if (chars.length < 8) return false;

const hasUpper =  /[A-Z]/.test(chars);
const hasLower = /[a-z]/.test(chars);
const hasDigit = /[0-9]/.test(chars);
  return hasUpper && hasLower && hasDigit;
}

console.log(validatePassword("admin"));
console.log(validatePassword("aaaadmin"))
console.log(validatePassword("Aaaadmin"));
console.log(validatePassword("Aaaadm1n"));
console.log(validatePassword("                      "));