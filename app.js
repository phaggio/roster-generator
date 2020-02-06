'use strict';
console.clear();

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const prompts = require('./prompts');
const generateHtml = require('./template');
const generateCardHtml = require('./card');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function addMoreEmployee() {
    const reply = await inquirer.prompt(prompts[0].addMore);
    if (reply.addMore === 'Yes') {
        return true;
    } else {
        return false;
    };
};

async function getEmployeeObj() {
    const employeeInput = await inquirer.prompt(prompts[0].basicQuestions);
    const roleSpecificInput = await inquirer.prompt(prompts[0][`${employeeInput.role}`]);
    switch (employeeInput.role) {
        case `Manager`:
            return new Manager(employeeInput.name, employeeInput.id, employeeInput.email, roleSpecificInput.officeNumber);
        case `Engineer`:
            return new Engineer(employeeInput.name, employeeInput.id, employeeInput.email, roleSpecificInput.github);
        case `Intern`:
            return new Intern(employeeInput.name, employeeInput.id, employeeInput.email, roleSpecificInput.school);
        default:
            return;
    };
};



async function init() {
    let addEmployee = true;
    let employeeObjArr = [];
    while (addEmployee) {
        employeeObjArr.push(await getEmployeeObj());
        addEmployee = await addMoreEmployee();
    }
    // const employee = await getUserInput();
    let employeeHtml = '';
    for (const employee of employeeObjArr) {
        employeeHtml += generateCardHtml(employee);;
    };

    const teamHtml = generateHtml(employeeHtml, `Richard's team`);
    console.log(teamHtml);

    writeFileAsync(`./output/RichardTeam.html`, teamHtml);

    // const employeeCard = cardHtml.generateCardHtml(employee);
    // console.log(employeeCard);

    // console.log(employeeObjArr);

};



init();