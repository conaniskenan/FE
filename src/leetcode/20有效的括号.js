/*
 * @Author: hypocrisy
 * @Date: 2021-05-21 19:07:55
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-21 19:08:09
 * @FilePath: /tencent/leetcode/20有效的括号.js
 */
var isValid = function (s) {
	if (s.length % 2 === 1 || s.length === 0) return false
	const m = new Map([
		['(', ')'],
		['[', ']'],
		['{', '}'],
	])
	const stack = []
	for (let v of s) {
		if (m.has(v)) {
			stack.push(v)
		} else {
			if (stack.length === 0 || m.get(stack.pop()) !== v) return false
		}
	}
	return stack.length === 0
}
