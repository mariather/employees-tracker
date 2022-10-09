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