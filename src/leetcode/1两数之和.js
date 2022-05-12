/*
 * @Author: hypocrisy
 * @Date: 2021-05-21 19:09:21
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-29 14:53:04
 * @FilePath: /tencent/leetcode/1两数之和.js
 */
var twoSum = function (nums, target) {
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		let n = target - nums[i]
		if (map.has(n)) {
			return [map.get(n), i]
		} else {
			map.set(nums[i], i)
		}
	}
}
console.log(twoSum([2, 7, 11, 15], 22))
