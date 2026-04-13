// JS Ep.2 Execution context 

// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// console.log('square2', square2)
// var square4 = square(4);
// console.log('square4', square4)

// chapter 3  hoisting
// u can access fn and variable before initialization

// console.log("a", a);
// console.log("abc", abc);

// // console.log("test", b);
// function abc() {
//     console.log("inside abc");
// }
// var a = 7;
// console.log("a", a);
// console.log("abc", abc);

// chapter 4
// Local variable and global 
// var x = 1;
// a();
// b();
// console.log('x', x)

// function a() {
//     var x = 10;
//     console.log(x);
// };

// function b() {
//     var x = 100;
//     console.log(x);
// };

// chapter 7
// lexical env, scope and scope change
// function a() {
//     var b = 10;
//     console.log("inside b", b);

//     function c() {
//         console.log("inside c", b);
//     }
//     c();
// }
// // console.log("inside c", b);
// a();

// chapter 8
// var const and let and Temporal Dead Zone
// console.log('a', a)
// console.log('d', d)
// var a
// var d = 10
// let b = 20

// const c = 5

// chapter 9 block, scope and shadowing 
// {
// var a= 10
// let b =100
// const c = 1000
// }

// chapter 10
// closures = fn with lexical env

// function parent() {
//     var a = 10;

//     function child() {
//         var b = 20;

//         function grandChild() {
//             var c = 20;
//             console.log(a, b, c);
//         }
//         return grandChild();
//     }
//     return child();
// }

// var test = parent()();

// first class function chapter 13
//  functions are treated like any other variable	

// function greeting(test){
//     console.log('test: ', test);
//     return function (){

//     }

// }
// const test = function fullName(){
// }
// greeting(test)
// const test  = () => {
//     console.log('inside arrow fn');
// }
// test()

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

// Event loop chapter 15

// Higher order function chapter 18

// function fullName(){
// console.log('inside full name: ');
// }
// function greeting(callBack){
//     callBack()
// }

// greeting(fullName)

// map, filter and reduce chapter 19



// call apply and bind

// let name1 = {
//     fn: "shalu",
//     ln: "gowda",
// };

// let printname = function(town, state) {
//     console.log(this.fn, this.ln, town, state);
// };
// printname.call(name1, 'c', 'd');

// let name2 = {
//     fn: "sha",
//     ln: "gow",
// };

// //function barrow
// printname.call(name2, 'a', 'b');
// printname.apply(name2, ['a', 'b']);
// let name3 = printname.bind(name2, 'a', 'b');
// console.log('name', name3)

// name3();

// polyfill
// let name1 = {
//     fn: "sha",
//     ls: "gowda",
// };

// let fullName = function(town, sta, cou) {
//     console.log(this.fn, this.ls, town, sta, cou);
// };

// let namessss = fullName.bind(name1, 'town', 'sta', 'cou');
// namessss();

// Function.prototype.myBind = function(...args) {
//     let obj = this;
//     params = args.slice(1)
//     return function(...arg2) {
//         obj.apply(args[0], [...params, ...arg2]);
//     };
// };

// let namess = fullName.myBind(name1, 'town', 'sta', 'cou');
// namess();

// currying
// function multiply(a,b){
//     return a*b;
//   }

//   function currying(fn){
//     return function(a){
//       return function(b){
//         return fn(a,b);
//       }
//     }
//   }

//   var curriedMultiply = currying(multiply);

//   multiply(4, 3); // Returns 12

//   curriedMultiply(4)(3); // Also returns 12


//promise

// creating a promise

// function promiseCreation(name){
//   const pr = new Promise(
//     function(resolve, reject){
//         let test = {
//           status: 200,
//           data: 'https://api.github.com/users/'+ name,

//         }
//         if(test.status===200){
//           resolve(test.data)
//         } else{
//           const err = new Error("error in api")
//           reject(err)
//         }
//     }
//   )
//   return pr
// }

