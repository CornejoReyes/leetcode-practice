# @param {String} s
# @param {Integer} k
# @return {String}
def decode_at_index(s, k)
  len = 0
  s.each_char do |char|
    if is_digit?(char)
      len *= char.to_i
    else
      len += 1
    end
  end
  s.reverse.each_char do |char|
    puts len
    k %= len
    return char if k == 0 && !is_digit?(char)
    if is_digit?(char)
      len /= char.to_i
    else
      len -= 1
    end
  end
end

def is_digit?(s)
  code = s.ord
  48 <= code && code <= 57
end

puts decode_at_index('leet2code3', 10)
puts decode_at_index('ha22', 9)
puts decode_at_index('a2345678999999999999999', 1)
puts decode_at_index('abc', 3)
puts decode_at_index('a23', 6)
puts decode_at_index('a2b3c4d5e6f7g8h9', 623529)
puts decode_at_index('ixm5xmgo78', 711)
puts decode_at_index('yyuele72uthzyoeut7oyku2yqmghy5luy9qguc28ukav7an6a2bvizhph35t86qicv4gyeo6av7gerovv5lnw47954bsv2xruaej', 123365626)
puts decode_at_index('jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt', 731963130)