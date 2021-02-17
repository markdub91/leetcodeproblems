/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]


Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/
var rotate = function(matrix) {
  // move groups of four around the edge, moving one level into the matrix at a time
  let n = matrix.length;
  let maxI = Math.floor( n / 2);
  let maxJ = Math.ceil(n / 2);
  for (let i = 0; i < maxI; i++) {
    for (let j = (0 + i); j < (maxJ - i); j++) {
      let currentTL = matrix[0 + i][0 + j];
      let currentTR = matrix[0 + j][n - 1 - i];
      let currentBR = matrix[n - 1 - i][n - 1 - j];
      let currentBL = matrix[n - 1 - j][0 + i];
      matrix[0 + i][0 + j] = currentBL;
      matrix[0 + j][n - 1 - i] = currentTL;
      matrix[n - 1 - i][n - 1 - j] = currentTR;
      matrix[n - 1 - j][0 + i] = currentBR;
    }
  }
  return matrix;
};

// console.log(rotate([[1,2],
//                     [3,4]]))
//                 // [[3,1],
//                 //  [4,2]] expected
// console.log(rotate([[1]])); // [[1]]
// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]