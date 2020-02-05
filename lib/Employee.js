'use strict'

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    printInfo() {
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Email: ${this.email}`);
        console.log(`Employee Role: ${this.role}`);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
};


module.exports = Employee