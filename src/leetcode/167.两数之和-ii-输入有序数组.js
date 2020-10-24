/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

  // 二分查找目标元素
  function binaryFind(low, high, tar) {
    const mid = Math.floor((low + high) / 2)
    if (numbers[mid] === tar) {
      return mid
    }

    if (low >= high) {
      return 0
    }
    if (numbers[mid] > tar) {
      return binaryFind(low, mid, tar)
    } else {
      return binaryFind(mid + 1, high, tar)
    }
  }

  // 遍历查找
  for (let i = 0; i<numbers.length; i++) {
    // 先拿到第一个元素，然后再在数组中寻找第二个元素
    const tar = target - numbers[i]
    if (tar < 0) {
      // 如果小于0说明肯定找不到了，直接返回
      return []
    }
    // 二分查找目标元素
    const ret = binaryFind(i + 1, numbers.length - 1, tar)
    if (ret) {
      // 找到了，直接返回
      return [i + 1, ret + 1]
    }
  }
  return []
};
// @lc code=end

