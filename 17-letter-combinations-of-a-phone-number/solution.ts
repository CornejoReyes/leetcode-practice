function letterCombinations(
  digits: string,
  permutation: string = "",
  map?: Record<number, string[]>,
  solution?: string[]
): string[] {
  if (!map) {
    map = {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
    };
  }
  if (!solution) {
    solution = [];
  }
  if (digits.length === 0 && permutation.length > 0) {
    solution.push(permutation);
  } else if (digits[0]) {
    for (const char of map[+digits[0]]) {
      letterCombinations(digits.slice(1), permutation + char, map, solution);
    }
  }
  return solution;
}

// TEST CASES
console.log(letterCombinations(""));
console.log(letterCombinations("8"));
console.log(letterCombinations("23"));
console.log(letterCombinations("234"));
console.log(letterCombinations("27395"));
