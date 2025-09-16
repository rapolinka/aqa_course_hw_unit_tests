// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов
// у которых есть как минимум поле salary: number,
// и возвращается среднее арифметическое зарплат всех переданных объектов


interface ISalary {
  name?: string;
  salary: number;
}
function getInfo<T extends ISalary>(...obj: T[]): number {
  const salaryCheck = obj.map((person) => person.salary ?? 0).filter((salary) => salary > 0);

  if (salaryCheck.length === 0) {
    return 0;
  }
  const totalSalary = salaryCheck.reduce((sum, salary) => sum + salary, 0);
  const avgSalary = totalSalary / salaryCheck.length;
  return avgSalary;
}
console.log(getInfo({ salary: 3000 } ,{name: 'Alex',salary: 1000}, {name: 'Peter',salary: 2000}));