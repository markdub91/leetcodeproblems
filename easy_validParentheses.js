/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  let sArray = s.split('');
  let oldLength = 0;
  while (sArray.length > 0) {
    oldLength = sArray.length;
    for (let i = 0; i < sArray.length; i++) {
      if ((sArray[i] === '(' && sArray[i + 1] === ')') || (sArray[i] === '[' && sArray[i + 1] === ']') || (sArray[i] === '{' && sArray[i + 1] === '}')) {
        sArray.splice(i, 2);
      }
    }
    let newLength = sArray.length;
    if (oldLength === newLength && newLength !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('([)]'));