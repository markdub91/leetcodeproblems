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
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  let result = [];
  let sortedNums = nums.sort((a, b) => (a - b));
  // iterate through nums, for each num[i], do opposing two pointer method starting after nums[i] to nums[nums.length - 1], checking if each combination adds up to 0;
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0) break;
    if (sortedNums[i] === sortedNums[i - 1]) continue;
    let currentVal = sortedNums[i];
    let left = i + 1;
    let right = sortedNums.length - 1;
    while (right > left) {
      let sum = currentVal + sortedNums[left] + sortedNums[right];
      if (sum === 0 && sortedNums[right] !== sortedNums[right + 1]) {
        result.push([currentVal, sortedNums[left], sortedNums[right]]);
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}

// console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2], [-1,0,1]]
console.log(threeSum([-2,0,0,2,2])); // [[-2,0,2]]