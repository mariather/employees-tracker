const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

/* view all departments */
function selectDepartmentTable() {
    db.query(`SELECT * FROM company_db.departments;`, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log('\n');
    console.table(result);
    });
}

/* add a department */
function insertDepartmentsTable(string) {
    db.query(`INSERT INTO departments (department_name) VALUES (?);`, string, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table('Result added.');
    });
}

/* view all roles */
function selectRolesTable() {
    db.query(`SELECT roles.id, roles.title, roles.salary, departments.department_name
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id;`, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log('\n');
    console.table(result);
    });
}

/* add a role */
function insertRolesTable(string, decimal, integer) {
    //! LOGIC TO FIND THE CORRECT DEPARTMENT BASED ON STRING
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`, [string, decimal, integer], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table('Result added.');
    });
}

/* view all employees */
function selectEmployeesTable() {
    db.query(`SELECT employees.id as employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
    FROM roles
    INNER JOIN employees ON roles.id = employees.role_id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees managers ON employees.manager_id = managers.id;`, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log('\n');
    console.table(result);
    });
}

/* add a new employee */
//! should be looking up the managers string and converts it into a manager integer for id
function insertEmployeeTable(string, decimal, integer, manager_integer) {
    db.query(`INSERT INTO employees (title, salary, department_id, manager_id) VALUES (?, ?, ?, ?);`, [string, decimal, integer, manager_integer], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table('Result added.');
    });
}

/* update a employees role */
//! only beable to add a role that already exsists in the roles table
function updateEmployee(id, role_id) {
    db.query(`UPDATE employee SET role_id=? WHERE id=?`, [role_id, id], (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log('\n');
    console.table(result);
    });
}

module.exports = { selectDepartmentTable, insertDepartmentsTable, selectRolesTable, insertRolesTable, selectEmployeesTable, insertEmployeeTable, updateEmployee}