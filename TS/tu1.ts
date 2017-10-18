interface Nameable{
    name:string;
}

class Animal implements Nameable {
    name: string;
    constructor(name: string) { this.name = name; }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    //constructor(name: string) { super(name); }
    public move(distanceInMeters: number = 5) {
        console.log("From Snake call");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters: number = 45) {
        console.log("From Horse call");
        super.move(distanceInMeters);
    }
}

let sam: Animal = new Snake ("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move(77);
tom.move(100);

let a: string = "abc";
let b: number = 123;
let c: Array<number> =new Array();
let d: number[] = [3];
c.push(3);
console.log(c);

let e: [string, number] = ["tom", 123];
console.log(e[0] +": "+ e[1]);

enum Color{Red, Black};
let redColor: Color = Color.Red;
console.log(redColor);

let notSure: any = 3;
console.log(typeof notSure);  // number
notSure="as";
let sure = <string> notSure;  // casting
console.log(typeof notSure); // string
console.log(sure.toLocaleLowerCase());

function call(): void{
    let abc = null;
    console.log("hahaha");
}
call();

let sum = (a: number, b: number) : number => a+b 
let sum2: (a: number, b: number) => number = sum
console.log(sum(2,3));
console.log(sum2(2,3));

let flag: Boolean = new Boolean(true);
console.log(typeof flag.valueOf());

// like generic idea 
let takeAny = function(x: any):void {
    console.log(typeof x);
}
takeAny(<number> 23);
takeAny(false);

// interface for function 
interface People {
    name?: string;  // optional 
    readonly id: number  // readonly
    team?: Array<number>
}
function checkPeople(people: People): void{
    console.log("checking " + people.name + " " + people.id);
    console.log("team: "+ people.team);
}
checkPeople({name: "tom", id: 123, team:[1,2,3]});
checkPeople({id: 123});

// generics 
let takeGeneric = function<T>(x: T): Array<T>{
    console.log("taking " + typeof x);
    let arrayResult: Array<T> = new Array();
    arrayResult.push(x);
    return arrayResult;
}
console.log(takeGeneric(4));
console.log(takeGeneric("xyz"));

// export 
export function outFunc (){
    console.log("Out func");
}
