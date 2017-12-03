var map = new Map();
var set = new Set();
var p;
(function () {
    console.log("init the map");
    map.set(1, "1A");
    set.add("1s").add("2s");
    p = { name: "iphone", price: 1000 };
})();
map.forEach(function (k, v) { return console.log(v); });
set.forEach(function (x) { return console.log(x.toLocaleUpperCase()); });
var funcAlias = function increment(a, f) {
    if (a === void 0) { a = 0; }
    if (f == null)
        return a + 1;
    return f(a) + 1;
};
console.log(funcAlias(p.price));
console.log(funcAlias(4, function (x) {
    return x * -1;
}));
var checkType = function (a) {
    return typeof a;
};
console.log(checkType(3));
console.log(checkType("a"));
var myList = new Array();
myList.push(1);
myList.push(2);
for (var i = 0; i < myList.length; i++) {
    console.log(i + ": " + myList[i]);
}
