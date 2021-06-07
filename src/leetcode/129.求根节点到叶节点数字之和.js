/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  const ret = []

  const loop = (root, path) => {
      if (!root.left && !root.right) {
          path += root.val
          // 叶子节点
          ret.push(path)
          return
      }
      path += root.val
      if (root.left) loop(root.left, path)
      // path = path.substr(0, path.length -1)
      if (root.right) loop(root.right, path)
  }

  loop(root, '')
  
  const sum = ret.reduce((prev, cur) => {
      return Number(prev)+Number(cur)
  })
  return sum


//   const dfs = (root, prevSum) => {
//     if (root === null) {
//         return 0;
//     }
//     const sum = prevSum * 10 + root.val;
//     if (root.left == null && root.right == null) {
//         return sum;
//     } else {
//         return dfs(root.left, sum) + dfs(root.right, sum);
//     }
// }

// return dfs(root, 0);

};
// @lc code=end

