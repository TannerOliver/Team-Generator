//Requiring packages
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//Single Source of Truth
const employeeList = [];

//Inquirer Prompts
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What is your role at this company?',
        choices: ['engineer', 'intern', 'manager'],
        name: 'role'
    }
];

// Individual questions for each role
const engineerQuestion = [
    {
        type: 'input',
        message: 'What is this Employees GitHub',
        name: 'github'
    }
];

const internQuestion = [
    {
        type: 'input',
        message: 'What school is this employee attending?',
        name: 'school'
    }
];

const managerQuestion = [
    {
        type: 'input',
        message: 'What is this managers office number?',
        name: 'officeNumber'
    }
];
//Prompt for adding employee
const addingEmployee = [
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: ['add another', 'dont add another'],
        name: 'addEmployee'
    }
];

//generate html here
function generate(){
//Beggining of html
const tempBeginning =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>

    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class='header'>
        <h1 class='header-text'>
            My Team
        </h1>
    </header>
    <main class="team-container">`;

const tempEnding =`</main>
<script src='../index.js'></script>
</body>
</html>`;

// Iterating over employeeList for each response
employeeList.forEach((emp) => {
     if (emp.role === 'engineer'){
    let temp =`<section>
         <header>
             <h3>${emp.name}</h3>
             <h3>${emp.role}</h3>
         </header>
         <main>
             <section>
                 ${emp.id}
             </section>
             <section>
                 ${emp.email}
             </section>
             <section>
                 ${emp.github}
             </section>
         </main>
     </section>`;
     tempBeginning.concat(temp);
    }else if (emp.role === 'intern'){
let temp =`<section>
    <header>
        <h3>${emp.name}</h3>
        <h3>${emp.role}</h3>
    </header>
    <main>
        <section>
            ${emp.id}
        </section>
        <section>
            ${emp.email}
        </section>
        <section>
            ${emp.school}
        </section>
    </main>
</section>`;
tempBeginning.concat(temp);
} else if (emp.role === 'manager'){
let temp  =`<section>
    <header>
        <h3>${emp.name}</h3>
        <h3>${emp.role}</h3>
    </header>
    <main>
        <section>
            ${emp.id}
        </section>
        <section>
            ${emp.email}
        </section>
        <section>
            ${emp.officeNumber}
        </section>
    </main>
</section>`;
tempBeginning.concat(temp);
}

//write file when we build all the html
fs.writeFile('./dist/index.html', tempBeginning, (err) =>
    err? console.error(err): console.log('file was written'));
})};

//Loop questions until desired amount of employees are generated
function addEmployee(){
    inquirer.prompt(addingEmployee)
    .then(resp =>{
        if (resp.addEmployee === 'add another'){
            init()
        } else if (resp.addEmployee === 'dont add another'){
            generate();
        };
    })
};

// Write functions for running each of these role cases
function engineer (resp){
    inquirer.prompt(engineerQuestion)
    .then(resp2 => {
        let resp3 = {...resp, ...resp2};
        employeeList.push(resp3);
        addEmployee()
    })
};
function intern (resp){
    inquirer.prompt(internQuestion)
    .then(resp2 => {
        let resp3 = {...resp, ...resp2};
        employeeList.push(resp3);
        addEmployee()
    })
};
function manager (resp){
    inquirer.prompt(managerQuestion)
    .then(resp2 => {
        let resp3 = {...resp, ...resp2};
        employeeList.push(resp3);
        addEmployee()
    })
};
//Starting function
function init() {
    inquirer.prompt(questions)
    .then(resp => {
        name = resp.name;
        id = resp.id;
        email = resp.email;
        if (resp.role === 'engineer'){
             engineer(resp)
        } else if (resp.role === 'intern'){
            intern(resp)
        } else if (resp.role === 'manager'){
            manager(resp)
        };

    })
    
};

//Calling Function
init();