// factory class pattern 
function User(name) {
    return {
        call: function() {
            console.log(name);
        }
    };
}

let user = new User("tom");
user.call();


// prototype pattern, inheritance
function Person(name) {
    this._name = name;
}
Person.prototype.yell = function() {
    console.log("yell from " + this._name)
}
let person = new Person("Tom")
person.yell();

function Employee(name) {
    this._name = name;
}
Employee.prototype.job = function() {
    console.log("job from " + this._name)
}
Employee.prototype.__proto__ = Person.prototype;
let employee = new Employee("Dick");
employee.job();
employee.yell();

// class
class Food {
    constructor(_name) {
        this.name = _name;
    }
    call() {
        console.log("Food call " + this.name);
    }
    getName() {
        return this.name;
    }
    setName(_name) {
        this.name = _name;
    }
    static staticCall() {
        console.log("static call from food");
    }
}

let food = new Food("apple");
food.setName("banana");
food.call();
console.log(Food.prototype.constructor)
Food.staticCall();

// no attributes in class pattern
// need to use prototype to add attirubtes
Food.prototype.price = 100;
console.log(food.price);