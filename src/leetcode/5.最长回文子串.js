/*
 * @Author: hypocrisy
 * @Date: 2021-06-29 17:07:50
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-29 18:57:05
 * @FilePath: /tencent/leetcode/5.最长回文子串.js
 */
var longestPalindrome = function (s) {
	if (s.length < 2) {
		return s
	}
	let l = 0
	let r = 0
	for (let i = 0; i < s.length; i++) {
		// 回文子串长度是奇数
		helper(i, i)
		// 回文子串长度是偶数
		helper(i, i + 1)
	}

	function helper(m, n) {
		while (m >= 0 && n < s.length && s[m] == s[n]) {
			m--
			n++
		}
		// 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻 如果此轮询得到回文串长度大于之前记录， 记录此轮循边界
		if (n - m > r - l) {
			r = n
			l = m
		}
	}
	return s.slice(l + 1, r)
}
console.log(longestPalindrome('abcb'))
