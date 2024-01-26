function search(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;
  let pivot = Math.floor((right - left) / 2) + left;

  while (left < nums.length && right >= 0) {
    if (nums[pivot] === target) {
      return pivot;
    }
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    if (left === pivot && pivot === right) {
      return -1;
    }
    if (
      (nums[pivot] > nums[left] && nums[left] < target && nums[pivot] > target) ||
      (nums[pivot] < nums[left] && (target > nums[right] || target < nums[pivot]))
    ) {
      right = pivot - 1;
      pivot = Math.floor((right - left) / 2) + left;
    } else {
      left = pivot + 1;
      pivot = Math.floor((right - left) / 2) + left;
    }
  }

  return -1;
};

console.log(search([6,7,0,1,2,4,5], 0), 2);
console.log(search([0,1,2,4,5,6,7], 5), 4);
console.log(search([7,0,1,2,4,5,6], 0), 1);
console.log(search([4,5,6,7,0,1,2], 0), 4);
console.log(search([5,6,7,0,1,2,4], 3), -1);
console.log(search([6,7,0,1,2,4,5], 7), 1);
console.log(search([1], 1), 0);
console.log(search([5,1,3], 0), -1);