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

// fibonacci O(n) ep-7
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

// factorial O(n) ep-8
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

// prime O(n) ep-9

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

// //power of 2 ep-10
// function isPowerOfTwo(num) {
//   if (num < 1) {
//     return false;
//   }
//   while (num > 1) {
//     if (num % 2 !== 0) {
//       return false;
//     }
//     num = num / 2; // O(logn)
//   }
//   return true;
// }
// // or below code does same thing
// // function isPowerOfTwo(num) {
// //     // Check if the number is greater than 0 and if it has exactly one bit set
// //     return num > 0 && (num & (num - 1)) === 0; // nice
// //   }
// console.log("isPowerOfTwo1: ", isPowerOfTwo(2)); // true;
// console.log("isPowerOfTwo: ", isPowerOfTwo(5)); // false;
// console.log("isPowerOfTwo: ", isPowerOfTwo(8)); // true;
// console.log("isPowerOfTwo: ", isPowerOfTwo(10)); // false;
// // 8/2 = q = 0 r= 4
// // 4/2 = q = 0 r= 2
// // 2/2=1 q = 0 r= 1

// recursive Fibonacci ep-12

// function recursiveFibonacci(n){
//     if(n < 2){
//         return n
//     }
//    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
// }
// console.log('recursiveFibonacci(0): ', recursiveFibonacci(0));
// console.log('recursiveFibonacci(1): ', recursiveFibonacci(1));
// console.log('recursiveFibonacci(6): ', recursiveFibonacci(5));
// console.log('recursiveFibonacci(6): ', recursiveFibonacci(6));
// console.log('recursiveFibonacci(6): ', recursiveFibonacci(7));

// recursive factorial ep-13 // n!= n *(n-1)! for ex 5! = 5*(5-1)! => 5! =5*4!

// function recursiveFactorial(n) { // O(n)
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// }
// console.log("recursiveFactorial(3): ", recursiveFactorial(3));
// console.log("recursiveFactorial(4): ", recursiveFactorial(4));
// console.log("recursiveFactorial(5): ", recursiveFactorial(5));

// search- linear search and binary search