/*
Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
  let longestSubstringLength = 0;
  for (let i = 0; i < s.length; i++) {
    let currentSubstringLength = 1;
    if (currentSubstringLength > longestSubstringLength) {
      longestSubstringLength = currentSubstringLength;
    }
    let currentSubstring = '' + s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (currentSubstring.indexOf(s[j]) === -1) {
        currentSubstring += s[j];
        currentSubstringLength++;
        if (currentSubstringLength > longestSubstringLength) {
          longestSubstringLength = currentSubstringLength;
        }
      } else {
        break;
      }
    }
  }
  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring('abcabc'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
