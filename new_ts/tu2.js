"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.call = function () {
        console.log("calling from " + this.name);
    };
    Student.student = function () {
        console.log("this is student");
    };
    return Student;
}());
exports.Student = Student;
Student.student();
(new Student("dick")).call();
