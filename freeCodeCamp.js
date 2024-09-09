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

// function mutation(arr) {
//     const test = arr[1].toLowerCase();
//     const target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
// }

// mutation(["hello", "hey"]);
// mutation(["Mary", "Army"]);

// function chunkArrayInGroups(arr, size) {
//     const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
//   }

//   chunkArrayInGroups(["a", "b", "c", "d"], 2);

// var isPalindrome = function (x) {
//   let old = x;
//   let newValue = String(x).split("").reverse().join("");
//   if (old === parseInt(newValue)) {
//     return true;
//   }
//   return false;
// };
// console.log("isPalindrome: ", isPalindrome('abccba'));
