/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/
var productExceptSelf = function(nums) {
  let leftProduct = new Array(nums.length);
  leftProduct[0] = 1;
  let rightProduct = new Array(nums.length);
  rightProduct[nums.length - 1] = 1;
  let j = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftProduct[i] === 1;
      rightProduct[j - i] === 1;
    } else {
      leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
      rightProduct[j - i] = rightProduct[j - i + 1] * nums[j - i + 1];
    }
  }
  // console.log(leftProduct);
  // console.log(rightProduct);
  return nums.map((el, idx) => (leftProduct[idx] * rightProduct[idx]));

  // return nums.map((el, idx) => (nums.reduce((accumulator, val, index) => {
  //   if (idx !== index) {
  //     return accumulator * val
  //   } else {
  //     return accumulator * 1
  //   }
  // }, 1)))
};

console.log(productExceptSelf([1,2,3,4])); // [24, 12, 8, 6]