const inquirer = require('inquirer');
const fs = require('fs')

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function TeamBuilder() {
    this.manager;
    this.engineers = [];
    this.interns = [];
    this.currentEngineer;
    this.currentIntern;
}

const initializeTeamBuilder = () => {
    return inquirer.prompt ([
        {
            type: 'text',
            name: 'name',
            message: 'What is your managers name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your managers employee ID number?'
        },

    ])
}

// TeamBuilder.prototype.initializeTeamBuilder = function() {
//     this.currentEngineer = this.engineers[0];
//     this.currentIntern = this.interns[0];

//     inquirer
//         .prompt({
//             type: 'text',
//             name: 'name',
//             message: 'What is your managers name?'
//         })
//         .then(({ name }) => {
//             this.manager = new Manager(name);
//             console.log(this.manager.getName());

//             inquirer
//                 .prompt({
//                     type: 'number',
//                     name: 'id',
//                     message: 'What is your managers employee ID number?'
//                 })
//                 .then(({ id }) => {
//                     this.manager.getID(id);
//                     console.log(this.manager.getID());
//                 })
//         });
// };

// TeamBuilder.prototype.continueTeamBuilder = function() {
//     inquirer
//         .prompt({
//             type: 'list',
//             message: 'Would you like to add members to your team?',
//             choices: ['Yes', 'No']
//         })
//         .then(({ action }) => {
//             if(action === 'Yes') {
//                 inquirer
//                     .prompt({
//                         type: 'list',
//                         message: 'Would you like to add an Engineer or intern to your team?',
//                         choices: ['Engineer', 'Intern']
//                     })
//                     .then(({ action }) => {
//                         if(action === 'Engineer') {
//                             inquirer
//                                 .prompt({
//                                     type: 'text',
//                                     name: 'name',
//                                     message: 'What is your Engineers name?'
//                                 })
//                                 .then(({ name }) => {
                                    
//                                 });
//                         } else {

//                         }
//                     })
//             } else {
//                 return this.finishTeamBuilder();
//             }
//         })
// };

TeamBuilder.prototype.finishTeamBuilder = function() {

};

initializeTeamBuilder();

module.exports = TeamBuilder;