// // consuming of the promise
// const prResult = promiseCreation('shalinishalu23')
// console.log('prResult: ', prResult)
// prResult
// .then(function(data){
//   console.log('data: ', data)
//   fetch(data).then(function(test){
//     console.log('test: ', test)
//   })
// })
// .then(console.log('call another fn'))
// .catch(function(err){
// console.log(err.message);
// })

// async await
// always return promise

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p1 resolve')
//   }, 20000)
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p2 resolve')
//   }, 30000)
// })

// // with async await
// async function getData() {
//   try {
//     console.log('log1');
//     await p1.then(res => console.log(res))
//     console.log('log2');
//     await p2.then(res => console.log(res))
//     console.log('log3');
//   }
//   catch (err) {
//     console.log('err: ', err);
//   }
// }

// // without async await , its just promise
// function getData() {
//   console.log('log1');
//   p1.then(res => console.log(res))
//   console.log('log2');
//   p2.then(res => console.log(res))
//   console.log('log3');
// }
// getData()

// debouncing
// limit the rate of the api call

// function debounce(func, delay) {
//     console.log('debounce: ')
//     let timeoutId;

//     return function() {
//         const context = this;
//         const args = arguments;

//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             console.log('timeoutId: ', timeoutId)
//             func.apply(context, args);
//         }, delay);
//     };
// }

// function apiCall() {
//     console.log('API called');
// }

// const debouncedApiCall = debounce(apiCall, 2000);

// throttling
// function throttle(func, delay) {
//     let lastExecTime = 0;
//     let timeoutId;

//     return function() {
//         const context = this;
//         const args = arguments;
//         const currentTime = new Date().getTime();

//         if (currentTime - lastExecTime < delay) {
//             // Delay has not passed since last execution, throttle the function call
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 lastExecTime = currentTime;
//                 func.apply(context, args);
//             }, delay);
//         } else {
//             // Delay has passed, execute the function immediately
//             lastExecTime = currentTime;
//             func.apply(context, args);
//         }
//     };
// }

// function logScroll() {
//     console.log('Scrolled');
// }

// const throttledScroll = throttle(logScroll, 2000);

// Example usage: Throttled scroll event listener
// window.addEventListener('scroll', throttledScroll);

// remove duplicate using array from set and filter for the '' and null remove and join for the array to string
// const str1= 'testing1'
// const str2= 'testing2'
// const str3= ''
// const str4= null
// const str5= 'testing2'

// const receipent = Array.from(new Set([str1, str2,str3, str4, str5].filter(Boolean))).join(',')
// console.log('receipent: ', receipent)

// function add (a) {
//     return function(b){
//         console.log('a  b', a , b)
//       return a + b;
//     }
//   }
//   add(3)(4)

// //   or

//   function add (a) {
//     function add1 (b){
//        console.log('a  b', a , b)
//      return a + b;
//    }
//    add1(4)
//  }

//  add(3)

// spread operator
// this.myFunc(0,1, 2, 3, 4, 5, 6);
// function myFunc(...arg) {
//   console.log("arg index", arg[5]);
//   console.log("arg", arg);
// }

// rest param
// function myFunc(arg1, arg2, ...arg) {
//   console.log("arg", arg1, arg2);
// }
// =======================


// configData = [
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 1,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 1,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
// ];
// //remove duplication
// var res = configData.filter(
//   (c, b, s) => s.findIndex((d) => d.id === c.id) === b
// );
// console.log("res", res);
// =========================
// // difference in 2 array
// // Array Object 1
// const arrayObjOne = [
//   { userId: "1", display: "Jamsheer" },
//   { userId: "2", display: "Muhammed" },
//   { userId: "3", display: "Ravi" },
//   { userId: "4", display: "Ajmal" },
//   { userId: "5", display: "Ryan" },
// ];

// // Array Object 2
// const arrayObjTwo = [
//   { empId: "1", display: "Jamsheer", designation: "Jr. Officer" },
//   { empId: "2", display: "Muhammed", designation: "Jr. Officer" },
//   { empId: "3", display: "Ravi", designation: "Sr. Officer" },
//   { empId: "4", display: "Ajmal", designation: "Ast. Manager" },
// ];
// // difference in array
// // const ResultArrayObjOne = arrayObjOne.filter(
// //   ({ userId: userId }) =>
// //     !arrayObjTwo.some(({ empId: empId }) => empId === userId)
// // );
// // console.log(ResultArrayObjOne);

