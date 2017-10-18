"use strict";
let name = "tom",
    age = 30;
console.log(`${name} has ${age}`);
let nullV = null;
console.log(nullV);
console.log(typeof { name: "tom" });
console.log(typeof String(true));
console.log(Number("123a")); // NaN
console.log(Boolean("123")); // true

// == check value, === check value and type

let index1 = 0,
    sum = 0;
while (index1 < 100) {
    if (index1 % 2 == 0) {
        sum += index1;
    }
    index1++;
}
console.log(sum);

let array1 = [1, 2, 3];
for (var index = 0; index < array1.length; index++) {
    sum += array1[index];
}
console.log(sum);

let user = new Object({
    id: "01",
    call: function() {
        console.log("hahahah");
    }
});
user.call();
user.id = "001";
user.name = "tom";
user.age = 18;
user.isStudent = true;
console.log(user);
delete user["id"];
console.log(user);

let user1 = new Object()

for (let key in user) {
    console.log(user[key]);
    user1[key] = user[key];
}
console.log("after copy user1: " + user1.name);
console.log(user == user1);
console.log(user === user1);

function Person(_name) {
    this.name = _name;
    this.call = other =>
        console.log(this.name + " " + other);
    return this;
}
let person = new Person("tim");
person.call("dick");
console.log(person);

let marry = function(man, woman) {
    man["wife"] = woman;
    woman["husband"] = man;
    return {
        wife: woman,
        husband: man
    };
}

let resultOfMarry = marry({
    name: "Dick"
}, {
    name: "Elis"
});

console.log(resultOfMarry);
console.log(resultOfMarry.wife.husband);

let userOfThis = {
    name: "John",
    money: 1000,
    shortCall() {
        console.log("short call " + this.name);
    },
    valueOf() {
        // implicitly convert to value
        return this.money;
    },
    toString() {
        // implicitly convert to String
        return this.name;
    }


};

userOfThis.call = function() {
    console.log(this.name);
    // see how this is linked
}

userOfThis.call();
userOfThis.shortCall();
console.log(userOfThis.toString())
console.log(userOfThis + 2000)

let NewUser = function(_name) {
    this.name = _name;
    this.call = function() {
        console.log(this.name);
    }
}

let newUserInstance = new NewUser("DickLong");
newUserInstance.call();