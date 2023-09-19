function myAtoi(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let hasLeadingZero = true;
  let isPositive = true;
  let answer = "";
  let hasDigitStarted = false;
  for (const char of s) {
    if (char === " " && !hasDigitStarted) {
      continue;
    }
    if (char === "+" && !hasDigitStarted) {
      hasDigitStarted = true;
      continue;
    }
    if (char === "-" && !hasDigitStarted) {
      hasDigitStarted = true;
      isPositive = false;
      continue;
    }
    if (char === "0" && !hasDigitStarted) {
      hasDigitStarted = true;
      continue;
    }
    let isCharADigit = isDigit(char);
    if (isCharADigit) {
      hasDigitStarted = true;
      answer += char;
    } else {
      break;
    }
  }
  return digit32bit(answer, isPositive);
}

function isDigit(char: string) {
  return /\d/.test(char);
}

function digit32bit(s: string, isPositive: boolean) {
  const num = isPositive ? parseInt(s) : -parseInt(s);
  let maxRange = 2 ** 31 - 1;
  let minRange = -(2 ** 31);
  if (num > maxRange) {
    return maxRange;
  }
  if (num < minRange) {
    return minRange;
  }
  return num || 0;
}
