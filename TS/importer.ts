import {People, Job as Work} from "./exporter";

let people: People = new People("tom");
people.call();

let job: Work = new Work("SDE");
job.do();

namespace OnlyThisPattern{
    export function call():void{
        console.log("only this pattern call");
    }
}

namespace OnlyThatPattern{
    export function call():void{
        console.log("only that pattern call");
    }
}

OnlyThisPattern.call();
OnlyThatPattern.call();

