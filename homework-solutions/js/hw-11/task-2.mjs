class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || value.trim().length < 2 || value.trim().length > 50 || !([...value].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.trim().length < 2 || value.trim().length > 50 || !([...value].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.trim().length === 0 || !([...value].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number' || value <= 0 || value >= 10000) {
      throw new Error('Incorrect data format used');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees = [];
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data format used');
    }
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (typeof Number(value) !== 'number') {
      throw new Error('Incorrect data format used');
    }
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data format used');
    }
    this._address = value;
  }

  get employees() {
    return this.#employees;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error(`It is not an instance of the class Employee`)
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  static #ensureName(input) {
    if (typeof input !== 'string' || input.trim().length === 0) {
      throw new Error('Incorrect data format used');
    }
    return input.trim();
  }


  findEmployeeByName(firstName) {
    const name = Company.#ensureName(firstName);
    const foundEmployeeByName = this.#employees.find(emp => emp.firstName === name);
    if (!foundEmployeeByName) {
      throw new Error('There is no such employee');
    }
    return foundEmployeeByName;
  }

  getEmployeeIndex(firstName) {
    const name = Company.#ensureName(firstName);
    const firstNameIndex = this.#employees.findIndex(emp => emp.firstName === name);
    if (firstNameIndex === -1) {
      throw new Error('There is no such employee');
    }
    return firstNameIndex;
  }

  removeEmployee(firstName) {
    const name = Company.#ensureName(firstName);
    const index = this.getEmployeeIndex(name);
    const [removed] = this.#employees.splice(index, 1);
    return removed;
  }

  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total += emp.salary, 0);
  }
}
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
const company = new Company('Tech Corp', 123456, 'Main Street');


export { Employee, Company };
