/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let arr = [...nums2]
  return nums1.filter(item => {
    const index = arr.indexOf(item)
    if (index >= 0) {
      // 需要去重
      // nums1 = [1,2,2,1], nums2 = [2]，交集是[2]
      // nums1 = [1,2,2,1], nums2 = [2,2]，交集是[2,2]

      arr.splice(index, 1)
      return true
    } else {
      return false
    }
  })
};
// @lc code=end

