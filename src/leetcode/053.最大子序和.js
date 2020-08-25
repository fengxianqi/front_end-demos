/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 * 
 * 思路：
 * 1. 用一个变量存最大值；
 * 2. 遍历数组，cur=当前值，若cur大于0，则再向前遍历累加，直到累加的值<0或到了数组末尾，每次都刷新最大值；
 * 3. 若cur<0，则比较一下就i++
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  for (let i = 0; i < nums.length; ) {
    let cur = nums[i]
    max = Math.max(max, cur)
    if (nums[i] > 0 && i + 1 < nums.length) {
      let j = i + 1
      for (;j < nums.length && cur + nums[j]>0;j++) {
        cur += nums[j]
        max = Math.max(max, cur)
      }
      i = j
    } else {
      i++
    }
    
  }
  return max
};
// @lc code=end