// // common in Array
// var common = arrayObjOne.filter(item1 => arrayObjTwo.some(item2 => item1.userId === item2.empId)) // common
// var dif = arrayObjOne.filter(item1 => !arrayObjTwo.some(item2 => item1.userId === item2.empId)) // difference
// console.log('common', common)
// console.log('dif', dif)

// arrays
// let intersection = arrayObjOne.filter(x => arrayObjTwo.includes(x));
// console.log('intersection', intersection)

// _.intersection( arrayObjOne ,arrayObjTwo )
// console.log('_.intersection( arrayObjOne ,arrayObjTwo )', _.intersection( arrayObjOne ,arrayObjTwo ))

// ================================
// configData = [
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 1,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
// ];
// console.log("configData", configData);

// const id = configData.map((res) => res.id);
// console.log("map", id);

// const results = configData.reduce((acc, pilot) => acc + pilot.id, 0);
// console.log("reduce", results);

// const firstPilot = configData.find((data) => data.id);
// console.log('find', firstPilot)

// const fileSize = configData.filter((data) => data.id == 2);
// console.log('filter', fileSize)

// const listHasPilots = configData.some((data) => data.id == 2);
// console.log('some', listHasPilots)

// const listHasPilotss = configData.every((data) => data.id == 2);
// console.log('every', listHasPilotss)

// const id1 = configData.findIndex(item => item.id ===2 )
// console.log('id1: ', id1);

// 5 => 5+4+3+2+1
// function sum (num){
//     let results= 0
//     for(let i = 1 ; i<= num; i++ ){
//         results+=i
//     }
//     return results
// }

// const result= sum(5)
// const result1= sum(6)
// console.log('result1: ', result1);
// console.log('result: ', result)

// const test = function(num){
//     let results= 0
//     for(let i = 1 ; i<= num; i++ ){
//         results+=i
//     }
//     return results
// }
// console.log('test: ', test(6))

// function checkPrime(num) {
//   for (let i = 2; i <= num - 1; i++) {
//     if (num % i == 0) {
//         console.log('prime', num);
//       flag = false;
//       break;
//     } else {
//       console.log('not prime', num);
//     }
//   }
// }
// checkPrime(4);
// checkPrime(5);

// var person={
//     fn:'shalini',
//     ln:'M'
// }

// console.log('keys): ', Object.keys(person));
// console.log('values): ', Object.values(person));
// console.log('entries): ', Object.entries(person));  // will get in array both key and value
// console.log('assign: ', Object.assign(person));

// function reversName(name){
//    return name.split('').reverse().join('')
// }
// console.log('reversName(string): ', reversName('shalini'));

// function time(){
//     setInterval(()=>{
//         var currentTime = new Date()
//         console.log('currentTime: ', currentTime)
//     }, 1000)
// }
// time()

// TTD shallowClone and deepClone (json.string) and json(pass)

// //map flatMap  map([1][2][3]) flatMap([123])

// arr3 = [2,4,6,8]
// console.log('arr', arr3.map((item)=> [item]));
// console.log('arr', arr3.flatMap((item)=> [item]));
// console.log('arr', arr3.flatMap((item)=> [[item]]));

// arr = [1,2,3,4,5,6]
// arr1 = [7,8,9,10]
// arr2 = [11,12]

