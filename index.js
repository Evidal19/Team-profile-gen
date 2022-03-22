const generate = require("./src/other.js");

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const transfer = path.resolve(__dirname, "transfer");
const transferPath = path.join(transfer, "index.html");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee.js");

const newMembers = [];
const response = [];

function memberCard() {
  function createEngineer() {
    console.log(Engineer);
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineers name?",
          name: "name",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Enginers name please");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the engineers ID number?",
          name: "ID",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Enginers ID please");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the engineers email?",
          name: "email",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Enginers email please");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the engineers github?",
          name: "github",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Enginers github please");
              return false;
            }
          },
        },
        {
          type: "list",
          message: "Choose one of the options below",
          choices: ["Intern", "Engineer", "Manager"],
          name: "optionList",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Select one please");
              return false;
            }
          },
        },
      ])
      .then((responses) => {
        const Engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub
        );
        newMembers.push(responses.engineer);
        createEmployee();
      });
  }

  function createEmployee() {
    console.log(Employee);
    inquirer
      .prompt([
        {
          type: "list",
          name: "choices",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "No more members"],
        },
      ])
      .then((multipleChoice) => {
        switch (multipleChoice.selectedChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Manager":
            createManager();
            break;
          case "Intern":
            createIntern();
          default:
            makeGroup();
        }
      });
  }

  function createManager() {
    console.log(Manager);
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the managers name?",
          name: "name",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Managers name please");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the managers ID number?",
          name: "ID",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Managers ID please");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the managers email?",
          name: "email",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Manageers email please");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the managers office number?",
          name: "officeNumber",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Managers office number please");
              return false;
            }
          },
        },
        {
          type: "list",
          message: "Choose one of the options below",
          choices: ["Intern, Engineer, Manager"],
          name: "optionList",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Select one please");
              return false;
            }
          },
        },
      ])
      .then((responses) => {
        console.log(response);
        const Manager = new Manager(
          response.managerName,
          response.managerId,
          response.managerrEmail,
          response.managerOfficeNumber
        );
        newMembers.push(responses.manager);
        createEmployee();
      });
  }

  function createIntern() {
    console.log(Intern);
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the inters name?",
          name: "name",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("what is the interns name?");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the interns ID number?",
          name: "ID",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("what is the internes ID number?");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the interns email?",
          name: "email",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("what is the internes email?");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is the interns school name?",
          name: "school",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("what is the internes school name?");
              return false;
            }
          },
        },
        {
          type: "list",
          message: "Choose one of the options below",
          choices: ["Intern, Engineer, Manager"],
          name: "optionList",
          validate: (response) => {
            if (response) {
              return true;
            } else {
              console.log("Select one please");
              return false;
            }
          },
        },
      ])
      .then((responses) => {
        console.log(response);
        const Intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.internSchool
        );
        newMembers.push(responses.intern);
        createEmployee();
      });
  }

  function makeGroup() {
    if (!fs.existsSync(transfer)) {
      fs.mkdirSync(transfer);
    }
    fs.writeFileSync(transferPath, generate(newMembers), "utf-8");
  }

  createEngineer();
}

memberCard();
