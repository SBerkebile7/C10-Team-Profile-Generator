// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

const Employee = require('./Employee');

class Intern extends Employee{
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
            school: this.school,
            role: this.role
        }
    };

    getSchool() {
        return `${this.intern}'s school is: ${this.school}`;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;