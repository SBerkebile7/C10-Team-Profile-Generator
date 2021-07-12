const inquirer = require('inquirer');
const Manager = require('./Manager');
//const Engineer = require('./Engineer');
//const Intern = require('./Intern');

function TeamBuilder() {
    this.manager;
    this.engineers = [];
    this.interns = [];
    this.currentEngineer;
    this.currentIntern;
}

TeamBuilder.prototype.initializeTeamBuilder = function() {
    this.currentEngineer = this.engineers[0];
    this.currentIntern = this.interns[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your managers name?'
        })
        .then(({ name }) => {
            this.manager = new Manager(name);
            console.log(name);
            //this.continueTeamBuilder();
        });
}

// TeamBuilder.prototype.continueTeamBuilder = function() {
    
// }

module.exports = TeamBuilder;