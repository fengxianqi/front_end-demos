/* 题目描述 */
/*************************************************************************************************

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

*************************************************************************************************/

/* 解法思路

同时遍历两条链表：
如果链表长度不同，则短链表会先为空，此时可以用0来代替，因此需要在while内部判断一下链表是否为空，若是则为0。

用一个变量carry表示溢出的进位，当两个链表都遍历结束，若carry是1，则需要再将进位算进去。
（解法中将carry放在了while循环条件上，当p1=null, p2=null, carry为1时，依然进入循环）
*/


/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

	// 结果
	const res = new ListNode(0)
	let carry = 0
	let cur = res

	while(l1 || l2) {
		const x = l1 ? l1.val : 0
		const y = l2 ? l2.val : 0

		const sum = x + y + carry
		
		carry = Math.floor(sum  / 10)
		const val = sum % 10
		cur.next = new ListNode(val)

		if (l1) {
			l1 = l1.next
		}
		if (l2) {
			l2 = l2.next
		}
		cur = cur.next
	}
	if (carry) {
		cur.next = new ListNode(1)
	}
	return res.next
};
// @lc code=end