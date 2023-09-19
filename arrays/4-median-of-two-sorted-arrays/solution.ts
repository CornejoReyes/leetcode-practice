function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sortedArray = mergeTwoSortedArrays(nums1, nums2);
  return medianOfSortedArray(sortedArray);
}

function medianOfSortedArray(arr: number[]): number {
  const len = arr.length;
  const medianIndex = Math.ceil(len / 2) - 1;
  if (len % 2 === 0) {
    const n1 = arr[medianIndex];
    const n2 = arr[medianIndex + 1];
    return (n1 + n2) / 2;
  }
  return arr[medianIndex];
}

function mergeTwoSortedArrays(arr1: number[], arr2: number[]) {
  let p1 = 0;
  let p2 = 0;
  let mergedArray: number[] = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) {
      mergedArray.push(arr2[p2]);
      p2 += 1;
      continue;
    }
    if (arr1[p1] < arr2[p2]) {
      mergedArray.push(arr1[p1]);
      p1 += 1;
      continue;
    }
    mergedArray.push(arr1[p1]);
    mergedArray.push(arr2[p2]);
    p1 += 1;
    p2 += 1;
  }
  if (p1 < arr1.length) {
    mergedArray = mergedArray.concat(arr1.slice(p1));
  }
  if (p2 < arr2.length) {
    mergedArray = mergedArray.concat(arr2.slice(p2));
  }
  return mergedArray;
}
