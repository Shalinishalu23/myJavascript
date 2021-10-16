// // #Leetcode
// // 1. two sum
// // https://leetcode.com/problems/two-sum/solution/
// var atestArray= [2,7,11,15]
// var atarget = 9

// const atwoSum = (nums, target)=>{
//     const map = new Map() // key = target - currentValue, value - current index

//     for (let i = 0; i < nums.length; i++) {
//       const val = nums[i]
//       const difference = target - val

//       if (map.has(val)) {
//          return [map.get(val), i]
//       }

//       map.set(difference, i)
//     }
// }

// let result = atwoSum(atestArray,atarget);
// console.log('result', result)


