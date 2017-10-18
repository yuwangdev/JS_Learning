"use strict"

let count = 4;
const PI = 3.14;
const name = "wayu";
(function myFunc() {
    let count = 2;
    console.log(count + PI);
})(); // will execute after declaration 
console.log(count);
console.log(`"my name is ${name+"123"}"`);

let result = [];
let arrays = [1, 2, 3];
let myString = "hello world";
for (let item of arrays) {
    for (let char in myString) {
        result.push(item + char);
    }
} // in and of have almost the same effect
console.log(result.length);

let arraysPower = arrays.map(x => x * x);
console.log(arraysPower);

let arrowFunc = x => {
    console.log(`arrow function receives ${x}`);
    return {
        status: "good",
        data: x + 100
    }
};

console.log(arrowFunc(10).data);

// rest parameter
let restFunc = function(...marks) {
    console.log(`mark length: ${marks.length}`);
    marks.sort();
    console.log(marks[0]);
}

restFunc(9, 8, 7);

let defaultFunc = function(values, times = 3) {
    return values.map(x => x * times);
}

console.log(defaultFunc([4, 5, 6]));

let smallerFunc = x => x * x;
let biggerFunc = (values, operation = smallerFunc) => values.map(operation);
console.log(biggerFunc([2, 3, 4]));
console.log(biggerFunc([2, 3, 4], x => x + 100));

// spread operator
let argus = [1, 2, 3]
let argusFunc = function(x, y, z) { console.log(x + y + z); };
argusFunc(...argus);

let myObj = { name: "tom", age: 55 };

// class
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    call() {
        console.log(this.name + " " + this.age);
    }
    static staticCall() {
        console.log("call from Person Static");
    }
}

let person = new Person("tom", 50);
console.log(person.name);
Person.staticCall();

let Student = class Student extends Person {
    constructor(_name, _age, _id) {
        super(_name, _age);
        this.id = _id;
    }
    studentCall() {
        console.log(this.name + this.age + this.id);
    }
}

let student = new Student("dick", 14, 12345)
student.call();
student.studentCall();

let mapper = new Map();
let mapper1 = new Map([
    [1, 11],
    [2, 22]
]);
console.log(mapper1);
mapper.set(1, 11);
console.log(mapper.get(1));
console.log(mapper1.size);
mapper.clear();
console.log(mapper.get(1));
for (let [k, v] of mapper1) {
    console.log(k + v)
}