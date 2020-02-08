'use strict'
console.clear();

const validateEmployeeInput = (employeeInput) => {
    const numbers = /[0-9]/;
    const name = employeeInput.name
    if (name === undefined) {
        return false;
    } else if (!name.trim()) {
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
    const email = emailObj.email;
    if (typeof email !== 'string' || !email.trim().length) {
        return false;
    } else if (email.length < 2) {
        return false;
    } else if (!email.includes('@')) {
        return false;
    } else if (email.indexOf('@') === 0 || email.lastIndexOf('@') === (email.length - 1)) {
        return false;
    };
    return true;
};

const checkGithubId = (roleSpecificInput) => {
    const regex = /^[0-9a-zA-Z-]+$/;
    const repeatedHyphen = /--+/;
    const username = roleSpecificInput.github;
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


module.exports = {
    validateEmployeeInput,
    checkEmail,
    checkGithubId
}