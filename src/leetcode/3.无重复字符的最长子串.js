/*
 * @Author: hypocrisy
 * @Date: 2021-05-26 17:46:39
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 17:54:50
 * @FilePath: /tencent/leetcode/3.无重复字符的最长子串.js
 */
var lengthOfLongestSubstring = function (s) {
	let arr = []
	let max = 0
	for (let i = 0; i < s.length; i++) {
		let index = arr.indexOf(s[i])
		if (index === -1) {
			max = Math.max(max, arr.push(s[i]))
		} else {
			arr.splice(0, index + 1)
			max = Math.max(max, arr.push(s[i]))
		}
	}
	return max
}
console.log(lengthOfLongestSubstring('abcdea'))
