/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  // 注意：子序列是连续的，且非递减的，说明遍历时可以直接递增或递减得到下一个数字
  // 贪心算法：遍历时，若能加入已有序列则优先加入已有序列；若不能，则新建一个不小于3的子序列
  // 记录数字出现的次数：{1:1,2:1,3:2:4:1,5:1}
  const countMap = new Map();

  // 记录数组中的每个数字作为结尾的子序列的数量
  const endMap = new Map();

  for (const x of nums) {
      const count = (countMap.get(x) || 0) + 1;
      countMap.set(x, count);
  }

  for (const x of nums) {
      const count = countMap.get(x) || 0;
      if (count > 0) {
          const prevEndCount = endMap.get(x - 1) || 0;
          if (prevEndCount > 0) {
              // 如果x刚好能塞进一个子序列，使用过了-1
              countMap.set(x, count - 1);
              // x-1不再是结尾，-1
              endMap.set(x - 1, prevEndCount - 1);
              // x作为新的结尾，+1
              endMap.set(x, (endMap.get(x, 0) || 0) + 1);
          } else {
              // 不存在已有的序列，准备自建一个[x,x+1x,x+2]的子序列
              const count1 = countMap.get(x + 1, 0);
              const count2 = countMap.get(x + 2, 0);
              if (count1 > 0 && count2 > 0) {
                  countMap.set(x, count - 1);
                  countMap.set(x + 1, count1 - 1);
                  countMap.set(x + 2, count2 - 1);
                  endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1);
              } else {
                // 没法建成一个长度为3的子序列，直接return false
                  return false;
              }
          }
      }
  }
  return true;
};
// @lc code=end

