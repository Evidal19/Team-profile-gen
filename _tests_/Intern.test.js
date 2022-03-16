const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCR";
  const testEmployee = new Intern("Elisa", 19, "evida001@ucr.edu", testValue);
  expect(testEmployee.school).toEqual(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const testEmployee = new Intern("Elisa", 19, "evida001@ucr.edu","UCR");
  expect(testEmployee.getRole()).toEqual(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCR";
  const testEmployee= new Intern("Elisa", 19, "evida001@ucr.edu","UCR" , testValue);
  expect(testEmployee.getSchool()).toEqual(testValue);
});
