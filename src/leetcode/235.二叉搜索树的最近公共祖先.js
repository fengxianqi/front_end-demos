/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 

我们从根节点开始遍历；

如果当前节点的值大于 pp 和 qq 的值，说明 pp 和 qq 应该在当前节点的左子树，因此将当前节点移动到它的左子节点；

如果当前节点的值小于 pp 和 qq 的值，说明 pp 和 qq 应该在当前节点的右子树，因此将当前节点移动到它的右子节点；

如果当前节点的值不满足上述两条要求，那么说明当前节点就是「分岔点」。此时，pp 和 qq 要么在当前节点的不同的子树中，要么其中一个就是当前节点。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solution/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-26/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let cur = root
    while(cur) {
      if (cur.val > p.val && cur.val > q.val) {
        // 同时大于两者，则p和q在cur的左子树
        cur = cur.left
      } else if (cur.val < p.val && cur.val < q.val) {
        // 同时小于两者，则p和q在cur的右子树
        cur = cur.right
      } else {
        // 可能是 cur.val > p, cur.val < q
        // 或 cur.val < p, cur.val > q
        // 或 cur.val === p || cur.val === q
        // 这种情况都说明cur刚好是p和q的分岔点，肯定是公共祖先
        return cur
      }
    }
    return 0
};
// @lc code=end

