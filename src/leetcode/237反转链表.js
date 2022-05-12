/*
 * @Author: hypocrisy
 * @Date: 2021-05-18 15:52:54
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-18 16:33:18
 * @FilePath: /tencent/leetcode/237.js
 */
var reverseList = function (head) {
	let [prev, curr] = [null, head]
	while (curr) {
		let tmp = curr.next
		2 // 1. 临时存储当前指针后续内容
		curr.next = prev
		null // 2. 反转链表
		prev = curr
		1 // 3. 接收反转结果
		curr = tmp
		2 // 4. 接回临时存储的后续内容
	}
	return prev
}
