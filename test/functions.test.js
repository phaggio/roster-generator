'use strict'

const functions = require('../functions');

describe(`employee name`, () => {
    test('Employee name should not contain any number', () => {
        const employeeInputObj = { name: '122', id: '123' };

        const cb = functions.validateEmployeeInput(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test('Employee name should not be just space', () => {
        const employeeInputObj = { name: '   ', id: '123' };

        const cb = functions.validateEmployeeInput(employeeInputObj);

        expect(cb).toBeFalsy();
    });
    test('Employee name should not be undefined', () => {
        const employeeInputObj = { id: 'Richard', id: '123' };

        const cb = functions.validateEmployeeInput(employeeInputObj);

        expect(cb).toBeFalsy();
    });
})

describe(`github ID`, () => {
    test('Github ID should not be empty', () => {
        const obj = { github: '' }

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not be just space', () => {
        const obj = { github: '   ' }

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not have multiple hyphens in a sequence', () => {
        const obj = { github: 'phaggio--123' }

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not start with hyphen', () => {
        const obj = { github: '-phaggio' }

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not end with hyphen', () => {
        const obj = { github: 'phaggio-' }

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
    test('Github ID should not have fewer than 4 characters', () => {
        const obj = { github: 'ph' }

        const cb = functions.checkGithubId(obj);

        expect(cb).toBeFalsy();
    });
});