function generateParenthesis(n: number): string[] {
  function backtrack(
    currentPermutation: string,
    solution: string[],
    leftParentheses: number,
    rightParentheses: number,
    n: number
  ) {
    if (currentPermutation.length === n * 2) {
      solution.push(currentPermutation);
      return;
    }
    if (leftParentheses < n) {
      backtrack(
        currentPermutation + "(",
        solution,
        leftParentheses + 1,
        rightParentheses,
        n
      );
    }
    if (rightParentheses < leftParentheses) {
      backtrack(
        currentPermutation + ")",
        solution,
        leftParentheses,
        rightParentheses + 1,
        n
      );
    }
  }
  const solution = [];
  backtrack("", solution, 0, 0, n);
  return solution;
}

console.log(generateParenthesis(4));
