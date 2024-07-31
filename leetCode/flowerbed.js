const canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let i = 0;
  while (i <= flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined) &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined)
    ) {
      count++;
      i++;
    }
    i++;
  }
  return count >= n;
};
