// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name = '', id = '', email = '') {
        super(name);
        this.id = id;
        this.email = email;
    }

    getInfo() {
        return {
            name: this.name,
            id: 7,
            email: this.email,
            office: this.office,
            role: this.role
        }
    };

    getOfficeNumber() {
        return `${this.manager}'s office number is: ${this.office}`;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;