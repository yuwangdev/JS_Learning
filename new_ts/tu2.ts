// interface is just like abstract class 
interface People {
    name: string;
    call(): void;
}

class Student implements People {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    call(): void {
        console.log(`calling from ${this.name}`);
    }
    static student(): void {
        console.log(`this is student`);
    }
}

Student.student();
(new Student("dick")).call();

export { Student, People }