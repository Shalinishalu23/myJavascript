// even/odd(num%2==0)
// prime/non prime(num%i==0)

// sum of num(5) 5+4+3+2+1 (result+i)
// factorial(5) 5*4*3*2*1(result*i)
// fibonacci(4) [0,1,1,2,3,5,8]

// powerof(2) return num > 0 && (num &(num -1)) === 0

// recursive Finbonacci return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
// recursive factorial return n * recursiveFactorial(n - 1);

// binarySearch midIndex = leftIndex + rightIndex /2

// sort - bubbleSort arr[i] > arr[i + 1] and temp
// sort - quick sort(pivot) leftArray and rightArray

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

// search- linear search ep-14 O(n)

// function linearIndex(ar, target) {
//   // // using filter
//   let val = ar.filter((item) => item === target);
//   console.log("hjhj", ar.indexOf(val[0]));
//   // // or using filter
//   let val = ar.find((item) => item === target);
//   console.log("hjhj", ar.indexOf(val));
//   // //   using foreach
//   let result = -1;
//   ar.forEach((element, ind) => {
//     if (element === target) {
//       return (result = ind);
//     }
//   });
//   // //   using for
//   //   for (let i = 0; i < ar.length; i++) {
//   //     if (ar[i] === target) {
//   //       return i;
//   //     }
//   //   }
//   return result;
// }
// numArray = [4, 8, 6, 5];
// console.log("findIndex", linearIndex(numArray, 6));
// console.log("findIndex", linearIndex(numArray, 9));

// // search - binary search ep-16 O(logn)
// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[midIndex]) {
//       return midIndex;
//     }
//     if (target < arr[midIndex]) {
//       rightIndex = midIndex - 1;
//     }
//     if (target > arr[midIndex]) {
//       leftIndex = midIndex + 1;
//     }
//   }
//   return -1;
// }
// numArray = [4, 6, 9, 11];
// console.log("findIndex", binarySearch(numArray, 6));
// console.log("findIndex", binarySearch(numArray, 9));

// // binary search recursive  ep-18 O(logn)

// // bubble sort ep-21

// function bubbleSort(arr) {
//   let swapped
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// arr= [-2, 8, 5, 7, 6]
// bubbleSort(arr)
// console.log('arr: ', arr)

// insertion sort ep-23 O(n^2) // read again

// quick sort ep-24(exp) and ep-25(code) O(n^2)

// function quickSort(arr) {
//     if (arr.length < 2) {
//       return arr;
//     }
//   let pivot = arr[arr.length - 1];
//   let leftArray = [];
//   let rightArray = [];
//   for (let i = 0; i < arr.length- 1; i++) {
//     if (arr[i] > pivot) {
//       rightArray.push(arr[i]);
//     } else {
//       leftArray.push(arr[i]);
//     }
//   }
//   return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
// }
// arr = [7, -2, 5, -6, 4, 8, 3];
// quickSort(arr);
// console.log('quickSort(arr);: ', quickSort(arr))

// Merge sort ep- 26(exp) ep-27(code) O(n)

// cartesian ep-30 O(n^2)

// function cartesianProduct(arr1, arr2) {
//   let arr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       arr.push([arr1[i], arr2[j]]);
//     }
//   }
//   return arr;
// // }
// arr1 = [1, 2];
// arr2 = [3, 4, 5];
// // const result = cartesianProduct(arr1, arr2);
// // console.log('result: ', result)
// // result.forEach((item) => {
// //   console.log("item", item);
// // });
// // or same prob with map solution
// console.log('arr1.map ', arr1.flatMap(item1=>(arr2.map(item2=>([item1,item2 ])))))

// staircase ep- 32  O(n)

// function staircase(n){
//     const noOfWays= [1,2]

//     return noOfWays
// }
// console.log(' staircase(n): ',  staircase(3));

// tower of hanoi ep-34 O(2^n)

// function tower(n, from, to, using) {
//   if (n === 1) {
//     console.log(`move disk 1 from ${from} to ${to} `);
//     return;
//   }
//   tower(n-1, from, using, to);
//   console.log(`move disk ${n} from ${from} to ${to} `);
//   tower(n-1, using, from, to);
// }
// console.log("tower", tower(2, "a", "b", "c"));
// console.log("tower", tower(3, "a", "b", "c"));
// console.log("tower", tower(4, "a", "b", "c"));

// algorithm techniques ep-35
