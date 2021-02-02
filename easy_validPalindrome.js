/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false


Constraints:

s consists only of printable ASCII characters.
*/
var isPalindrome = function(s) {
  if (s.length === 0) return true;
  let validChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let filteredS = s.toLowerCase().split('').filter(el => validChars.indexOf(el) > -1);
  let halfLengthIndex = Math.ceil((filteredS.length) * 0.5) - 1;
  for (let i = 0; i <= halfLengthIndex; i++) {
    if (filteredS[i] !== filteredS[filteredS.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(''));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));