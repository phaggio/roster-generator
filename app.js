'use strict';
console.clear();

const inquirer = require('inquirer');
const prompts = require('./prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');




async function init() {
    let newHire;
    let employee = await inquirer.prompt(prompts[0].basicQuestions);
    let role = employee.role;
    // console.log(employee);

    let res = await inquirer.prompt(prompts[0][`${role}`]);
    // console.log(res);

    switch (role) {
        case 'Manager':
            newHire = new Manager(employee.name, employee.id, employee.email, res.officeNumber);
            break;
        case 'Engineer':
            newHire = new Engineer(employee.name, employee.id, employee.email, res.github);
            break;
        case 'Intern':
            newHire = new Intern(employee.name, employee.id, employee.email, res.school);
            break;
        default:
            break;
    }
    console.log(newHire);
    newHire.printInfo();

}



init();