/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  // 使用hash表，O(n)空间
  // if (!nums || !nums.length) {
  //   return [];
  // }

  // const obj = {};
  // const ret = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (obj[nums[i]]) {
  //     ret.push(nums[i])
  //   } else {
  //     obj[nums[i]] = 1
  //   }
  // }
  // return ret;


// https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/solution/shi-jian-on-kong-jian-o1-by-wongdaweeee-zjlq/
// 原地hash
  let res = []
  for(let i = 0; i < nums.length; i++){
      const inx = Math.abs(nums[i]) - 1 // 3,2,1，2
      if(nums[inx] > 0){
          nums[inx] = -nums[inx] // ~nums[inx] + 1 也可 -7，-2，-3
      }else{
          res.push(inx + 1)
      }
  }
  return res

};
// @lc code=end

