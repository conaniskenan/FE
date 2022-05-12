/*
 * @Author: hypocrisy
 * @Date: 2021-06-28 18:39:30
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-07-27 18:57:20
 * @FilePath: /tencent/js/手写监听.js
 */
function getArrProto() {
	const arrProto = Array.prototype
	const obj = Object.create(arrProto)
	const methodToPatch = [
		'push',
		'pop',
		'shift',
		'unshift',
		'splice',
		'sort',
		'reverse',
	]
	methodToPatch.forEach(method => {
		obj[method] = function () {
			console.log('监听数组方法' + method)
			return arrProto[method].call(this, ...arguments)
		}
	})
	return obj
}
function set(obj, key, value) {
	definereactive(obj, key, value)
}
function observe(obj) {
	if (typeof obj !== 'object' || typeof obj === null) {
		return obj
	}
	if (obj instanceof Array) {
		Object.setPrototypeOf(obj, getArrProto())
	}
	for (const [key, value] of Object.entries(obj)) {
		definereactive(obj, key, value)
	}
}
function definereactive(obj, key, value) {
	observe(value)
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: true,
		get() {
			console.log('监听到访问' + key)
			return value
		},
		set(newVal) {
			if (newVal === value) {
				return
			}
			observe(value)
			console.log(`监听到${value}被修改为${newVal}`)
			value = newVal
		},
	})
}
let obj = { a: 1, b: [1, 2, 3], c: { d: 4 } }
observe(obj)
console.log(obj.b.push(4), console.log(obj.b))
