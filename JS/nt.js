// let http = require("http");
// http.createServer(
//     (req, res) => {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end("hello");
//     }
// ).listen(8001);

let events = require("events");
let eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(100);
console.log(eventEmitter.getMaxListeners());

eventEmitter.on("first", () => {
    console.log("running the first, emit the second")
    eventEmitter.emit("second");
});
eventEmitter.on("second", () => {
    console.log("running the second");
});
eventEmitter.emit("first");
// .on and .addListner are almost similar

console.log(eventEmitter.eventNames());

eventEmitter.removeAllListeners();
eventEmitter.emit("first"); // wont run

let buffer1 = new Buffer(5);
for (let index = 0; index < 6; index++) {
    buffer1[index] = index;
}
console.log(buffer1.toJSON());

let buffer2 = new Buffer([8, 9]);
let buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toJSON());

console.log(__filename);
console.log(__dirname);

setTimeout(() => {
    console.log("run after 1 s")
}, 1000);

// setInterval(() => {
//     console.log("run after 1 s")
// }, 1000);