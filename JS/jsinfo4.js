'use strict'

// class inheritance 
class Human {
    constructor(_name) {
        this.name = _name;
    }
    call() {
        console.log("Human call(): " + this.name);
    }
}

class Student extends Human {
    yell() {
        console.log("Student yell(): " + this.name);
    }
    call() {
        super.call();
        console.log("Student call(): " + this.name);
    }

    // !!!! getter property
    get studentName() {
        return `student name: ${this.name}`;
    }

    // !!!! setter property 
    set studentName(_name) {
        this.name = _name;
    }
}

let student = new Student("Tom");
student.call();
student.yell();
student.studentName = "Dick";
console.log(student.studentName);

console.log(student instanceof Student);
console.log(student instanceof Human);
console.log(student instanceof Human);
console.log(student.__proto__);
console.log(Student.toString())

console.log(JSON.stringify(student));

// functional style inheritance
let Employee = {
    name: "employee",
    call: function() {
        console.log("call from " + this.name)
    }
}

let Dev = {
    __proto__: Employee,
    name: "Dev",
    call: function() {
        this.__proto__.call();
    }
}

try {
    Dev.call();
    console.log(typeof Dev);
    console.log(Dev.toString());
} catch (err) {
    console.log(err.message);
} finally {
    console.log("Finally....")
}