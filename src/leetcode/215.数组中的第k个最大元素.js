/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  // 快排，快排时可以确定基准的所在位置
  function quickSort(arr, targetIndex, start) {
    if (arr.length <= 1) return arr[0];
    let left = [];
    let right = [];
    const mid = Math.floor(arr.length / 2);
    const midNum = arr.splice(mid, 1)[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > midNum) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
  
    if (left.length + start === targetIndex) {
      return midNum;
    } else if (left.length + start > targetIndex) {
      return quickSort(left, targetIndex, start);
    } else {
      return quickSort(right, targetIndex, left.length + start + 1);
    }
  }
  const num = quickSort(nums, nums.length - k, 0);

  return num;
};
// @lc code=end

