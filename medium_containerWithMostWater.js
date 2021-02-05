/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2


Constraints:

n == height.length
2 <= n <= 3 * 104
0 <= height[i] <= 3 * 104
*/
var maxArea = function(height) {
  // find largest area ((end - start) * Math.min(start, end))
  if (height.length < 2) return 0;
  if (height.length === 2) return Math.min(...height);
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let heightLeft = height[left];
    let heightRight = height[right];
    maxWater = Math.max(maxWater, (right - left) * Math.min(heightLeft, heightRight));
    if (heightRight > heightLeft) left++;
    else if (heightLeft > heightRight) right--;
    else {
      left++;
      right--;
    }
  }
  return maxWater;
};

// console.log(maxArea([4,3,2,1,4])) // 16
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
// console.log(maxArea([1,1])); // 1
console.log(maxArea([2,3,4,5,18,17,6])); // 17