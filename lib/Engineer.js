// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const Employee = require('./Employee');

class Engineer extends Employee{
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
            github: this.github,
            role: this.role
        }
    };

    getGithub() {
        return `${this.engineer}'s GitHub username is: ${this.github}`;
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;