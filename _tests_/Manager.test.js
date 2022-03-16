const Manager = require("../lib/Manager");


test("Can set office number via", () => {
  const testValue = 1;
  const testEmployee = new Manager("Elisa", 19, "evida001@ucr.edu", testValue);
  expect(testEmployee.officeNumber).toEqual(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const testEmployee= new Manager("Elisa", 19, "evida001@ucr.edu", 1);
  expect(testEmployee.getRole()).toEqual(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 1;
  const testEmployee = new Manager("Elisa", 19, "evida001@ucr.edu", testValue);
  expect(testEmployee.getOfficeNumber()).toEqual(testValue);
});
