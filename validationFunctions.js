'use strict'
console.clear();

const validateEmployeeName = (employeeInput) => {
    const numbers = /[0-9]/;
    let name = employeeInput.name;
    if (name === undefined) {
        return false;
    } else if (!name.trim()) {
        return false;
    } else if (numbers.test(name)) {
        return false;
    } else {
        return true;
    };
};

const checkEmail = (emailObj) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = emailObj.email;
    if (email === undefined) {
        return false;
    } else if (typeof email !== 'string' || !email.trim().length) {
        return false;
    } else if (!emailRegex.test(email.trim())) {
        return false;
    };
    return true;
};

const checkId = (idObj) => {
    let id = idObj.id;
    const regex = /^[a-zA-Z0-9]+$/;
    if (id === undefined) {
        return false;
    } else if (typeof id !== 'string' || !id.length) {
        return false;
    } else if (!regex.test(id.trim())) {
        return false;
    };
    return true;
};

const checkOfficeNumber = (officeNumberObj) => {
    let officeNumber = officeNumberObj.officeNumber;
    const regex = /^[0-9]+$/;
    if (officeNumber === undefined) {
        return false;
    } else if (officeNumber.length !== 10) {
        return false;
    } else if (!regex.test(officeNumber)) {
        return false;
    };
    return true;
};


const checkGithubObj = (githubObj) => {
    const regex = /^[0-9a-zA-Z-]+$/;
    const repeatedHyphen = /--+/;
    const username = githubObj.github;
    if (typeof username !== 'string' || !username.trim().length) {
        return false;
    } else if (username.length < 4) {
        return false;
    } else if (username.includes(' ')) {
        return false;
    } else if (!regex.test(username)) {
        return false;
    } else if (username.indexOf('-') === 0 || username.lastIndexOf('-') === (username.length - 1)) {
        return false;
    } else if (repeatedHyphen.test(username)) {
        return false;
    };
    return true;
};

const checkSchool = (schoolObj) => {
    const school = schoolObj.school;
    if (!school.trim()) {
        return false;
    };
    return true;
};


const checkTeamName = (teamNameObj) => {
    let teamName = teamNameObj.teamName;
    console.log(teamName)
    if (teamName === undefined) {
        return false;
    }
    else if (!(teamName.trim())) {
        return false;
    };
    return true;
};

module.exports = {
    validateEmployeeName,
    checkEmail,
    checkId,
    checkOfficeNumber,
    checkGithubObj,
    checkSchool,
    checkTeamName
}