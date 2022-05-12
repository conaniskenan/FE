/*
 * @Author: hypocrisy
 * @Date: 2021-06-29 16:08:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-29 16:08:25
 * @FilePath: /tencent/leetcode/2.两数相加.js
 */
var addTwoNumbers = function (l1, l2) {
	let temp = 0
	let r = 0
	let sum = new ListNode()
	let head = sum
	while (temp || l1 || l2) {
		r = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + temp
		sum.next = new ListNode(r % 10)
		temp = Math.floor(r / 10)
		sum = sum.next
		if (l1) l1 = l1.next
		if (l2) l2 = l2.next
	}
	return head.next
}
