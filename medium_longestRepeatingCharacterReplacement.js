/*
Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.


Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

var characterReplacement = function(s, k) {
  if (s.length === 0 || s.length === 1 || k >= (s.length - 1)) {
    return s.length;
  }

  let slidingWindow = (window) => {
    let windowObj = {};
    let windowArray = window.split('');
    windowArray.forEach(el => {
      if (windowObj[el]) {
        windowObj[el]++;
      } else {
        windowObj[el] = 1;
      }
    })
    let windowVals = Object.values(windowObj).sort((a, b) => (a - b));
    if (windowVals.length === 1 || (window.length - windowVals[windowVals.length - 1] <= k)) {
      return true;
    } else {
      return false;
    }
  }
  // define window size
  for (let i = s.length; i >= 0; i--) {
    // define window start index
    for (let j = 0; j < s.length; j++) {
      // check if start index plus window size will fit within string, else continue
      if ((j + i) <= s.length) {
        let testSlice = s.slice(j, j + i);
        if (slidingWindow(testSlice)) {
          return i;
        }
      } else {
        continue;
      }
    }
  }

};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
console.log(characterReplacement('ABBB', 2));
