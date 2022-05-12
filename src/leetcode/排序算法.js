/*
 * @Author: hypocrisy
 * @Date: 2021-06-14 16:13:17
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-30 22:51:35
 * @FilePath: /tencent/leetcode/排序算法.js
 */
/**
 * @description: 冒泡排序 o(n2)
 * @param {*}
 * @return {*}
 */
Array.prototype.bubbleSort = function () {
	let arr = [...this]
	for (let j = 0; j < arr.length - 1; j++) {
		let done = true
		for (let i = 0; i < arr.length - 1 - j; i++) {
			if (arr[i] > arr[i + 1]) {
				;[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
				done = false
			}
		}
		if (done) {
			break
		}
	}
	return arr
}
// console.log([2, 1, 0, 6, 4, 9, 8].bubbleSort())
/**
 * @description: 选择排序 o(n2)
 * @param {*}
 * @return {*}
 */
Array.prototype.selectionSort = function () {
	let arr = [...this]
	for (let i = 0; i < arr.length - 1; i++) {
		let index = i
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[index]) {
				index = j
			}
		}
		if (i !== index) {
			;[arr[index], arr[i]] = [arr[i], arr[index]]
		}
	}
	return arr
}
// console.log([2, 1, 0, 6, 4, 9, 8].selectionSort())
/**
 * @description: 插入排序 o(n2)
 * @param {*}
 * @return {*}
 */
Array.prototype.insertSort = function () {
	let arr = [...this]
	for (let i = 0; i < arr.length; i++) {
		const temp = arr[i]
		let j = i
		while (j > 0) {
			if (arr[j - 1] > temp) {
				arr[j] = arr[j - 1]
			} else {
				break
			}
			j--
		}
		arr[j] = temp
	}
	return arr
}
// console.log([2, 1, 0, 6, 4, 9, 8].insertSort())
/**
 * @description: 归并排序 o(nlogn)
 * @param {*}
 * @return {*}
 */
Array.prototype.mergeSort = function () {
	let arr = [...this]
	const dfs = arr => {
		if (arr.length <= 1) return arr
		let mid = Math.floor(arr.length / 2)
		let left = arr.slice(0, mid)
		let right = arr.slice(mid)
		let leftRes = dfs(left)
		let rightRes = dfs(right)
		let res = []
		while (leftRes.length || rightRes.length) {
			if (leftRes.length && rightRes.length) {
				res.push(
					leftRes[0] < rightRes[0]
						? leftRes.shift()
						: rightRes.shift()
				)
			} else if (leftRes.length) {
				res.push(leftRes.shift())
			} else if (rightRes.length) {
				res.push(rightRes.shift())
			}
		}
		return res
	}
	return dfs(arr)
}
console.log([2, 1, 0, 6, 4, 9, 8].mergeSort())

/**
 * @description: 快速排序 o(nlogn)
 * @param {*}
 * @return {*}
 */
Array.prototype.quickSort = function () {
	let arr = [...this]
	const dfs = arr => {
		if (arr.length <= 1) {
			return arr
		}
		const left = []
		const right = []
		const mid = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < mid) {
				left.push(arr[i])
			} else {
				right.push(arr[i])
			}
		}
		return [...dfs(left), mid, ...dfs(right)]
	}
	return dfs(arr)
}
// console.log([2, 1, 0, 6, 4, 9, 8].quickSort())

/**
 * @description: 二分搜索 o(logn)
 * @param * item
 * @return {*}
 */
Array.prototype.binarySearch = function (item) {
	let arr = [...this]
	let low = 0
	let high = arr.length - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		if (item === arr[mid]) {
			return mid
		}
		if (item < arr[mid]) {
			high = mid - 1
		}
		if (item > arr[mid]) {
			low = mid + 1
		}
	}
	return -1
}
// console.log([1, 2, 3, 4, 5, 6, 7].binarySearch(7))
