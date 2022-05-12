/*
 * @Author: hypocrisy
 * @Date: 2021-06-29 18:56:33
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-29 18:56:35
 * @FilePath: /tencent/leetcode/15.三数之和.js
 */
var threeSum = function (nums) {
	if (nums.length < 3) return []
	nums.sort(function (a, b) {
		return a - b
	})
	let start = 0
	let end = 0
	let res = []
	for (let i = 0; i < nums.length - 2; i++) {
		if (i === 0 || nums[i] !== nums[i - 1]) {
			start = i + 1
			end = nums.length - 1
			while (start < end) {
				if (nums[i] + nums[start] + nums[end] === 0) {
					res.push([nums[i], nums[start], nums[end]])
					start++
					end--
					while (start < end && nums[start] === nums[start - 1]) {
						start++
					}
					while (start < end && nums[end] === nums[end + 1]) {
						end--
					}
				} else if (nums[i] + nums[start] + nums[end] > 0) {
					end--
				} else {
					start++
				}
			}
		}
	}
	return res
}
