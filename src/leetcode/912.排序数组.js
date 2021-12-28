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
var sortArray = function(nums) {
  // 阮一峰排序方法
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
};
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 快排不需额外空间的排序方法

  if (nums.length <= 1) { return nums}
  return quickSort(nums, 0, nums.length - 1)
};

const quickSort = (nums, l, r) => {
  if (l >= r) {
    return
  }
  // 分区，获取基准的位置
  const pivotIndex = partition(nums, l, r);
  quickSort(nums, l, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, r);
  return nums
}

const partition = (nums, l, r) => {
  let pivot = r; // 基准在最右边
  let leftIndex = l;

  // 最小的放到左边，leftIndex是最小组的边界
  for (let i = l; i < r; i++) {
      if (nums[i] < nums[pivot]) {
          [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
          leftIndex++;
      }
  }
  // 基准值放到最中间，且返回基准的下标
  [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
  return leftIndex;

}
// @lc code=end

