/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 * 
 * 
 * 
思路一：暴力三层循环，时间复杂度O(n^3)
var triangleNumber = function(nums) {
  const len = nums.length
  if (len < 3) {
    return 0
  }

  let count = 0
  for (let i = 0; i < len; i++) {
    const a = nums[i]
    for (let j = i + 1; j < len; j++) {
      const b = nums[j]
      for (let k = j + 1; k < len; k++) {
        const c = nums[k]
        // 两边之和大于第三边
        // 两边只差小于第三边(不需判断)
        if (a + b > c && a + c > b && b + c > a) {
          count++
        }
      }
    }
  }
  return count
};


思路二：排序，然后二分查找第三边,时间复杂度O(n^2logn)
var triangleNumber = function(nums) {
  const len = nums.length
  if (len < 3) {
    return 0
  }

  let count = 0
  const arr = nums.sort((a,b) => a-b)
  for (let i = 0; i < len; i++) {
    const a = arr[i]
    let k = i + 2
    for (let j = i + 1; j < len && a !== 0; j++) {
      const b = arr[j]
      k = binarySearch(arr, k, len, a + b)
      // j+1到k这一段的值都可以作为第三边
      count+= k -j - 1
    }
  }
  return count
};

function binarySearch(arr, l, r, n) {
  while(l <= r) {
    const mid = Number.parseInt((l+r)/2)
   if (arr[mid] < n){
      l = mid + 1
    } else {
      // a+b刚好等于第三边时，c需要取左边的值，因此-1
      r = mid - 1
    }
  }
  return l
}



思路三： 排序，双指针
var triangleNumber = function(nums) {
  const len = nums.length
  if (len < 3) {
    return 0
  }

  let count = 0
  const arr = nums.sort((a,b) => a-b)
  for (let i = 0; i < len - 2; i++) {
    let k = i + 2
    for (let j = i+1; j < len -1 && arr[i] !== 0;j++) {
      while(k<len && arr[i] + arr[j] > nums[k]) {
        // 符合条件时，k继续递增，直到a+b<=c，说明j到k-1这段都满足条件
        // j+1时，k不必重置回初始值，因为前一次nums[i] + nums[j]> nums[k]
        // 所以nums[i]+nums[j+1]肯定大于nums[k]
        k++
      }
      count += k - j - 1
    }
  }
  return count
};


 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  const len = nums.length
  if (len < 3) {
    return 0
  }

  let count = 0
  const arr = nums.sort((a,b) => a-b)
  for (let i = 0; i < len - 2; i++) {
    let k = i + 2
    for (let j = i+1; j < len -1 && arr[i] !== 0;j++) {
      while(k<len && arr[i] + arr[j] > nums[k]) {
        // 符合条件时，k继续递增，直到a+b<=c，说明j到k-1这段都满足条件
        // j+1时，k不必重置回初始值，因为前一次nums[i] + nums[j]> nums[k]
        // 所以nums[i]+nums[j+1]肯定大于nums[k]
        k++
      }
      count += k - j - 1
    }
  }
  return count
};


// @lc code=end

