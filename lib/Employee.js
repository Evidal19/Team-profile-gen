class Employee {
    
  constructor(name= "Employee", id= 0, email= "evida001@ucr.edu") {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.constructor.name;
  }

}

module.exports = Employee;
