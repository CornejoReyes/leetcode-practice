function removeDuplicateLetters(s: string): string {
  if (s.length === 0) {
    return s;
  }
  const result: string[] = [];
  for (let i = 0; i < s.length; i += 1) {
    if (result.indexOf(s[i]) > -1) {
      continue;
    }
    while (
      result.length > 0 &&
      s[i] < result[result.length - 1] &&
      s.indexOf(result[result.length - 1], i) > i
    ) {
      result.pop();
    }
    result.push(s[i]);
  }
  return result.join("");
}
