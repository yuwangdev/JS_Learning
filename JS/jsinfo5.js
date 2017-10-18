// bind to a this 
let user = {
    name: "tome"
};

function myFunc() {
    console.log(this.name);
}
let myFuncNew = myFunc.bind(user, "name");
myFunc();
myFuncNew();

// return function
function first() {
    return function() {
        console.log("first->second");
    }
}
first().apply();

// fp 
let small = x => console.log("small: " + x);

function big(a, f) {
    f(a);
}
big(100, small);