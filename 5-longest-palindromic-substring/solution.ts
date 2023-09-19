function longestPalindrome(s: string): string {
  if (s.length === 1) {
    return s;
  }
  const palindromeMatrix = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    palindromeMatrix[i] = new Array(s.length);
  }
  let currentSubstringLength = 1;
  let currentLongestPalindrome = "";
  while (currentSubstringLength <= s.length) {
    for (let i = 0; i < s.length; i++) {
      const j = i + currentSubstringLength - 1;
      if (j > s.length - 1) {
        continue;
      }
      let edgesAreTheSame = s[i] === s[j];
      let innerSubstrIsPalindrome = 1;
      if (i + 1 <= s.length - 1 && j - 1 > 0 && currentSubstringLength > 2) {
        innerSubstrIsPalindrome = palindromeMatrix[i + 1][j - 1];
      }
      palindromeMatrix[i][j] =
        edgesAreTheSame && innerSubstrIsPalindrome ? 1 : 0;
      if (
        palindromeMatrix[i][j] &&
        j + 1 - i > currentLongestPalindrome.length
      ) {
        currentLongestPalindrome = s.substring(i, j + 1);
      }
    }
    currentSubstringLength += 1;
  }
  return currentLongestPalindrome;
}
