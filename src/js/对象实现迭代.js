/*
 * @Author: hypocrisy
 * @Date: 2021-05-24 19:31:18
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-24 19:31:31
 * @FilePath: /tencent/js/对象实现迭代.js
 */
const obj = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function* () {
		for (const key in obj) {
			if (Object.hasOwnProperty.call(obj, key)) {
				yield obj[key]
			}
		}
	},
}
// obj[Symbol.iterator] = function* () {
// 	for (const key in obj) {
// 		if (Object.hasOwnProperty.call(obj, key)) {
// 			yield obj[key]
// 		}
// 	}
// }
obj.d = 4
for (let item of obj) {
	console.log(item)
}
