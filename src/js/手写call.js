/*
 * @Author: hypocrisy
 * @Date: 2021-06-01 14:59:35
 * @LastEditors: hypocrisy
 * @LastEditTime: 2022-05-12 13:27:39
 * @FilePath: \FE\src\js\手写call.js
 */
Function.prototype.myCall = function (context, ...args) {
	context = context ?? window
	const fn = Symbol()
	context[fn] = this
	const res = context[fn](...args)
	delete context[fn]
	return res
}
let obj = { a: 'hhh' }
function foo(name, age) {
	console.log(this.a)
	console.log(name, age)
}
foo.myCall(obj, 'sjl', 21)
