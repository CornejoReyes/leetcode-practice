/*
Asked ChatGPT for js assessment. It gave me this list of questions.


JavaScript Assessment
Question 1:
Write a function that reverses a string without using any built-in functions or methods.

Question 2:
Given an array of integers, write a function to move all zeros to the end while maintaining the order of the other elements.

Question 3:
Write a function that takes a string and returns the number of vowels in the string.

Question 4:
Create an object constructor for a "Person" that has properties "name" and "age". Include a method that introduces the person (e.g., "My name is John and I am 30 years old").

Question 5:
Write a recursive function to calculate the factorial of a given non-negative integer.

Question 6:
Explain the difference between "undefined" and "null" in JavaScript.

Question 7:
Write a function that takes a sorted array of numbers and a target value, and finds the index of the target value within the array. If the target is not found, return -1.
*/

/**
 * Question 1:
 * Write a function that reverses a string without using any built-in functions or methods.
 *
 * @param {string} str string to reverse
 * @returns Reversed string
 */
function reverse(str) {
  if (typeof str !== "string") {
    throw new Error("Param is not a string");
  }
  if (str === "") {
    return str;
  }
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}

/**
 * Question 2
 * Given an array of integers, write a function to move all zeros to the end while maintaining the order of the other elements.
 *
 * @param {number[]} nums
 * @returns new array with zeros to the end
 */
function moveZerosToEnd(nums) {
  if (!Array.isArray(nums)) {
    throw new Error("Param is not an array");
  }
  const zerosToEnd = nums.filter((num) => num !== 0);
  const d = nums.length - zerosToEnd.length;
  if (d > 0) {
    zerosToEnd.push(...new Array(d).fill(0));
  }
  return zerosToEnd;
}

/**
 * Question 3:
 *
 * Write a function that takes a string and returns the number of vowels in the string.
 *
 * @param {string} str A string count vowels
 * @returns {number} Amount of vowels in the given string.
 */
function vowels(str) {
  if (typeof str !== "string") {
    throw new Error("Param is not a string");
  }
  let vowelsCount = 0;
  for (const char of str) {
    const code = char.charCodeAt(0);
    if (
      code === 97 ||
      code === 101 ||
      code === 105 ||
      code === 111 ||
      code === 117
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

/**
 * Question 4:
 *
 * Create an object constructor for a "Person" that has properties "name" and "age". Include a method that introduces the person (e.g., "My name is John and I am 30 years old").
 *
 * @module Person
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * Introduces the person to others
   * @returns Person introduction
   */
  introduce = () => {
    return `My name is ${this.name} and I am ${this.age} years old`;
  };
}

/**
 * Question 5:
 *
 * Write a recursive function to calculate the factorial of a given non-negative integer.
 *
 * @param {number} num Number to get factorial of
 * @param {Record<number, number>} [memo]
 * @returns
 */
function factorial(num, memo) {
  if (!memo) {
    memo = {
      0: 1,
      1: 1,
    };
  }
  if (memo[num]) {
    return memo[num];
  }
  const result = num * factorial(num - 1, memo);
  memo[num] = result;
  return result;
}

/**
 * Question 6:
 *
 * Explain the difference between "undefined" and "null" in JavaScript.
 */
/**
 * The difference between undefined and null is that null is actually a value while
 * undefined is not. Both of them are falsy, but undefined means a variable is not assigned
 * and null is a value that represents nothing but is assigned to a variable.
 */

/**
 * Question 7:
 *
 * Write a function that takes a sorted array of numbers and a target value, and finds the index of the target value within the array. If the target is not found, return -1.
 *
 * @param {number[]} nums Ordered numbers
 * @param {number} target number to search index of
 * @returns index of number or -1 if not found
 */
function find(nums, target) {
  if (!Array.isArray(nums)) {
    throw new Error("First param is not an array");
  }
  if (typeof target !== "number") {
    throw new Error("Second param is not a number");
  }
  if (nums.length === 0) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  let pivot = Math.floor(nums.length / 2);
  while (left <= right) {
    if (nums[pivot] === target) {
      return pivot;
    }
    if (nums[pivot] > target) {
      right = pivot - 1;
      pivot = Math.floor((right - left) / 2) + left;
    }
    if (nums[pivot] < target) {
      left = pivot + 1;
      pivot = Math.floor((right - left) / 2) + left;
    }
  }
  return -1;
}
