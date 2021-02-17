/*
Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false


Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 200
1 <= word.length <= 103
board and word consists only of lowercase and uppercase English letters.
*/
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (horzVertChecker(board, word, i, j, {})) return true;
    }
  }
  return false;
};

let horzVertChecker = function(board, word, y, x, history) {
  if (y >= board.length || x >= board[0].length) return false;
  // console.log(board, y, x);
  if (word.length === 0) {
    return true;
  } else if (board[y][x] === word[0]) {
    word = word.slice(1);
    if (word.length === 0) return true;
    history[y + " " + x] = true;
    // above
      // if above exists (ie if (y - 1) >= 0 and board.length >= 1)
    if ((y > 0 && history[(y - 1) + " " + x] === undefined && horzVertChecker(board, word, y - 1, x, history)) ||
        (y < board.length && history[(y + 1) + " " + x] === undefined && horzVertChecker(board, word, y + 1, x, history)) ||
        (x > 0 && history[y + " " + (x - 1)] === undefined && horzVertChecker(board, word, y, x - 1, history)) ||
        (x < board[0].length && history[y + " " + (x + 1)] === undefined && horzVertChecker(board, word, y, x + 1, history))) {
          return true;
    } else {
      delete history[y + " " + x];
    }
  } else {
    return false;
  }
}
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")) // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")) // false
console.log(exist([["C","A","A"],
                   ["A","A","A"],
                   ["B","C","D"]], "AAB")) // true