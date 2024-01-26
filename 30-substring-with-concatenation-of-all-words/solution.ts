function findSubstring(s: string, words: string[]): number[] {
  const wordLength = words[0].length;
  const substringLenth = wordLength * words.length;
  if (s.length < substringLenth) {
    return [];
  }

  const solution = [];
  let left = 0;
  let right = left;
  let currentLength = 0;

  while (left < s.length) {
    const tracker = words.reduce((track, w) => { track[w] = 0; return track }, {});
    while (currentLength < substringLenth) {
      const word = s.substring(right, wordLength);
      if (tracker.hasOwnProperty(word) && tracker[word] === 0) {
        tracker[word] += 1;
        currentLength += wordLength;
        right += wordLength - 1;
      }
    }
  }

  return solution;
};