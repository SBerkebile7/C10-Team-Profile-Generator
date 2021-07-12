class Employee{
    constructor(name = '', id = '', email = '') {
        this.name = name,
        this.id = id,
        this.email = email
    }

    getName() {
        return `This employee's name is: ${this.name}`;
    }

    getID() {
        return `${this.name}'s employee ID is: ${this.id}`;
    }

    getEmail() {
        return `${this.name}'s email address is: ${this.email}`;
    }

    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;