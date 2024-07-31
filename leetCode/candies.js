var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = function (array) {
    let gtr = array[0];
    for (let ele of array) {
      if (gtr < ele) {
        gtr = ele;
      }
    }
    return gtr;
  };
  const maxValue = max(candies);
  for (i in candies) {
    candies[i] += extraCandies;
    if (candies[i] >= maxValue) {
      result.push(true);
    } else {
      result.push(false);
    }
    candies[i] -= extraCandies;
  }
  return result;
};
candies = [2, 8, 7];
extra = 1;
kidsWithCandies(candies, extra);
