/*
 * @Author: hypocrisy
 * @Date: 2021-06-01 19:17:50
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-01 19:22:27
 * @FilePath: /tencent/js/手写apply.js
 */
Function.prototype.myApply = function (context, args) {
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
foo.myApply(obj, ['sjl', 21])
