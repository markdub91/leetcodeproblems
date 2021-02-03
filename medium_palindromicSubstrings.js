/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".


Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


Note:

The input string length won't exceed 1000.
*/
var countSubstrings = function(s) {
  if (s.length <= 1) return s.length;

  let palindromeCheck = (string) => {
    let halfwayIndex = Math.ceil(string.length / 2) - 1;
    for (let j = 0; j <= halfwayIndex; j++) {
      if (string[j] !== string[string.length - 1 - j]) {
        return false;
      }
    }
    return true;
  }
  let count = 0;
  // let substrings = [];

  for (let i = 0; i < s.length; i++) {
    let relIndex = 0;
    let isPalindrome = true;
    while (isPalindrome === true && (i - relIndex) >= 0 && (i + relIndex + 1) <= s.length) {
      section = s.slice(i - relIndex, i + relIndex + 1);
      if (palindromeCheck(section) && section !== '') {
        count++;
        // substrings.push(section);
        relIndex++;
      } else {
        isPalindrome = false;
      }
    }

    relIndex = 0;
    isPalindrome = true;
    while (isPalindrome === true && (i - relIndex) >= 0 && (i + relIndex + 2) <= s.length) {
      section = s.slice(i - relIndex, i + relIndex + 2);
      if (palindromeCheck(section) && section !== '') {
        count++;
        // substrings.push(section);
        relIndex++;
      } else {
        isPalindrome = false;
      }
    }
  }
  // console.log(substrings);
  return count;
};

// console.log(countSubstrings('aba')); // 4
// console.log(countSubstrings('ababa')); // 8
console.log(countSubstrings('aa')); // 3
console.log(countSubstrings('aaa')); // 6

