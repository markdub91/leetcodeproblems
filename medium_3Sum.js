/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
Accepted
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length === 0 || nums === [0]) {
    return [];
  }
  let results = [];

  nums.forEach((el1, index1) => {
    let firstNum = el1;
    let secondNum, thirdNum;
    nums.forEach((el2, index2) => {
      if (index1 === index2) {
        secondNum = undefined;
      } else {
        secondNum = el2
        nums.forEach((el3, index3) => {
          if (index1 === index3 || index2 === index3) {
            thirdNum = undefined;
          } else {
            thirdNum = el3;
          }
          if ((firstNum + secondNum + thirdNum) === 0) {
            let unSortedTriplet = [firstNum, secondNum, thirdNum];
            let sortedTriplet = unSortedTriplet.sort((a, b) => (a - b));
            let alreadyExists = false;
            results.forEach(el => {
              if (JSON.stringify(el) === JSON.stringify(sortedTriplet)) {
                alreadyExists = true;
              }
            })
            if (!alreadyExists) {
              results.push(sortedTriplet);
            }
          }
        })
      }
    })
  })

  return results;
};

console.log(threeSum([-1,0,1,2,-1,-4]));