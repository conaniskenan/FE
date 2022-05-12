/*
 * @Author: hypocrisy
 * @Date: 2021-07-22 19:18:48
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-10 12:53:28
 * @FilePath: /tencent/js/手写数组扁平化.js
 */
let arr = [1, 2, [3, [4, 5, [6, [7]]]]]

console.log(arr.flat(Infinity))

function fn(arr) {
	return arr.reduce((pre, cur) => {
		return pre.concat(Array.isArray(cur) ? fn(cur) : cur)
	}, [])
}
console.log(fn(arr))

// function fn(arr) {
// 	while (arr.some(item => Array.isArray(item))) {
// 		arr = [].concat(...arr)
// 	}
// 	return arr
// }
// console.log(fn(arr))
