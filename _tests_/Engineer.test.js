const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via Engineer", () => {
  const testValue = "Evidal19";
  const testEmployee = new Engineer("Elisa", 19, "evida001@ucr.edu", testValue);
  expect(testEmployee.github).toEqual(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const testEmployee= new Engineer("Elisa", 19, "evida001@ucr.edu", "");
  expect(testEmployee.getRole()).toEqual(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "Evidal19";
  const testEmployee = new Engineer("Elisa", 19, "evida001@ucr.edu", testValue);
  expect(testEmployee.getGithub()).toEqual(testValue);
});
