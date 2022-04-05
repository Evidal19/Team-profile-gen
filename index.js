const fs = require("fs");
const inquirer = require("inquirer");
const other = require('./src/other');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const newMembers = [];


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
      ])
      .then(({name, ID, email, github}) => {
        const newEngineer  = new Engineer(name, ID, email, github);
        newMembers.push(newEngineer);
        console.log(newEngineer)
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
          choices: ["Engineer", "Intern", "Manager","Done"],
        },
      ])
      .then((multipleChoice) => {
        switch (multipleChoice.choices) {
          case "Engineer":
            createEngineer();
            break;
          case "Manager":
            createManager();
            break;
          case "Intern":
            createIntern();
            break;
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
      ])
        .then(({name, ID, email, officeNumber}) => {
          const newManager  = new Manager(name, ID, email, officeNumber);
          newMembers.push(newManager);
          console.log(newManager)
          createEmployee();
        });
  }
  function createIntern() {
    console.log(Intern);
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the interns name?",
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
      ])
      .then(({name, ID, email, school}) => {
        const newIntern  = new Intern(name, ID, email, school);
        newMembers.push(newIntern);
        console.log(newIntern)
        createEmployee();
      });
  } 
 function makeGroup() {
   try {
   const response = other(newMembers)
   console.log(response)
    fs.writeFileSync("index.html", response)
  } catch (err) {
    console.error(err)
  }
  
 }

  createEmployee()
 

}
memberCard()




