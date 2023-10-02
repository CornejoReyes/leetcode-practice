# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
  nums.sort!
  solution = nil
  currentDifference = nil
  for i in 0..nums.length
    j = i + 1
    k = nums.length - 1
    while j < k
      sum = nums[i] + nums[j] + nums[k]
      return sum if sum == target
      d = (target - sum).abs
      if !currentDifference || d < currentDifference
        currentDifference = d
        solution = sum
      end
      k -= 1 if sum > target
      j += 1 if sum < target
    end
  end
  solution
end

puts three_sum_closest([-1,2,1,-4], 1)
puts three_sum_closest([0,0,0], 1)
puts three_sum_closest([4,2,-9, -5, 1, 0, 8, -3], 4)