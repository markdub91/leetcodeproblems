/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.



Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"


Constraints:

1 <= s.length, t.length <= 105
s and t consist of English letters.


Follow up: Could you find an algorithm that runs in O(n) time?
*/

var minWindow = function(s, k) {
  // if (s.length < 1 || k.length > 105) return '';

  let validCheck = (subString) => {
    let subStringArray = subString.split('');
    for (let i = 0; i < k.length; i++) {
      let subStringArrayIndexOf = subStringArray.indexOf(k[i])
      if (subStringArrayIndexOf === -1) {
        return false;
      }
      subStringArray.splice(subStringArrayIndexOf, 1);
    }
    return true;
  }

  let minWindow;
  let left = 0;
  let right = 1;

  while (right <= s.length + 1) {
    let section = s.slice(left, right);
    if (right <= left) {
      right++;
    } else if (validCheck(section)) {
      if (minWindow === undefined || section.length < minWindow.length) {
        minWindow = section;
      }
      left++
    } else {
      right++;
    }
  }
  if (minWindow === undefined) return '';
  return minWindow;
};

console.log(minWindow('', ''));
console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
