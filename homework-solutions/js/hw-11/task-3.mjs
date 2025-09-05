class Employee {
  #salary;
  constructor(firstName, lastName,profession, salary) {
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
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !([...value].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') {
      throw new Error('Incorrect data format used');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
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

class Developer extends Employee {
  constructor(firstName, lastName,  salary, programmingLanguages = []) {
    super(firstName, lastName, 'Developer',  salary);
    this.programmingLanguages = [...programmingLanguages];
  }

  addProgrammingLanguage(language) {
    if (!language || typeof language !== 'string' || !([...language].every(char =>
      char.match(/[A-Za-z\s]/)))) {
      throw new Error('Incorrect data format used');
    }
    this.programmingLanguages.push(language);
    return this.programmingLanguages;
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, 'Manager', salary);
    this.teamSize = teamSize;
  }
  increaseTeamSize() {
    this.teamSize++;
    return this.teamSize;
  }
}


class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, 'Designer', salary);
    this.designTools = [...designTools];
  }
  addDesignTool(tool) {
    if (!tool || typeof tool !== 'string') {
      throw new Error('Incorrect data format')
    } this.designTools.push(tool);
    return this.designTools;
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
    return this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (typeof Number(value) !== 'number' || value <= 0) {
      throw new Error('Incorrect data type');
    }
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    return this._address = value;
  }

  get employees() {
    return [...this.#employees];
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error(`It is not an instance of the class Employee`)
    }
    const exist = this.#employees.some((emp) => emp.firstName === employee.firstName && emp.lastName === employee.lastName);

    if (exist) {
      throw new Error(`Such employee already exists`);
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
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


  getEmployeesByProfession(profession) {
    const prof = Company.#ensureName(profession);
    switch (prof) {
      case "Developer":
        return this.#employees.filter(emp => emp instanceof Developer);
      case "Manager":
        return this.#employees.filter(emp => emp instanceof Manager);
      case "Designer":
        return this.#employees.filter(emp => emp instanceof Designer);
      default:
        return [];
    }
  }
}



const company = new Company('Tech Corp', 123456, 'Main Street');

company.addEmployee(new Developer('Dan', 'Jsov', 3000, ['JS']));
company.addEmployee(new Developer('Alex', 'Code', 2000, ['TS']));
company.addEmployee(new Designer('John', 'Smith', 1500, ['Figma']));
company.addEmployee(new Designer('Max', 'Orlov', 700, ['Figma']));
company.addEmployee(new Manager('Nastya', 'Jsova', 3000, 5));

console.log(company.getEmployeesByProfession('Designer'));


export { Employee, Company, Designer, Developer, Manager };
