function decodeAtIndex(s: string, k: number): string {
  let len = 0n;
  let target = BigInt(k);
  for (let i = 0; i < s.length; i += 1) {
    if (parseInt(s[i])) {
      len *= BigInt(s[i]);
      continue;
    }
    len += 1n;
  }
  for (let i = s.length - 1; i >= 0; i -= 1) {
    target %= len;
    if (target === 0n && !parseInt(s[i])) {
      return s[i];
    }
    if (!parseInt(s[i])) {
      len -= 1n;
    } else {
      len = len / BigInt(s[i]);
    }
  }
  return "";
}

console.log(decodeAtIndex("leet2code3", 10));
console.log(decodeAtIndex("ha22", 9));
console.log(decodeAtIndex("a2345678999999999999999", 1));
console.log(decodeAtIndex("abc", 3));
console.log(decodeAtIndex("a23", 6));
console.log(decodeAtIndex("a2b3c4d5e6f7g8h9", 623529));
console.log(decodeAtIndex("ixm5xmgo78", 711));
console.log(
  decodeAtIndex(
    "yyuele72uthzyoeut7oyku2yqmghy5luy9qguc28ukav7an6a2bvizhph35t86qicv4gyeo6av7gerovv5lnw47954bsv2xruaej",
    123365626
  )
);
console.log(
  decodeAtIndex(
    "jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt",
    731963130
  )
);
