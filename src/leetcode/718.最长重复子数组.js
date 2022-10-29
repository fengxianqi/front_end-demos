/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */
// var findLength = function(nums1, nums2) {
//   // 滑动窗口的解法： https://blog.csdn.net/abcdef314159/article/details/108721048
//   const findLengthHelper = (nums1, nums2) => {
//     const len1 = nums1.length
//     const len2 = nums2.length

//     // 遍历次数
//     const total = len1 + len2 + 1

//     let max = 0

//     for (let i = 0; i<total;i++){
//       let s1 = 0; // 数组1的遍历下标
//       let s2 = 0; // 数组2的遍历下标
//       let len = 0;

//       if (i < len1) {
//         // 第一个数组从末尾算起，如下：
//         // 1,2,3,4,5
//         //         6,3,4,2,1,0

//         s1 = len1 - i - 1 
//         s2 = 0
//         len = i + 1
//       } else {
//         //       1,2,3,4,5
//         // 6,3,4,2,1,0
//         s1 = 0
//         s2 = i - len1 + 1
//         len = Math.min(len2 - s2, len1)
//       }
//       const maxLen = maxLength(nums1, nums2, s1, s2, len)

//       // 得到最大值，替换
//       max = Math.max(max, maxLen)

//     }
//     return max

//   }

//   const maxLength = (nums1, nums2, s1, s2, len) =>{
//     // 遍历当前窗口，相同的就加加，不同的就归零，得到最大的计数
//     let max = 0
//     let count = 0
//     for (let i = 0; i<len;i++) {
//       if (nums1[s1 + i] === nums2[s2+i]) {
//         count++
//         max = Math.max(max, count)
//       } else {
//         count = 0
//       }
//     }
//     return max
//   }


//   // 确保数量小的数组在前面
//   if (nums1.length < nums2.length) {
//     return findLengthHelper(nums1,nums2)
//   } else {
//     return findLengthHelper(nums2,nums1)
//   }

// };



// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  // 动态规划解法
  const m = nums1.length
  const n = nums2.length
  let ans = 0;
  const dp = new Array(m+1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n+1).fill(0)
  }


  for (let i =1; i <= m; i++) {
    for (let j = 1; j <= n;j++) {
      if (nums1[i-1] === nums2[j-1]) {
        dp[i][j] = dp[i - 1][j-1] + 1
      }
      ans = Math.max(dp[i][j], ans)
    }
  }
  return ans
};
// @lc code=end

