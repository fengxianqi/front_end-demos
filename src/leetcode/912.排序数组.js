/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 *
 * https://leetcode-cn.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (56.03%)
 * Likes:    442
 * Dislikes: 0
 * Total Accepted:    259.3K
 * Total Submissions: 465.1K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 快排一
　if (nums.length <= 1) { return nums; }
  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

　for (let i = 0; i < nums.length; i++){
　　　　if (nums[i] < pivot) {
　　　　　　left.push(nums[i]);
　　　　} else {
　　　　　　right.push(nums[i]);
　　　　}
　　}

　　return sortArray(left).concat([pivot], sortArray(right));

  // TODO: 不需额外空间的排序方法
};
// @lc code=end

