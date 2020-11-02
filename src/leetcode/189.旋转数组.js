/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 * 
 * 
 * 思路一
 * 暴力一个个遍历， 时间O(k * n)，空间O(1)
 * 
 * 思路二(推荐)
 *  时间O(n)，空间O(1)
 * 1. 翻转数组：[7,6,5,4,3,2,1]
 * 2. 再翻转前k个，[5,6,7,4,3,2,1]
 * 3.再翻转后length - k 个： [5,6,7,,1,2,3,4]
 * 
 * 
 * 思路三
 * 截取后半段，然后再续在前面，此处要注意要直接改变nums的内容。
 * 时间O(n)，空间O(k)
var rotate = function(nums, k) {
  const tail = nums.splice(nums.length - k)
  console.log(tail)
  
  nums.unshift(...tail)
};
 * 
 * 思路四
 * 使用环状替换
 * 时间O(n)，空间O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // k有可能超出nums长度，会循环，因此取模
  k %= nums.length

  function reverse (arr, start, end) {
    while(start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)

};
// @lc code=end