// console.log('isArray', Array.isArray(arr));
// console.log('toString', arr.toString());
// console.log('[2]', arr[2]);
// console.log('at(2)', arr.at(2));
// console.log('join', arr.join('*'));
// console.log('push', arr.push(5), arr);
// console.log('pop', arr.pop(), arr);
// console.log('shift', arr.shift(), arr);
// console.log('unshift', arr.unshift(1), arr);
// console.log('concat', arr.concat(arr1));
// console.log('spread add ', [...arr  , ...arr1]);
// console.log('concat(arr1, arr2)', arr.concat(arr1, arr2));
// console.log('concat(11)', arr.concat(11));
// console.log('copyWithin(2, 0);',arr.copyWithin(2, 0));
// console.log('copyWithin(2, 0, 2);',arr.copyWithin(2, 0, 2));
// const myArr = [[1,2],[3,4],[5,6]];
// console.log('flat([1,2]);: ', myArr.flat())
// console.log('flatMap(): ', arr.flatMap(x=>[x]))
// console.log('splice()add: ', arr.splice(2,1,13)) //splice and toSplice
// console.log('slice();: ', arr.slice(1))
// console.log('splice()remove: ', arr.splice(1, 2)) //check

// fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log('indexOf: ', fruits.indexOf("Orange"));
// console.log('includes: ', fruits.includes('Orange'));
// console.log('sort: ', fruits.sort());
// console.log('toSorted: ', fruits.toSorted());
// console.log('reverse: ', fruits.reverse());

// const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function(a, b){return b-a});
// console.log('points: ', points.sort())

// let dates = new Date()
// console.log('dates: ', dates.getSeconds())

// function modifyVal(value) {
//     value = 100;
//    console.log(value);
//    }
    
//    let num = 50;
//    modifyVal(num);
//    console.log(num);

//    const str = "Hello World";
// const uniqueChars = [...new Set([...str])];
// console.log(uniqueChars);


// deep clone
// Deep cloning means creating a completely independent copy of an object, including all nested objects or arrays. Changes to the clone do not affect the original.
// const original = {
//   name: "Shalini",
//   address: {
//     city: "Bangalore",
//     pin: 560001
//   }
// };

// const deepClone = JSON.parse(JSON.stringify(original));

// deepClone.address.city = "Mysore";


// console.log("original:", original.address.city); // Bangalore
// console.log("deepClone:", deepClone.address.city); // Mysore

// testing()
// function testing(){
//   console.log('testing: ')
// }

// var stre = "Banglore, Mysore, Mandya";
 
// //  [
// //  {name:'Banglore', value:'Banglore'},
// //  {name:'Mysore', value:'Mysore'}, 
// //  {name:'Mandya', value:'Mandya'}
// //  ]


// const result = stre.split(',').map(a=>({
//   name: a,
//   value: a
// }))
// console.log('testing: ', result)

// ES6
// Arrow Functions
// const add = (a, b) => a + b;
// const greet = name => `Hello ${name}`;

// var a = 7;
// console.log("7", 7);
// function add() {
//   console.log("add fn called");
// }
// add()
// let val;
// const pi = 3.14;
// function outest(c) {
//   console.log("c", c);
//   function outer(a) {
//     console.log("a", a);
//     function inner(b) {
//       console.log("b", a, b, c);
//     }
//     inner(8);
//   }
//   outer(6);
// }

// outest(7);

// function add (a) {
//     return function(b){
//         console.log('a  b', a , b)
//       return a + b;
//     }
//   }
//   add(3)(4)

// //   or

//   function add (a) {
//     function add1 (b){
//        console.log('a  b', a , b)
//      return a + b;
//    }
//    add1(4)
//  }

//  add(3)

// spread operator
// this.myFunc(0,1, 2, 3, 4, 5, 6);
// function myFunc(...arg) {
//   console.log("arg index", arg[5]);
//   console.log("arg", arg);
// }

// rest param
// function myFunc(arg1, arg2, ...arg) {
//   console.log("arg", arg1, arg2);
// }
// =======================

// configData = [
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 1,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 1,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
//   {
//     configDesc: "SMTP mail server(IP address)",
//     configValue: "smtpout.asia.secureserver.net",
//     id: 2,
//   },
// ];
// //remove duplication
// var res = configData.filter(
//   (c, b, s) => s.findIndex((d) => d.id === c.id) === b
// );
// console.log("res", res);
// =========================
// // difference in 2 array
// // Array Object 1
// const arrayObjOne = [
//   { userId: "1", display: "Jamsheer" },
//   { userId: "2", display: "Muhammed" },
//   { userId: "3", display: "Ravi" },
//   { userId: "4", display: "Ajmal" },
//   { userId: "5", display: "Ryan" },
// ];

