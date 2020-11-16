/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 * 
 * 思路一（超时）
 * 暴力法，两个for循环遍历计数，内层for循环取余运算，若发现有数能被整除则break，表示非质数。
 * 
 * 思路二
 * 优化暴力法
 * 2到n的开方，这些数都无法整除，则n为质数，此时可省掉n的开方到n这部分的遍历
 * 除了2的偶数都不可能是质数，因此可以省掉这部分遍历，在内层循环时直接从3开始，每次+=2
 * 
 * 
 * 思路三：
 * 厄拉多塞筛法：遍历过程，将当前数的倍数都排除掉
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 2) {
    return 0
  }
  let count = 0;
  const arr = new Array(n)
  for (let i = 2;i<n;i++) {
    if (!arr[i]) {
      // 还没标记过，说明是质数
      count++
      for(let j =i+i;j<n;j+=i){
        // i的倍数都标记
        arr[j] = true
      }
    }
  }
  return count
};
// @lc code=end

