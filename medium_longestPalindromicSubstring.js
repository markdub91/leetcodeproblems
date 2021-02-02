/*
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/
var longestPalindrome = function(s) {
  if (s.length === 0 || s.length === 1) return s;

  let longestPalindromeString = '';

  let palindromeCheck = (string) => {
    let halfwayIndex = Math.ceil(string.length / 2) - 1;
    for (let j = 0; j <= halfwayIndex; j++) {
      if (string[j] !== string[string.length - 1 - j]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    let relIndex = Math.floor(longestPalindromeString.length / 2);
    let isPalindrome = true;

    while (isPalindrome === true && relIndex <= Math.floor(s.length / 2)) {
      let sectionOdd = s.slice(i - relIndex, i + 1 + relIndex);
      // console.log('section: ' + section);
      // console.log('relIndex: ' + relIndex);
      if (palindromeCheck(sectionOdd)) {
        if (sectionOdd.length > longestPalindromeString.length) {
          longestPalindromeString = sectionOdd;
        }
        relIndex++;
      } else {
        isPalindrome = false;
      }
    }

    relIndex = Math.floor(longestPalindromeString.length / 2);
    isPalindrome = true;

    while (isPalindrome === true && relIndex <= Math.floor(s.length / 2)) {
      let sectionEven = s.slice(i - relIndex, i + 2 + relIndex);
      // console.log('section: ' + section);
      // console.log('relIndex: ' + relIndex);
      if (palindromeCheck(sectionEven)) {
        if (sectionEven.length > longestPalindromeString.length) {
          longestPalindromeString = sectionEven;
        }
        relIndex++;
      } else {
        isPalindrome = false;
      }
    }
  }

  return longestPalindromeString
};

// console.log(longestPalindrome(''));
console.log(longestPalindrome('bb'));
// console.log(longestPalindrome('babad'));