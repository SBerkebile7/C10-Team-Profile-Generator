const generateHTML = require('./src/generateHTML');

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
            message: "What is your manager's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name.");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's employee ID number?",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's employee ID.");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email address?",
            validate: emailInput => {
                validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if(validEmail) {
                    return true;
                } else {
                    console.log("Please enter your manager's email address.");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is your manager's office number?",
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's office number.");
                    return false
                }
            }
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

    inquirer.prompt({
        type: 'confirm',
        name: 'addTeam',
        message: "Would you like to add more team members?",
        default: false
    }).then(addTeam => {
        if(addTeam) {
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
                    message: "What is your employee's name?",
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        } else {
                            console.log("Please enter your employee's name.");
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is their employee ID number?",
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        } else {
                            console.log("Please enter their employee ID.");
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your employee's email address?",
                    validate: emailInput => {
                        validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                        if(validEmail) {
                            return true;
                        } else {
                            console.log("Please enter your employee's email address.");
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is your engineer's github username?",
                    when: (input) => input.role === 'Engineer',
                    validate: githubInput => {
                        if(githubInput) {
                            return true;
                        } else {
                            console.log("Please enter your employee's GitHub username.");
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is your intern's school name?",
                    when: (input) => input.role === 'Intern',
                    validate: schoolInput => {
                        if(schoolInput) {
                            return true;
                        } else {
                            console.log("Please enter your employee's school.");
                            return false
                        }
                    }
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
        } else {
            return teamList;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been generated!')
        }
    })
}

initializeTeamBuilder()
    .then(continueTeamBuilder)
    .then(teamList => {
        return generateHTML(teamList);
    })
    .then(teamHTML => {
        return writeFile(teamHTML);
    })
    .catch(err => {
        console.log(err);
    });