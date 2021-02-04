/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
var maxProduct = function(nums) {
  // let maxProduct;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j <= nums.length; j++) {
  //     let section = nums.slice(i, j);
  //     let product = section.reduce((total, val) => (total * val), 1)
  //     if (product > maxProduct || maxProduct === undefined) maxProduct = product
  //   }
  // }
  // if (maxProduct === -0) maxProduct = 0
  // return maxProduct;
  let forwardIndex = 1;
  let backwardIndex = 1;
  let res = nums[0];
  for (let i = 0; i < nums.length; i++) {
      const j = nums.length - 1 - i;
      if (forwardIndex === 0) forwardIndex = nums[i];
      else forwardIndex *= nums[i];
      if (backwardIndex === 0) backwardIndex = nums[j];
      else backwardIndex *= nums[j];
      res = Math.max(res, forwardIndex, backwardIndex);
  }
  return res;
};

// console.log(maxProduct([2,3,-2,4])); // 6 from [2, 3]
// console.log(maxProduct([-2,0,-1])); // 0 from [-2, 0]
// console.log(maxProduct([3,-1,4])); // 4 from [4]
console.log(maxProduct([2,-5,-2,-4,3])) // 24 from [-2, -4, 3]