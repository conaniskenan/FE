/*
 * @Author: hypocrisy
 * @Date: 2021-03-14 12:43:29
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-03 15:03:17
 * @FilePath: /tencent/js/isEqual.js
 */
function isObject(obj) {
	return typeof obj === 'object' && obj !== null
}
function isEqual(obj1, obj2) {
	if (!isObject(obj1) || !isObject(obj2)) {
		return obj1 === obj2
	}
	if (obj1 === obj2) {
		return obj1 === obj2
	}
	let obj1Keys = Reflect.ownKeys(obj1)
	let obj2Keys = Reflect.ownKeys(obj2)
	if (obj1Keys.length !== obj2Keys.length) {
		return false
	}
	let res
	for (let key in obj1) {
		res = isEqual(obj1[key], obj2[key])
		if (!res) {
			return false
		}
	}
	return true
}
let obj = {
	a: 100,
	b: 200,
	c: {
		d: 'hhh',
		e: {
			f: 200,
		},
	},
}
let obj2 = {
	a: 100,
	b: 200,
	c: {
		d: 'hhh',
		e: {
			f: 200,
		},
	},
}
console.log(isEqual(obj, obj2))
