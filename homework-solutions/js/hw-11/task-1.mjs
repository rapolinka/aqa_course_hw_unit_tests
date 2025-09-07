class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get profession() {
    return this._profession;
  }

  get salary() {
    return this.#salary;
  }

  set firstName(value) {
    if (typeof value !== 'string' || value.trim().length < 2 || value.trim().length > 50 || !([...value].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.trim().length < 2 || value.trim().length > 50 || !([...value].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this._lastName = value;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.trim().length === 0 || !([...value].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this._profession = value;
  }

  set salary(value) {
    if (!value || typeof value !== 'number' || value <= 0 || value > 10000) {
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

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  get employees() {
    return this.#employees;
  }

  set title(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data format used');
    }
    this._title = value;
  }

  set phone(value) {
    if (typeof value !== 'number') {
      throw new Error('Incorrect data format used');
    }
    this._phone = value;
  }

  set address(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data format used');
    }
    this._address = value;
  }


  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error(`It is not an instance of the class Employee`)
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

const emp1 = new Employee('Dan', 'Doe', 'Developer', 1000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
const company = new Company('Tech Corp', 123456, 'Main Street');



export { Employee, Company };
