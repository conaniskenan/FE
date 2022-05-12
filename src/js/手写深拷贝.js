/*
 * @Author: hypocrisy
 * @Date: 2021-03-05 12:53:24
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-09 22:47:32
 * @FilePath: /tencent/js/手写深拷贝.js
 */
const deepClone = (obj, map = new WeakMap()) => {
	if (typeof obj === 'function') {
		return obj.bind(null)
	}
	if (obj == null || typeof obj !== 'object') {
		return obj
	}
	if (obj instanceof RegExp) {
		return new RegExp(obj)
	}

	let res = new obj.constructor()
	if (map.has(obj)) {
		return map.get(obj)
	}
	map.set(obj, res)
	for (let key of Reflect.ownKeys(obj)) {
		res[key] = deepClone(obj[key], map)
	}
	return res
}
let obj = {
	a: 1,
	b: () => {
		console.log(111)
	},
	c: null,
	d: undefined,
	e: /\w+/,
	f: Symbol(),
	g: new Date(),
	h: [2],
	i: NaN,
	j: { a: 1 },
}
