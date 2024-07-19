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

function debounce(func, delay) {
    console.log('debounce: ')
    let timeoutId;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function apiCall() {
    console.log('API called');
}

const debouncedApiCall = debounce(apiCall, 2000);

// throttling
function throttle(func, delay) {
    let lastExecTime = 0;
    let timeoutId;

    return function() {
        const context = this;
        const args = arguments;
        const currentTime = new Date().getTime();

        if (currentTime - lastExecTime < delay) {
            // Delay has not passed since last execution, throttle the function call
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastExecTime = currentTime;
                func.apply(context, args);
            }, delay);
        } else {
            // Delay has passed, execute the function immediately
            lastExecTime = currentTime;
            func.apply(context, args);
        }
    };
}

function logScroll() {
    console.log('Scrolled');
}

const throttledScroll = throttle(logScroll, 200);

// Example usage: Throttled scroll event listener
// window.addEventListener('scroll', throttledScroll);
