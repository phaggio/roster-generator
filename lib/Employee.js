'use strict'

class Employee {
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    }
    printInfo() {
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Email: ${this.email}`);
    }
};


module.exports = Employee