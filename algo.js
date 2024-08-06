// time complexity
// space complexity
// big o notation
// O(n)= linear
// O(1)= constant
// O(logn)-logarithmic

// Object
// var person={
//     fn:'shalini',
//     ln:'M'
// }
// insert/remove/access- O(1)
// search- O(n)
// object.keys()- O(n)
// object.values()- O(n)
// object.entries()- O(n)

// Array
// var odd=[1,3,5,7,9]
// insert/remove end - O(1)
// insert/remove beginning O(n)
// access O(1)
// search O(n)
// push/ pop O(1)
// shift/ unshift/ concat/ slice/ splice O(n)
// foreach/ map/ filter/ reduce O(n)

// 1 fibonacci O(n)
// function fibonacci(num){
//     let result=[0,1]
//     for(let i=2; i < num; i++ ){
//     result[i]= result[i-1] + result[i-2]
//     }
//     return result
// }
// console.log('fibonacci(2): ', fibonacci(2)); // [0,1]
// console.log('fibonacci(3): ', fibonacci(3)); // [0,1,1]
// console.log('fibonacci(4): ', fibonacci(4)); // [0,1,1,2]
// console.log('fibonacci(4): ', fibonacci(5)); // [0,1,1,2,3]

// 2 factorial O(n)
// function factorial(num){
//     let result = 1
//     for(let i=2; i <= num; i++){
//         result= result*i
//     }
//     return result
// }
// console.log('factorial: ', factorial(1)); // 2*1 = 1
// console.log('factorial: ', factorial(2)); // 2*1 = 2
// console.log('factorial: ', factorial(3)); // 3*2*1 =6
// console.log('factorial: ', factorial(4)); // 4*3*2*1 = 25
// console.log('factorial: ', factorial(5)); // 5*4*3*2*1 = 120

// 3 prime O(n)

// function prime(num) {
//   let result;
//   for (let i = 2; i < num-1; i++) {
//     if (num % i === 0) {
//         return num + ' not prime';
//     } else {
//       return num+ '  prime';
//     }
//   }
//   return result;
// }

// console.log("prime(3): ", prime(4));
// console.log("prime(3): ", prime(5));
// console.log("prime(3): ", prime(6));
// console.log("prime(3): ", prime(7));
