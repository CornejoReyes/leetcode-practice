function isMatch(s: string, p: string): boolean {
  const x = s.length;
  const y = p.length;
  if (p === null || y === 0) {
    return s === null || x === 0;
  }
  const dp = new Array(x + 1);
  for (let i = 0; i <= x; i += 1) {
    dp[i] = new Array(y + 1);
  }
  dp[0][0] = true;
  for (let j = 2; j <= y; j += 1) {
    dp[0][j] = p[j - 1] === "*" && dp[0][j - 2];
  }
  for (let j = 1; j <= y; j += 1) {
    for (let i = 1; i <= x; i += 1) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      }
      if (p[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 2] ||
          ((s[i - 1] === p[j - 2] || p[j - 2] === ".") && dp[i - 1][j]);
      }
    }
  }

  return Boolean(dp[x][y]);
}
