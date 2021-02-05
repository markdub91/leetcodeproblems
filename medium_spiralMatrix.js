/*
Given an m x n matrix, return all elements of the matrix in spiral order.



Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/
var spiralOrder = function(matrix) {
  let result = [];

  while (matrix.length > 0 && matrix[0].length > 0) {
    // top (left to right)
    let top = matrix.splice(0, 1)[0];
    top.forEach(el => result.push(el));
    if (matrix.length === 0 || matrix[0].length === 0) break;
    // right (top to bottom)
    for (let i = 0; i < matrix.length; i++) {
      let right = matrix[i].splice(matrix[i].length - 1, 1)[0];
      result.push(right);
    }
    if (matrix.length === 0 || matrix[0].length === 0) break;
    // bottom (right to left)
    let bottom = matrix.splice(matrix.length - 1, 1)[0];
    // console.log(matrix);
    for (let j = bottom.length - 1; j >= 0; j--) {
      result.push(bottom[j]);
    }
    if (matrix.length === 0 || matrix[0].length === 0) break;
    // left (bottom to top)
    for (let k = matrix.length - 1; k >= 0; k--) {
      let left = matrix[k].splice(0, 1)[0];
      result.push(left);
    }
  }

  return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]