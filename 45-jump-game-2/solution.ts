function jump(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const jumps: number[] = [];
  jumps[0] = 0;

  for (let i = 1; i < nums.length; i += 1) {
    jumps[i] = Infinity;
    for (let j = 0; j < i; j += 1) {
      if (i <= j + nums[j] && jumps[j] !== Infinity) {
        jumps[i] = Math.min(jumps[i], 1 + jumps[j]);
        break;
      }
    }
  }

  return jumps[nums.length - 1];
};

console.log(jump([2,3,1,1,4]), 2);
console.log(jump([2,3,0,1,4]), 2);
console.log(jump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]), 3);