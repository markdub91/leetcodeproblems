/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]


Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/
var groupAnagrams = function(strs) {
  const isAnagram = function(a, b) {
    if (a.length !== b.length) {
      return false;
    } else {
      return (JSON.stringify(a.split('').sort()) === JSON.stringify(b.split('').sort()));
    }
  }

  let result = [];
  // create deep copy of strs
  let strsCopy = JSON.parse(JSON.stringify(strs));
  // for each el, create new array and add el
  while (strsCopy.length > 0) {
    let newArray = [strsCopy.splice(0, 1)[0]];
    for (let j = 0; j < strsCopy.length; j++) {
      if (isAnagram(newArray[0], strsCopy[j])) {
        let anagramFound = strsCopy.splice(j, 1)[0];
        newArray.push(anagramFound);
        j--;
      }
    }
    result.push(newArray);
  }

  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([""]));