function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  nums.sort(sortNumbers);
  const solution: number[][] = [];
  let j: number, k: number;
  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    j = i + 1;
    k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        solution.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) {
          j += 1;
        }
        while (nums[k] === nums[k - 1]) {
          k -= 1;
        }
        j += 1;
        k -= 1;
        continue;
      }
      if (sum > 0) {
        k -= 1;
        continue;
      }
      j += 1;
    }
  }

  return solution;
}

function sortNumbers(a: number, b: number) {
  return a - b;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
