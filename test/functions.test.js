'use strict'

const functions = require('../functions');

describe(`validateEmployeeName()`, () => {
    test('Employee name should not contain any number', () => {
        const employeeInputObj = { name: '122', id: '123' };

        const cb = functions.validateEmployeeName(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test('Employee name should not be just space', () => {
        const employeeInputObj = { name: '   ', id: '123' };

        const cb = functions.validateEmployeeName(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test('Employee name should not be undefined', () => {
        const employeeInputObj = { id: 'Richard', id: '123' };

        const cb = functions.validateEmployeeName(employeeInputObj);

        expect(cb).toBeFalsy();
    });
})

describe(`checkEmail()`, () => {
    test(`email should not be empoty`, () => {
        const employeeInputObj = { name: 'Richard', email: '' };

        const cb = functions.checkEmail(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`email should not be shorter than 5 characters`, () => {
        const employeeInputObj = { name: 'Richard', email: '1@11' };

        const cb = functions.checkEmail(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`email should not contain space`, () => {
        const employeeInputObj = { name: 'Richard', email: '1@ 12' };

        const cb = functions.checkEmail(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`email should not include special characters other than '@', '-', '.'`, () => {
        const employeeInputObj = { name: 'Richard', email: '1@1$$.co!m' };

        const cb = functions.checkEmail(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`email should not begin or end with an '@'`, () => {
        const employeeInputObj = { name: 'Richard', email: '@something@something.com' };

        const cb = functions.checkEmail(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`email should not begin or end with an '.'`, () => {
        const employeeInputObj = { name: 'Richard', email: '.something@something.com' };

        const cb = functions.checkEmail(employeeInputObj);

        expect(cb).toBeFalsy();
    });
});

describe(`checkId()`, () => {
    test(`ID should not be empoty`, () => {
        const employeeInputObj = { id: '' };

        const cb = functions.checkId(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`ID should not contain any space`, () => {
        const employeeInputObj = { id: '234 abc' };

        const cb = functions.checkId(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`ID should not contain any special characters`, () => {
        const employeeInputObj = { id: 'bbc@12' };

        const cb = functions.checkId(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test(`ID should take input with just numbers and alphabetic characters`, () => {
        const employeeInputObj = { id: 'abc12A' };

        const cb = functions.checkId(employeeInputObj);

        expect(cb).toBeTruthy();
    });
});

describe(`github ID`, () => {
    test('Github ID should not be empty', () => {
        const obj = { github: '' };

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not be just space', () => {
        const obj = { github: '   ' };

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not have multiple hyphens in a sequence', () => {
        const obj = { github: 'phaggio--123' };

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not start with hyphen', () => {
        const obj = { github: '-phaggio' };

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not end with hyphen', () => {
        const obj = { github: 'phaggio-' };

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not have fewer than 4 characters', () => {
        const obj = { github: 'ph' };

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
});