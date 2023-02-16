const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

function init() {
    const logoText = logo({ name: "Employee Manager" }).render(); 
    console.log(logoText);
    loadMainPrompts();
  }

  function loadMainPrompts() {
    prompt([
      {
        type: "list",
        name: "choice",
        message: "Please Make a Selection",
        choices: [
          {
            name: "View All Departments",
            value: "VIEW_DEPARTMENTS"
          },
          {
            name: "View All Roles",
            value: "VIEW_ROLES"
          },
          {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES"
          },
          {
            name: "Add Department",
            value: "ADD_DEPARTMENT"
          },
          {
            name: "Add Role",
            value: "ADD_ROLE"
          },
          {
            name: "Add Employee",
            value: "ADD_EMPLOYEE"
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE"
          },
        ]
      }
        ]).then(res => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;
    }
  }
  )
}