// // Array Object 2
// const arrayObjTwo = [
//   { empId: "1", display: "Jamsheer", designation: "Jr. Officer" },
//   { empId: "2", display: "Muhammed", designation: "Jr. Officer" },
//   { empId: "3", display: "Ravi", designation: "Sr. Officer" },
//   { empId: "4", display: "Ajmal", designation: "Ast. Manager" },
// ];
// // difference in array
// // const ResultArrayObjOne = arrayObjOne.filter(
// //   ({ userId: userId }) =>
// //     !arrayObjTwo.some(({ empId: empId }) => empId === userId)
// // );
// // console.log(ResultArrayObjOne);

// // common in Array
// var common = arrayObjOne.filter(item1 => arrayObjTwo.some(item2 => item1.userId === item2.empId)) // common
// var dif = arrayObjOne.filter(item1 => !arrayObjTwo.some(item2 => item1.userId === item2.empId)) // difference
// console.log('common', common)
// console.log('dif', dif)

// arrays
// let intersection = arrayObjOne.filter(x => arrayObjTwo.includes(x));
// console.log('intersection', intersection)

// _.intersection( arrayObjOne ,arrayObjTwo )
// console.log('_.intersection( arrayObjOne ,arrayObjTwo )', _.intersection( arrayObjOne ,arrayObjTwo ))

// ================================
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

//  ['LM2500', 'LM6000', 'X-Fleet Aero']
 
//  this.listOfData = data.data.bulletins;
//         this.listOfData = this.listOfData.map((item)=>{
//           return {
//             ...item,
//             sortOrder: 'ase'
//           }
//         })	  
//  this.filterbulletinStatus = data.data.bulletinStatus.map(
//           (item: any) => {
//             return {
//               ...item,
//               text: item.value,
//             };
//           }
//         );
// // ====================================  
// var stre = "Banglore, Mysore, Mandya";

// stre = stre.split(',');
// stre = stre.map((item) => {
//   return {
//     item: item,
//     value: item
//   }
// });
// console.log(stre); 
// // =====================================
// paths= {1: '1-Prior to start-up', 2: '2-At first'}
// updatePaths = Object.keys(paths).map((key) => {
//           return {
//             access: paths[key].split(','),
//             resources: key
//           }
//         });
		
// =====================================	
// this.globalService.jwtToken$.next(jwtToken);

//  public jwtToken$ = new BehaviorSubject<any>('');
//   jwtToken = this.jwtToken$.asObservable();

// this.globalService.jwtToken$.subscribe((data: any) => {
//       if (data) {
//         this.getToken = data;
//         console.log('get', data);
//       }
//     });

// ================
// datatable filter in entire column
// filterItems: function (tableData, query) {
//       const lowerCaseQuery = query.toLowerCase()
//       return tableData.filter(task => {
//         return Object.values(task)
//           .some(value => ('' + value).toLowerCase().includes(lowerCaseQuery))
//       })
//     }
// datatable column based filter
//  filterItems: function (arr, query) {
//       return arr.filter((item) => {
//         const matchValues = {
//           sbName: (item.sbName || '').toLowerCase(),
//           sbNumber: (item.sbNumber || '').toLowerCase(),
//           status: (item.status || '').toLowerCase(),
//           engineModel: (item.engineModel || '').toLowerCase()
//         }
//         return Object.keys(query).every((key) =>
//           matchValues[key].includes((query[key] || '').toLowerCase())
//         )
//       })
//     }
// ================
// creating a promise

// function promiseCreation(name){
//   const pr = new Promise(
//     function(resolve, reject){
//         let test = {
//           status: 200,
//           data: 'https://api.github.com/users/'+ name,

//         }
//         if(test.status===200){
//           resolve(test.data)
//         } else{
//           const err = new Error("error in api")
//           reject(err)
//         }
//     }
//   )
//   return pr
// }

