/*
 * @Author: hypocrisy
 * @Date: 2021-08-05 16:21:43
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-05 16:21:49
 * @FilePath: /tencent/js/对象数组去重.js
 */
let arr = [
	{ a: 1, b: 2, c: 3 },
	{ b: 2, c: 3, a: 1 },
	{ d: 2, c: 2 },
]
function objSort(obj) {
	let newObj = {}
	Object.keys(obj)
		.sort()
		.forEach(key => {
			newObj[key] = obj[key]
		})
	return JSON.stringify(newObj)
}
function objUnique(arr) {
	let newArr = [
		...new Set(
			arr.reduce((pre, cur) => {
				return pre.concat(objSort(cur))
			}, [])
		),
	]
	return newArr.map(item => {
		return JSON.parse(item)
	})
}
console.log(objUnique(arr))
