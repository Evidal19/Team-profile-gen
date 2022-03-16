const { id } = require("prelude-ls");
const Employee = require("../lib/Employee");

test("employee should be object", () => {
  const testEmployee= new Employee ();

  expect(typeof(testEmployee)).toEqual("object")
});


test("Can create Employee name", () => {
  const testEmployee = new Employee("Elisa");
  expect(testEmployee.name).toEqual("Elisa");
});

test("Can set id number to 19", () => {
  const id = 19
  const testEmployee = new Employee ("Elisa",id)
  expect(testEmployee.id).toEqual(id);
});

test("Can set email", () => {
  const email = 'evida001@ucr.edu'
  const testEmployee = new Employee ("Elisa", id ,email);
  expect(testEmployee.email).toEqual(email);
});


test("Should equal the new employee information", () => {
  const testEmployee = new Employee ();

  expect(testEmployee.getRole()).toEqual("Employee");
});