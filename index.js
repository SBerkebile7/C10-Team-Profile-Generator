const inquirer = require('inquirer');
const fs = require('fs')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamList = [];

const initializeTeamBuilder = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's employee ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email address?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is your manager's office number?"
        }
    ]).then(managerInfo => {
        const { name, id, email, office } = managerInfo;
        const manager = new Manager(name, id, email, office);

        teamList.push(manager);
        console.log(manager);
    })
}

const continueTeamBuilder = () => {
    console.log(`
    -------------------------------
    |     Continue to add more    |
    |        team members         |
    -------------------------------
    `);
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is your employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is their employee ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's github username?",
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school name?",
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Would you like to add more team members?",
            default: false
        }
    ]).then(employeeInfo => {
        let { role, name, id, email, github, school, confirmAdd } = employeeInfo;
        let currentEmployee;

        if (role === "Engineer") {
            currentEmployee = new Engineer(name, id, email, github);
            console.log(currentEmployee);
        } else if(role === "Intern") {
            currentEmployee = new Intern(name, id, email, school);
            console.log(currentEmployee);
        }

        teamList.push(currentEmployee);
        
        if(confirmAdd) {
            return continueTeamBuilder(teamList);
        } else {
            return teamList;
        }
    })
}

initializeTeamBuilder()
    .then(continueTeamBuilder)
    .then(teamList => {
        console.log(teamList);
    })

    //finish .then to generate HTML and save