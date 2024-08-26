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
// ];

// let id1 = configData.map(data => data.id)
// let id2 = configData.filter(data => data.id==2)
// let id3= configData.find(data => data.id==2)
// let id4 = configData.some(data => data.id==2)
// let id5= configData.every(data => data.id==2)
// let id6= configData.reduce((acc, pilot) => acc + pilot.id, 0)
// console.log('id1: ', id1)
// console.log('id2: ', id2)
// console.log('id3: ', id3);
// console.log('id4: ', id4);
// console.log('id5: ', id5);
// console.log('id6: ', id6);

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

// chapter 2
// var n = 2;

// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// console.log('square2', square2)
// var square4 = square(4);
// console.log('square4', square4)

// chapter 3
// u can access fn and variable before initialization
// hoisting

// console.log("a", a);
// console.log("abc", abc);

// // console.log("test", b);
// function abc() {
//     console.log("inside xyz");
// }
// var a = 7;
// console.log("a", a);
// console.log("abc", abc);

// chapter 4

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
//     console.log("incide b", b);

//     function c() {
//         console.log("incide c", b);
//     }
//     c();
// }
// // console.log("incide c", b);
// a();

// chapter 8
// var const and let and Temporal Dead Zone
// console.log('a', a)
// console.log('d', d)
// var a
// var d = 10
// let b = 20

// const c = 5

// chapter 9
// closures = fn with lexical env

// function x() {
//     var a = 7;

//     function y() {
//         console.log(a);
//     }
//     y();
//     var a = 100;
//     return a
// }
// x();
// console.log("x()", x());

// function z() {
//     var b = 900;

//     function x() {
//         var a = 7;

//         function y() {
//             console.log(a, b);
//             return a, b
//         }
//         y();
//     }
//     return x();
// }

// var a = z();
// console.log('a', a)

// function x() {
//     var i = 1;
//     setTimeout(function x() {
//         console.log(i);
//     }, 3000);
// }
// x();

// function outest() {
//     var c = 30

//     function outer(b) {
//         var a = 10;
//         // b = 20

//         function inner() {
//             console.log(a, b, c);
//         }
//         return inner();
//     }
//     return outer("test1");
// }
// var a = 100
// outest()

// var close = outer();
// close();

// /

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

// 1) bind
// 2) closure

// 2 closure
// let multiply = function(x) {
//     return function(y) {
//         console.log(x * y)
//     }
// }

// let multi = multiply(2)
// multi(3)

//call back

// function x(y){
//   console.log('inside x')
//   y()
// }

// x(function y(){
//   console.log('inside y');
// })

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

// palindrome

// function palindrome(num){
//     return num == num.toString().split('').reverse().join('')
// }
// console.log(' palindrome(num): ',  palindrome(1234321));

// function palindrome(str) {
//   let regex = /[A-Za-z0-9]+/g;
//   let target = str.match(regex).join('').toLowerCase();
//   return target === target.split("").reverse().join("");
// }

// console.log("   palindrome: ", palindrome("My age is 0, 0 si ega ym."));
// console.log("   palindrome: ", palindrome("_eyess"));
// console.log("   palindrome: ", palindrome("race car"));

// function findLongestWordLength(str) {
//     console.log('str.spilt ', str.split(' '));
//     let testingArray = []
//     let num =[]
//     testingArray =  str.split(' ')
//     console.log('testingArray: ', testingArray)
//     testingArray.forEach(element => {
//         num.push( element.length)
//     });
//     console.log('num: ', num);
//     console.log('num: ', Math.max(...num));
//     return Math.max(...num);
//   }
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");

// function largestOfFour(arr) {
//   let finalArray = [];
//   arr.forEach((element) => {
//     finalArray.push(Math.max(...element));
//   });
//   return finalArray
// }

// console.log(
//   "result",
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return arr[i]
//     }
//   }
//   return undefined;
// }

// console.log(
//   "findElement",
//   findElement([1, 3, 5, 9], (num) => num % 2 === 0)
// );

// function booWho(bool) {
//   return typeof bool === 'boolean' ? true : false;
// }

// console.log('booWho(true);: ', booWho(true));
// console.log('booWho(true);: ', booWho('false'));

// function titleCase(str) {
//   let allText = "";
//   let arr;
//   str.split(" ").forEach((element) => {
//     for (let i = 0; i < element.length; i++) {
//       if (i === 0) {
//         arr = element[0].toUpperCase();
//       } else {
//         arr += element[i].toLowerCase();
//       }
//     }
//     allText += arr + " ";
//   });
//   return allText;
// }

// console.log("titleCase-", titleCase("I'm a little tea pot"));
// console.log("sHoRt AnD sToUt-", titleCase("sHoRt AnD sToUt"));
// console.log("HERE IS-", titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// function frankenSplice(arr1, arr2, n) {
//   return [ ...arr2.slice(0, n), ... arr1 , ...arr2.slice(n)];
// }
// console.log('frankenSplice', frankenSplice([1, 2, 3], [4, 5, 6], 2));

// function bouncer(arr) {
//   console.log('arr: ', arr)
//   return arr.filter(Boolean);
// }
// console.log('bouncer ', bouncer([7, "ate", "", false, 9]));

// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);
//   return arr.filter(ele=> ele > num).length
// }
// console.log('getIndexToIns([40, 60], 50): ', getIndexToIns([20,3,5], 19));

// function abc(){
//     function def(){
//         var a= 23
//     }
//     def()
//     console.log('a: ', a)
// }
// abc()

// function add1(num) {
//   return num.a++;
// }
// let addedNum = add1({a:7});
// console.log("addedNum: ", addedNum);

// function testing() {
// //    console.log("before: ", a); this give errors
//   function test() {
//     console.log("before: ", a);
//     var a;
//     console.log("after: ", a);
//   }
//   test();
//   return "res";
// }
// console.log("testing(): ", testing());
