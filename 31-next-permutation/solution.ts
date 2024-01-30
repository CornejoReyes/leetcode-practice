/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length < 1) {
    return;
  }

  let i = 0;
  let swap: null | number = null;
  let target: null | number = null;
  while (i < nums.length) {
    // get last swappable index
    if (nums[i] < nums[i + 1]) {
      swap = i;
    }
    // get last greatest index that swaps with 'swap'
    if (swap !== null && i > swap && nums[swap] < nums[i]) {
      target = i;
    }
    i += 1;
  }
  // no swap? then is last permutation, sort the array in place.
  if (swap === null || target === null) {
    nums.sort((a, b) => a - b);
    return;
  }
  // swap 'swap' and 'target'
  const aux = nums[swap];
  nums[swap] = nums[target];
  nums[target] = aux;

  // reverse nums[swap + 1] to nums[nums.length - 1]
  let start = swap + 1, end = nums.length - 1;
  while (start < end) {
    const aux = nums[start];
    nums[start] = nums[end];
    nums[end] = aux;
    start++;
    end--;
  }
};

const test_1 = [100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
nextPermutation(test_1);
console.log("TEST 1 => ", test_1);