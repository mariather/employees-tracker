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