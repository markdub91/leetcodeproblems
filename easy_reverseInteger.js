/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0


Constraints:

-231 <= x <= 231 - 1
*/
var reverse = function(x) {
  if (x === 0) {
    return 0;
  }

  //stringify x
  let stringDigits = JSON.stringify(x);
  //check if negative or positive, cut off hyphen if negative
  let isNegative;
  if (x < 0) {
    isNegative = true;
    stringDigits = stringDigits.slice(1, stringDigits.length);
  }
  //reverse digits
  let reversedString = '';
  for (let i = stringDigits.length - 1; i >= 0; i--) {
    if (reversedString.length === 0 && stringDigits[i] === '0') {
      continue;
    } else {
      reversedString += stringDigits[i];
    }
  }

  reversedNum = JSON.parse(reversedString);
  //add hyphen back if needed
  if (isNegative) {
    reversedNum = -1 * reversedNum;
  }
  //check if within constraints, otherwise return 0
  if (reversedNum < ((-2)**31) || reversedNum > (2**31 - 1)) {
    return 0;
  }
  return reversedNum;
};

console.log(reverse(321));
console.log(reverse(-456));
console.log(reverse(-120));