/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const ans = []

  const dfs = (s, startIndex, path) => {
    // 超出范围： 段位大于4了；4段了，还有数字没进来
    if (path.length > 4 || (path.length === 4 && s.length !== startIndex)) {
      return
    }

    if (path.length === 4) {
      // 够4段了
      ans.push(path.join('.'))
      return
    }

    // 回溯遍历
    for (let i = startIndex; i<s.length;i++) {
      // 从startIndex开始截取，如2,25,255
      const str = s.substring(startIndex, i + 1)

      // 截取的字段是0开头的两位数，不合法
      // 截取的字段超过3，则肯定大于255了，不合法
      if ((str.length > 1 && str.startsWith('0')) || str.length > 3) {
        break
      }

      const val = Number.parseInt(str)

      // 不在合法范围
      if (val < 0 || val > 255) {
        break
      }

      // 进入数组，然后dfs递归下一个
      path.push(val)
      dfs(s, i+1, path)

      // 递归结束，还原path，回溯
      path.pop()

    }
  }

  
  dfs(s, 0, [])
  return ans
};
// @lc code=end

