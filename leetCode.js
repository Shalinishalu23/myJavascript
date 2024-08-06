// // #Leetcode
// // 1. two sum
// // https://leetcode.com/problems/two-sum/solution/
// var atestArray= [2,7,11,15]
// var atarget = 26

// const atwoSum = (nums, target)=>{
//     const map = new Map() // key = target - currentValue, value - current index

//     for (let i = 0; i < nums.length; i++) {
//       const val = nums[i]
//       console.log('val: ', val)
//       const difference = target - val
//       console.log('difference: ', difference)

//       if (map.has(val)) {
//          return [map.get(val), i]
//       }

//       map.set(difference, i)
//     }
// }

// let result = atwoSum(atestArray,atarget);
// console.log('result', result)

// const anum = [2, 3, 4, 5];
// const atag = 9;

// const result1 = atwo(anum, atag);
// console.log('result1: ', result1);

// function atwo(num, tar) {
//     const map = new Map();
//     let result = null; // Initialize result variable

//     num.forEach((val, i) => {
//         const diff = tar - val;
//         if (map.has(diff)) {
//             result = [map.get(diff), i];
//         }
//         map.set(val, i);
//     });

//     return result; // Return result after iteration
// }

// leet code 2

// var addTwoNumbers = function(l1, l2) {
//     console.log('l1, l2: ', l1, l2)
//     var result= null

//     return result

// };
// var l1 = [2,4,3]
// var l2 = [5,6,4]
// console.log('addTwoNumbers: ', addTwoNumbers(l1, l2));
