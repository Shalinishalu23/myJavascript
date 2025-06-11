// // undefined and undeclared
// console.log('testing: ', testing) //undefined
// var testing
// testing = 3

// console.log('test: ', test) //undeclared

// // primitive and non primitive
// Primitive: Stored by value, immutable, compared by value.
// Non-Primitive: Stored by reference, mutable, compared by reference.
// // Primitive types
// let num = 42;              // Number
// let str = "Hello";         // String
// let bool = true;           // Boolean
// let und = undefined;       // Undefined
// let nul = null;            // Null
// let sym = Symbol("id");    // Symbol
// let bigInt = 123n;         // BigInt

// // Non-primitive types
// let arr = [1, 2, 3];                 // Array
// let obj = { name: "Alice" };         // Object
// let func = function() { return 1; }; // Function
// let date = new Date();               // Date object

// let a = 10;
// let b = a;
// b = 20;
// console.log(a); // 10 (primitive, value copy)

// let x = { val: 10 };
// let y = x;
// y.val = 20;
// console.log(x.val); // 20 (non-primitive, reference copy)

// hoisting
// console.log("testing: ", testing);
// var testing;
// testing = 6;
// console.log("testing: ", testing);

// function outer() {
//     let test;
//     function inner() {
//         test = 3;


//         function core() {


//             console.log("test: ", test);
//             return test;
//         }
//         return core();
//     }
//     return inner();
// }
// console.log("outer(): ", outer());

// Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("IIFE runs immediately!");
// })();

// = “ (compare values) and “ === “(both value and types)
// let test = 3;
// let testing = "3";

// console.log("test == testing: ", test === testing);

// call apply and bind
// let name = {
//     fn: 'Shalini',
//     ls: 'M'
// }

// function fullName(town, place) {
//     console.log(this.ls, this.fn, town , place);

// }
// fullName.call (name, 'KA', 'Mysore')
// fullName.apply(name, ['KA', 'Mysore'])
// const test = fullName.bind(name, 'KA', 'Mysore')
// console.log('test: ', test);

// call back fun
// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);
// // Output:
// // Hello, Alice!
// // Goodbye!


// setTimeout(() => {
//     console.log('3000: ')
// }, 3000);

// setInterval(() => {
//     date = new Date()
//     console.log('date: ', date)
// }, 1000);


// A WebSocket is a protocol that enables two-way, persistent communication between a client and a server
// WebSockets allow real-time data transfer with less overhead.
// const socket = new WebSocket('wss://ws.ifelse.io')

// socket.onopen = function(){
//   console.log('WebSocket connection opened');
//   socket.send('Hello, server!');
// }
// socket.onclose = function(){
//   console.log('WebSocket connection closed');
// }
// socket.onerror = function(error){
//     console.log('error: ', error);
// }
// socket.onmessage = function(event){
//     console.log('event: ', event.data)
// }