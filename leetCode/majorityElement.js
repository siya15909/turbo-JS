// Problem Description => https://leetcode.com/problems/majority-element/description
var majorityElement = function (nums) {
  let n = null;
  let i = 0;
  for (let num of nums) {
    if (i === 0) {
      n = num;
      i = 1;
    } else if (n === num) i++;
    else i--;
  }
  return n;
};
