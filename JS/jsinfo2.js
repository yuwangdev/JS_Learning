'use strict';
let stringToNumber = "1234";
console.log(stringToNumber.toUpperCase());
console.log(stringToNumber.length);
console.log(typeof + stringToNumber); // use + to convert to number
console.log(+stringToNumber === Number(stringToNumber)) // true
console.log(parseFloat("12.3"));
console.log(parseInt(stringToNumber));

console.log(Math.random())
let myArray = [3, 4, 5, 6, 2];
console.log(myArray.sort());
console.log(Math.max(...myArray)); // only take deconstruction

let emptyString = "";
for (var index = 0; index < stringToNumber.length; index++) {
    emptyString += stringToNumber[index] + stringToNumber.charAt(index);
}
console.log(emptyString);

let stringBuilderWay = [];
stringBuilderWay.push("abc");
stringBuilderWay.push("def");
console.log(stringBuilderWay.join(""));
console.log(stringBuilderWay.length);

let numberArray = new Array();
numberArray.push(1, 2, 3);
numberArray.pop(); // remove 3
console.log(numberArray.filter(x => x >= 2));

let arrayForSet = [4, 3, 3, 1, 1, 2];
let sum = 0;
for (let element of(new Set(arrayForSet)).values()) {
    sum += element;
}
console.log(sum);

let user = {
    name: "Tom",
    age: 10
};
console.log(JSON.stringify(user)); //to json string
for (let element of Object.keys(user)) {
    console.log(user[element]);
}

// destruction
let [name, age] = ["tom", 12];
console.log(name + age);

// rest operator
let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7];
console.log(typeof c); // array
console.log(typeof a); // number 
console.log(c);

let currentDate = new Date();
console.log(currentDate.toLocaleDateString());

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let strObj = JSON.parse(str, (k, v) => {
    if (k == "date") {
        return new Date(v);
    }
    return v;
});
console.log(strObj.date.getDate());