const managerGen = function(manager) {
    return `
    <div class="rounded col-3 mt-4 mx-4 p-0 card shadow">
        <div class="text-light bg-primary p-1 card-header">
            <h2 class='px-3'>${manager.name}</h2>
            <h3 class='px-3'><i class="fas fa-mug-hot"></i> Manager</h3>
        </div>
        <div class="bg-light card-body">
            <div class="bg-white border p-3">ID: ${manager.id}</div>
            <div class="bg-white border p-3">Email: <a href="mailto:${manager.email}">${manager.email}</a></div>
            <div class="bg-white border p-3">Office number: ${manager.office}</div>
        </div>
    </div>
    `
};

const engineerGen = function(engineer) {
    return `
    <div class="col-3 mt-4 mx-4 p-0 card shadow">
        <div class="text-light bg-primary p-1 card-header">
            <h2 class='px-3'>${engineer.name}</h2>
            <h3 class='px-3'><i class="fas fa-glasses"></i> Engineer</h3>
        </div>
        <div class="bg-light card-body">
            <div class="bg-white border p-3">ID: ${engineer.id}</div>
            <div class="bg-white border p-3">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></div>
            <div class="bg-white border p-3">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></div>
        </div>
    </div>
`
};

const internGen = function(intern) {
    return `
    <div class="col-3 mt-4 mx-4 p-0 card shadow">
        <div class="text-light bg-primary p-1 card-header">
            <h2 class='px-3'>${intern.name}</h2>
            <h3 class='px-3'><i class="fas fa-user-graduate"></i> Intern</h3>
        </div>
        <div class="bg-light card-body">
            <div class="bg-white border p-3">ID: ${intern.id}</div>
            <div class="bg-white border p-3">Email: <a href="mailto:${intern.email}">${intern.email}</a></div>
            <div class="bg-white border p-3">School: ${intern.school}</div>
        </div>
    </div>
    `
};

generatePage = (data) => {
    teamPageArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === "Manager") {
            const managerProfile = managerGen(employee);

            teamPageArray.push(managerProfile);
        } 
        if(role === "Engineer") {
            const engineerProfile = engineerGen(employee);

            teamPageArray.push(engineerProfile);
        }
        if(role === "Intern") {
            const internProfile = internGen(employee);

            teamPageArray.push(internProfile);
        }
    }

    const employeePageInfo = teamPageArray.join('');
    const generateTeam = generateTeamProfile(employeePageInfo);

    return generateTeam;
}

const generateTeamProfile = function (teamInfo) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/187d34ad7c.js" crossorigin="anonymous"></script>
        <title>Team Builder</title>
    </head>
    <body>
        <header class="text-center py-5 fs-1 fw-bold text-light bg-danger">My Team</header>
    
        <div class="container">
            <div class="row justify-content-center" id="team-info">
                ${teamInfo}
            </div>
        </div>
        
        <script src="https://kit.fontawesome.com/187d34ad7c.js" crossorigin="anonymous"></script><script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </body>
    </html>
`;
}

module.exports = generatePage;