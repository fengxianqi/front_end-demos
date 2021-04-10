/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ret = []
  const len = nums.length
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2;i++) {
      if (nums[i] > 0) {
          // 最小的数已经大于0，不可能再相加等于0了
          break
      }

      if(i > 0 && nums[i] === nums[i-1]) continue; // 去重



      let l = i + 1
      let r = len - 1

      while(l<r) {
          // console.log([arr[i], arr[l], arr[r]])
          const t = nums[i]+ nums[l] + nums[r]
          if(t === 0) {
              ret.push([nums[i], nums[l], nums[r]])
              while(nums[l] === nums[l+1]) {
                l++
              }

              while(nums[r] === nums[r-1]) {
                r--
              }

              l++
              r--

          } else if (t > 0) {
              // 结果比较大，则r减小
              r--
          } else {
              l++
          }
      }
  }
  return ret
};
// @lc code=end

