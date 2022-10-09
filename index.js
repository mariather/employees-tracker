const inquirer = require('inquirer');
const queries = require('./lib/queries.js')

//!view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const QuestionPrompts = {
    main: 'Choose a table to interact with',
    departments: [
        'What to do involving the Department Table',
        'Enter the name of the new Department',
    ],
    roles: [
        'View roles',
    ],
    employees: [
        'View employees',
    ]
}

const ListChoices = {
    main: [
        'all departments',
        'view all roles',
        'view all employees',
        'Quit',
    ],
    departments: [
        'view departments',
        'add a department',
    ],
    roles: [
        'view roles',
        'add a role',
    ],
    employees: [
        'view employees',
        'add an employees',
        'update a employee role',
    ]
}