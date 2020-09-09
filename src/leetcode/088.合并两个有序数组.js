/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 * 
 * 思路：
 * 本题要求直接操作nums1；
 * 比较暴力的办法是： 把nums2放到nums1末尾，然后排序
 * var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  nums1 = nums1.sort((a,b) => a-b)
};
 * 
 * 思路二：
 * 将nums1放到一个变量存起来，然后用双指针遍历两个数组，小的就放进nums1，该方法需要额外申请O(m)的空间
 * 
 * 
 * 思路三：
 * 依然用双指针，然后改为从后向前遍历，大的放到最后面，该方法不需申请额外的空间
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  nums1 = nums1.sort((a,b) => a-b)
};
// @lc code=end

