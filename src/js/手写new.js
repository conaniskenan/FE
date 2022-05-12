/*
 * @Author: hypocrisy
 * @Date: 2021-06-02 15:48:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2022-05-12 15:56:05
 * @FilePath: \FE\src\js\手写new.js
 */
function myNew(Func, ...args) {
	let obj = Object.create(Func.prototype)
	const res = Func.call(obj, ...args)
	if (res != null && typeof res === 'object') {
		return res
	} else {
		return obj
	}
}
function F(name, age) {
	this.name = name
	this.age = age
	return 'sjl'
}
F.prototype.c = 1234
let obj = myNew(F, 'sjl', 21)
console.log(obj)
let obj2 = new F('sjl', 21)
console.log(obj2)
