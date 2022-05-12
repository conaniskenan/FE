/*
 * @Author: hypocrisy
 * @Date: 2021-06-01 19:23:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2022-05-12 14:13:01
 * @FilePath: \FE\src\js\手写bind.js
 */
/**
 * @description: 不依靠call或者apply
 * @param * context
 * @param array args
 * @return {*}
 */
Function.prototype.myBind = function (context, ...args) {
	context = context ?? window
	const fn = Symbol()
	context[fn] = this
	return function (...args2) {
		const res = context[fn](...args.concat(args2))
		delete context[fn]
		return res
	}
}
/**
 * @description: 依靠call或者apply
 * @param * context
 * @param array args
 * @return {*}
 */
Function.prototype.myBind2 = function (context, ...args) {
	context = context ?? window
	const fn = this
	function f1(...args2) {
		return fn.apply(
			this instanceof f1 ? this : context,
			args.concat(args2)
		)
		//return fn.call(context, ...args.concat(args2))
	}
	Object.setPrototypeOf(f1.prototype, this.prototype)
	return f1
}