// // consuming of the promise
// const prResult = promiseCreation('shalinishalu23')
// console.log('prResult: ', prResult)
// prResult
// .then(function(data){
//   console.log('data: ', data)
//   fetch(data).then(function(test){
//     console.log('test: ', test)
//   })
// })
// .then(console.log('call another fn'))
// .catch(function(err){
// console.log(err.message);
// })


// async await
// always return promise

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p1 resolve')
//   }, 5000)
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p2 resolve')
//   }, 10000)
// })

// // with async await 
// async function getData() {
//   try {
//     console.log('log1');
//     await p1.then(res => console.log(res))
//     console.log('log2');
//     await p2.then(res => console.log(res))
//     console.log('log3');
//   }
//   catch (err) {
//     console.log('err: ', err);
//   }
// }

// without async await , its just promise
// function getData() {
//   console.log('log1');
//   p1.then(res => console.log(res))
//   console.log('log2');
//   p2.then(res => console.log(res))
//   console.log('log3');
// }
// getData()
// ============================
// function debounce(func, delay) {
//     console.log('debounce: ')
//     let timeoutId;

//     return function() {
//         const context = this;
//         const args = arguments;

//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             console.log('timeoutId: ', timeoutId)
//             func.apply(context, args);
//         }, delay);
//     };
// }

// function apiCall() {
//     console.log('API called');
// }

// const debouncedApiCall = debounce(apiCall, 2000);
// =====================
// const targetRoute = { name: 'communication', params: { comNum: processId } }
//         const currentRoute = router
//         if (
//           currentRoute.name !== targetRoute.name ||
//           currentRoute.params.comNum !== targetRoute.params.comNum
//         ) {
//           router.push(targetRoute)
//         }
// =========================
// function modifyVal(value) {
//  value = 100;
// console.log(value);
// }
 
// let num = 50;
// modifyVal(num);
// console.log(num);

// const str = "Hello World";
// const uniqueChars = [...new Set([...str])];
// console.log(uniqueChars);
// ========================
// 	================
// // creating a promise

// // function promiseCreation(name){
// //   const pr = new Promise(
// //     function(resolve, reject){
// //         let test = {
// //           status: 200,
// //           data: 'https://api.github.com/users/'+ name,

// //         }
// //         if(test.status===200){
// //           resolve(test.data)
// //         } else{
// //           const err = new Error("error in api")
// //           reject(err)
// //         }
// //     }
// //   )
// //   return pr
// // }

// // // consuming of the promise
// // const prResult = promiseCreation('shalinishalu23')
// // console.log('prResult: ', prResult)
// // prResult
// // .then(function(data){
// //   console.log('data: ', data)
// //   fetch(data).then(function(test){
// //     console.log('test: ', test)
// //   })
// // })
// // .then(console.log('call another fn'))
// // .catch(function(err){
// // console.log(err.message);
// // })


// // async await
// // always return promise

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p1 resolve')
//   }, 5000)
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p2 resolve')
//   }, 10000)
// })

// // // with async await 
// // async function getData() {
// //   try {
// //     console.log('log1');
// //     await p1.then(res => console.log(res))
// //     console.log('log2');
// //     await p2.then(res => console.log(res))
// //     console.log('log3');
// //   }
// //   catch (err) {
// //     console.log('err: ', err);
// //   }
// // }

// // without async await , its just promise
// function getData() {
//   console.log('log1');
//   p1.then(res => console.log(res))
//   console.log('log2');
//   p2.then(res => console.log(res))
//   console.log('log3');
// }
// getData()
// ============================
// function debounce(func, delay) {
//     console.log('debounce: ')
//     let timeoutId;

//     return function() {
//         const context = this;
//         const args = arguments;

//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             console.log('timeoutId: ', timeoutId)
//             func.apply(context, args);
//         }, delay);
//     };
// }

// function apiCall() {
//     console.log('API called');
// }

// const debouncedApiCall = debounce(apiCall, 2000);
// =====================
// const targetRoute = { name: 'communication', params: { comNum: processId } }
//         const currentRoute = router
//         if (
//           currentRoute.name !== targetRoute.name ||
//           currentRoute.params.comNum !== targetRoute.params.comNum
//         ) {
//           router.push(targetRoute)
//         }
