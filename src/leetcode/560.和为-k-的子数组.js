/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 *
 * https://leetcode.cn/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (45.20%)
 * Likes:    1898
 * Dislikes: 0
 * Total Accepted:    312.1K
 * Total Submissions: 690.5K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= k <= 10^7
 * 
 * 
 * 
 * 暴力解法 O(N2)：
 var subarraySum = function(nums, k) {
  if (!nums.length) {
    return 0
  }
  let count = 0 // 子数组的个数
  for (let i = 0; i<nums.length;i++) {
    let sum = 0
    for (let j = i; j<nums.length;j++) {
      sum += nums[j]
      if (sum === k) {
        count++
      }
    }
  }
  return count
};
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   // 哈希表,key为前缀和，value为key对应的前缀和的个数
   const map = new Map()
   map.set(0, 1) // 在没有遍历前，认为前缀和为0的区间有0个
   let preSum = 0 // 前缀和
   let count = 0
   for (const num of nums) {
      preSum += num
      if (map.has(preSum - k)) {
        // 如果有，说明preSum-k之间的那些元素值之和就是k
        count += map.get(preSum - k)
      }
      map.set(preSum, map.has(preSum) ? map.get(preSum) + 1 : 1)
   }
   return count
};
// @lc code=end

