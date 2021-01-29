/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  sArray = s.split('');
  tArray = t.split('');
  for (let i = 0; i < sArray.length; i++) {
    let char = sArray[i];
    let tIndex = tArray.indexOf(char);
    if (tIndex > -1) {
      tArray.splice(tIndex, 1);
    } else {
      return false;
    }
  }
  if (tArray.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('',''));