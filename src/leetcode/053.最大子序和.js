/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 * 
 * 
 * 
 * 
 * 
 * 
 * 思路一，暴力遍历：
 * 
 * 1. 遍历数组，若当前小于0，最大子序肯定不会以负数开头，所以直接比较取最大值，进行下次遍历
 * 2. 若当前值大于0，则以当前值为起点，进行第二次遍历，得到以当前为起点的子序最大值是多少，从而得出所有的子序
 * 3. 在第二层遍历时，若发现sum值小于0了，说明在以nums[i]为起点的子序不可能再大了，提前中断遍历
 * 
 * 
 * 
var maxSubArray = function(nums) {
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    // 小于0，除了只有一项的情况，最大子序不可能以负数开头
    if (nums[i] < 0 ) {
      max = Math.max(nums[i], max)
      continue
    }

    let sum = 0
    for (let j = i; j <nums.length;j++) {
      sum += nums[j]
      if (sum <0) {
        // 相当于以负数为起点了，不可能再大了，提前中断循环
        break
      }
      max = Math.max(sum, max)
    }
  }
  return max
};

* 思路二，动态规划：
 * https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/
 * 
 * sum表示对结果是否有增益效果，有的时候则累加，无则舍弃
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for(const num of nums) {
      if(sum > 0) {
          sum += num
      } else {
          sum = num
      }
      ans = Math.max(ans, sum)
  }
  return ans
};
// @lc code=end

