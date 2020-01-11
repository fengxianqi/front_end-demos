/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 * 
 * 
 * 思路：
 * 二分法查找
 * 1. 如果target的值存在数组中，则结果会刚好是mid值
 * 2. 如果target不存在数组中，则while循环肯定会一直循环到 low > high 才会break；
 * 当low === high时，此时mid = low = high, 则nums[mid]此时是最接近target的值；
 * 如果target比nums[mid]大，则结果是mid+1;如果target小，则target插入该数组后，下标就会刚好是mid；
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length
    let ret = 0
    while(low <= high) {
      let mid = Number.parseInt((low + high) / 2)
      if (target > nums[mid]) {
        // 在右边
        low = mid + 1
        ret = low
      } else if(target < nums[mid]) {
        high = mid - 1
        ret = mid
      } else {
        ret = mid
        break
      }
    }
    return ret
};
// @lc code=end

