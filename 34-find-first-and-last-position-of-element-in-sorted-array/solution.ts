function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor(right / 2);

  while (left <= right) {
    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((right - left) / 2) + left;
  }

  const start = left;

  left = 0;
  right = nums.length - 1;
  middle = Math.floor(right / 2);
  while (left <= right) {
    if (target >= nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((right - left) / 2) + left;
  }

  const end = right;

  if (start <= end) {
    return [start, end];
  }

  return [-1, -1];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
console.log(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
console.log(searchRange([1], 1), [0, 0]);
console.log(searchRange([3, 3, 3], 3), [0, 2]);
