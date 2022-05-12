/*
 * @Author: hypocrisy
 * @Date: 2021-08-09 16:23:09
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-09 17:22:45
 * @FilePath: /tencent/js/reduce重写map.js
 */
Array.prototype.myMap = function (cb) {
	return this.reduce((pre, cur, index) => {
		return pre.concat(cb(cur, index))
	}, [])
}
let res = [1, 2, 3, 4, 5, 6].myMap(
	(item, index) => item + '---' + index
)
console.log(res)
//[ '1---0', '2---1', '3---2', '4---3', '5---4', '6---5' ]
