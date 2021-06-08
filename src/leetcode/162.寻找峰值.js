/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 * 

思路一：O(n)解法
只需判断当前是否大于下一个就可以了

var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i
    }
  }
  return nums.length - 1
};


思路二：二分查找
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  
  const search = (nums, l, r) => {
    // 终止递归条件
    if (l === r) {
      return l
    }

    const mid = Math.floor((l + r) / 2)
    if (nums[mid] > nums[mid + 1]) {
      // 中点大于右侧，说明峰值会出现在左边
      return search(nums, l, mid)
    } else {
      return search(nums, mid + 1, r)
    }
  }
  
  return search(nums, 0 , nums.length - 1)
};
// @lc code=end

