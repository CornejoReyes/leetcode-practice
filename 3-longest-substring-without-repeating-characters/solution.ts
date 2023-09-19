function lengthOfLongestSubstring(s: string): number {
  let len = 0;
  let left = 0;
  let right = left;
  let occurrences = {};
  let substring = "";

  while (left < s.length) {
    let char = s[right];

    if (char && !occurrences[char]) {
      occurrences[char] = true;
      substring += char;
      right += 1;
    } else {
      if (substring.length > len) {
        len = substring.length;
      }
      substring = "";
      occurrences = {};
      left += 1;
      right = left;
    }
  }

  return len;
}

function v2(s: string): number {}
