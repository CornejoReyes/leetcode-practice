# 45. Jump Game II

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

```
0 <= j <= nums[i] and
i + j < n
```
Return the minimum number of jumps to reach `nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.

 

### Example 1:

```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```


### Example 2:

```
Input: nums = [2,3,0,1,4]
Output: 2
```

#### Constraints:

```
1 <= nums.length <= 104
0 <= nums[i] <= 1000
It's guaranteed that you can reach nums[n - 1].
```

## Solution

**Note:** As mentioned in the README, I'm not trying to be top 1% of the rankings.
The approach used in the solution is dynamic programming. This approch is O(n^2). That's why I'm getting very bad results in terms of performance as there are O(n) solutions.

[![image.png](https://i.postimg.cc/5y5qMBVx/image.png)](https://postimg.cc/m1DFYFkq)