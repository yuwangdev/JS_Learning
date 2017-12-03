let map: Map<number, string> = new Map<number, string>();
let set: Set<string> = new Set();
let p: Product;

(function () {
    console.log("init the map");
    map.set(1, "1A");
    set.add("1s").add("2s");
    p = { name: "iphone", price: 1000 };
})();

map.forEach((k, v) => console.log(v));
set.forEach(x => console.log(x.toLocaleUpperCase()));
let funcAlias = function increment(a: number = 0, f?: (x: number) => number): number {
    if (f == null) return a + 1;
    return f(a) + 1;
}
console.log(funcAlias(p.price));
console.log(funcAlias(4, x => {
    return x * -1;
}))
type Product = {
    readonly name: string,
    price?: number  // optional 
}

let checkType = function <T>(a: T): string {
    return typeof a;
};
console.log(checkType(3));
console.log(checkType("a"));


let myList: Array<number> = new Array();
myList.push(1);
myList.push(2);
for (var i = 0; i < myList.length; i++) {
    console.log(`${i}: ${myList[i]}`)
}