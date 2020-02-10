'use strict';
console.clear();

const inquirer = require('inquirer');
const open = require('open');
const fs = require('fs');
const util = require('util');
const prompts = require('./prompts');
const generateHtml = require('./template');
const generateCardHtml = require('./card');
const functions = require('./functions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const writeFileAsync = util.promisify(fs.writeFile);

async function addMoreEmployee() {
    const reply = await inquirer.prompt(prompts[0].addMore);
    if (reply.addMore === 'Yes') {
        return true;
    } else {
        return false;
    };
};

async function getEmployeeName() {
    let validName = false;
    while (!validName) {
        const employeeName = await inquirer.prompt(prompts[0].employeeName);
        validName = functions.validateEmployeeName(employeeName);
        if (!validName) {
            console.log('Invalid employee name! Please enter employee name again.');
        } else {
            return employeeName;
        };
    };
};

async function getEmployeeId() {
    let validId = false;
    while (!validId) {
        const employeeId = await inquirer.prompt(prompts[0].id);
        validId = await functions.checkId(employeeId);
        if (!validId) {
            console.log('Invalid employee ID! Please enter employee ID again!');
        } else {
            return employeeId;
        };
    };
};

async function getEmployeeEmail() {
    let validEmail = false;
    while(!validEmail) {
        const employeeEmail = await inquirer.prompt(prompts[0].email);
        validEmail = functions.checkEmail(employeeEmail);
        if (!validEmail) {
            console.log(`Invalid employee email! Please enter employee's email again.`);
        } else {
            return employeeEmail;
        };
    };
};

async function getRoleSpecificData() {
    
}

async function getEmployeeObj() {
    const employeeName = await getEmployeeName();
    const employeeId = await getEmployeeId();
    const employeeEmail = await getEmployeeEmail();
    const employeeRole = await inquirer.prompt(prompts[0].role);

    const roleSpecificInput = await inquirer.prompt(prompts[0][`${employeeRole.role}`]);

    switch (employeeRole.role) {
        case `Manager`:
            return new Manager(employeeName.name, employeeId.id, employeeEmail.email, roleSpecificInput.officeNumber);
        case `Engineer`:
            return new Engineer(employeeName.name, employeeId.id, employeeEmail.email, roleSpecificInput.github);
        case `Intern`:
            return new Intern(employeeName.name, employeeId.id, employeeEmail.email, roleSpecificInput.school);
        default:
            return;
    };
};

async function getTeamName() {
    let validTeamName = false;
    let validTeamNameObj;
    while (!validTeamName) {
        const teamNameObj = await inquirer.prompt(prompts[0].teamName);
        if (!functions.checkTeamName(teamNameObj)) {
            console.log("Please enter a valid team name");
        } else {
            validTeamName = true;
            validTeamNameObj = teamNameObj;
        };
    };
    return validTeamNameObj;
};

async function getFileName() {
    return await inquirer.prompt(prompts[0].fileName);
}

async function getOpenFileRes() {
    return await inquirer.prompt(prompts[0].openFile);
};


async function init() {
    let addEmployee = true;
    let employeeObjArr = [];
    while (addEmployee) {
        employeeObjArr.push(await getEmployeeObj());
        addEmployee = await addMoreEmployee();
    };

    let employeeHtml = '';
    for (const employee of employeeObjArr) {
        employeeHtml += generateCardHtml(employee);;
    };

    const teamNameObj = await getTeamName();
    const teamHtml = generateHtml(employeeHtml, teamNameObj.teamName);

    const fileNameObj = await getFileName();

    await writeFileAsync(`./output/${fileNameObj.fileName}.html`, teamHtml);
    console.log('Finished creating HTML file!');

    const openFileResObj = await getOpenFileRes();

    if (openFileResObj.open === "Yes") {
        console.log(`Opening ${fileNameObj.fileName}.html ...`);
        open(`./output/${fileNameObj.fileName}.html`);
    };

    process.exit();

};


init();
