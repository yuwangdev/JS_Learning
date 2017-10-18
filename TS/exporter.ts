function caller(name:string){
    console.log("people of " + name);
}

class People{
    private name: string;
    constructor(name: string){
        this.name=name;
    }
    public call():void{
      caller(this.name);
    }
}

export class Job{
    private name: string;
    constructor(name: string){
        this.name=name;
    }
    public do():void{
        console.log("job of " + this.name);
    }
}

export {People};