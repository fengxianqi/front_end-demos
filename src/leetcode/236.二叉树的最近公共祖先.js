/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
//   public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
//     if(root == null || root == p || root == q) return root;
//     TreeNode left = lowestCommonAncestor(root.left, p, q);
//     TreeNode right = lowestCommonAncestor(root.right, p, q);
//     if(left == null) return right;
//     if(right == null) return left;
//     return root;
// }

  if (!root || root === p || root === q) {
    // p 或 q 刚好是root，则说明 q 或 p 是公共祖先
    return root
  }

  // 递归找左子树的公共祖先
  const left = lowestCommonAncestor(root.left, p, q)

  // 递归找右子树的公共祖先
  const right = lowestCommonAncestor(root.right, p, q)

  // 如果左子树为空，右子树不为空，则右子树肯定是公共祖先
  // 如果左子树为空，右子树也为空，则说明左右子树都不是公共祖先，返回null
  if (left === null) {
    return right
  }


  // 同上
  if (right === null)  {
    return left
  }

  // 都不为空，说明root刚好是他们的分界点，是公共祖先
  return root

};
// @lc code=end

