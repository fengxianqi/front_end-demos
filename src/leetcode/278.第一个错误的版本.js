/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 0, high = n;
        let firstBadVer = n;
        while (low <= high) {
          const mid = (low + high) >>> 1;
          if (isBadVersion(mid)) {
            firstBadVer = mid; // mid是坏版本，
            high = mid - 1; // 将右指针考察mid-1
          } else {
            low = mid + 1; // mid还不是坏版本，将左指针考察到mid+1
          }
        }
        return firstBadVer;
    };
};
// @lc code=end

