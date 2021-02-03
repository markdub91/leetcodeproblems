/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/
var twoSum = function(nums, target) {
  // create new sorted array of tuples with index as tuple index [1]
  let sortedNums = nums.map((el, idx) => ([el, idx])).sort((a, b) => (a[0] - b[0]));
  let left = 0;
  let right = sortedNums.length - 1;
  while (sortedNums[left][0] + sortedNums[right][0] !== target) {
    if (sortedNums[left][0] + sortedNums[right][0] > target) {
      right--;
    } else if (sortedNums[left][0] + sortedNums[right][0] < target) {
      left++;
    }
  }
  return [sortedNums[left][1], sortedNums[right][1]];
}

console.log(twoSum([12,17,11,2,15,7], 9));