/*
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.



Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1


Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
*/
var search = function(nums, target) {
  // return nums.indexOf(target);
  let idxStart = 0;
  let idxEnd = nums.length - 1;
  // let count = 0;

  while (nums[idxStart] !== target) {
    let first = nums[idxStart];
    let last = nums[idxEnd];
    let idxMid = Math.floor((idxEnd + idxStart) / 2);
    let mid = nums[idxMid];

    if (nums[idxEnd] === target) return idxEnd;

    if (mid > first) {
      // pivot point in second half
      if (target >= first && target < mid) {
        // first half
        idxEnd = idxMid - 1;
      } else {
        // second half
        idxStart = idxMid;
      }
    } else {
      // pivot point in first half
      if (target < first && target >= mid) {
        // second half
        idxStart = idxMid;
      } else {
        // first half
        idxEnd = idxMid;
      }
    }
    if (idxStart >= idxEnd) return -1;
    // console.log('idxStart: ' + idxStart + ' idxEnd: ' + idxEnd + ' idxMid: ' + idxMid);
    // console.log(nums.slice(idxStart, idxEnd + 1));
    // if (count > 5) break;
    // count++;
  }

  return idxStart;
};

// console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1,3], 3)); // 1