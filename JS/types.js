var Human = /** @class */ (function () {
    function Human(_name) {
        this.name = _name;
    }
    Human.prototype.call = function (human) {
        console.log("call " + human.name);
    };
    return Human;
}());
var human1 = new Human("Tom");
human1.call(new Human("Dick"));
