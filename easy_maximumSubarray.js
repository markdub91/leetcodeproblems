/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-100000]
Output: -100000
*/
var maxSubArray = function(nums) {
  // // let maxSub = [];
  // let maxSubArraySum;
  // // two for loops to check every
  //   // array reducer function to check sum of array slice, if max, set max
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j <= nums.length; j++) {
  //     let section = nums.slice(i, j);
  //     let sum = section.reduce((total, val) => (total + val), 0);
  //     if (sum > maxSubArraySum || maxSubArraySum === undefined) {
  //       // maxSub = section;
  //       maxSubArraySum = sum;
  //     }
  //   }
  // }

  // // console.log(maxSub);
  // return maxSubArraySum;
  let sum = 0;
  let maxSum;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else if (sum >= 0) {
      sum += nums [i];
    }
    if (sum > maxSum || maxSum === undefined) {
      maxSum = sum;
    }
  }
  return maxSum;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6 from the subArray [4,-1,2,1]
console.log(maxSubArray([-1,0,1,2,3,4,-1,4,0])); // 0