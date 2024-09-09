// // #Leetcode
// // 1. two sum
// // https://leetcode.com/problems/two-sum/solution/
// var atestArray= [2,7,11,15]
// var atarget = 26

// var twoSum = function (arr, target) {
//     const map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//       let value = arr[i];
//       let diff = target - value;
//       console.log("diff: ", diff);
//       if (map.has(value)) {
//         return [map.get(value), i];
//       }
//       map.set(diff, i);
//     }
//   };

//   (nums = [2, 7, 9, 11, 15]), (target = 18);
//   console.log("twoSum", twoSum(nums, target));

// 9 isPalindrome

// var isPalindrome = function (x) {
//   let old = x;
//   let newValue = String(x).split("").reverse().join("");
//   if (old === parseInt(newValue)) {
//     return true;
//   }
//   return false;
// };
// console.log("isPalindrome: ", isPalindrome('abccba'));

// 14. Longest Common Prefix
// var longestCommonPrefix = function(str) {
//     console.log('str.length: ', str.length)
//     if(!str.length) return ''
//     let longestCommonPrefix = ''
//     for(let i=0; i< str[0].length; i++) {
//         console.log('i: ', i)
//         let char = str[0][i]
//         if(!char) return ''
//         if(str.every(str => str[i] === char)) {
//             longestCommonPrefix+=char
//         } else break
//     }
//     return longestCommonPrefix
// };
// str = ["flower", "flow", "flight"];
// console.log("longestCommonPrefix: ", longestCommonPrefix(str));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  const list1 = new ListNode();
  const list2 = new ListNode();
  list2.forEach((element) => {
    list1.push(element);
  });
  return list1.sort(function (a, b) {
    return a - b;
  });
};

list1 = [1, 2, 3];
list2 = [3, 4, 2];
console.log("mergeTwoLists: ", mergeTwoLists(list1, list2));
