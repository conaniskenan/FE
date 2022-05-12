/*
 * @Author: hypocrisy
 * @Date: 2021-07-23 18:07:39
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-09 22:12:42
 * @FilePath: /tencent/js/手写函数柯里化.js
 */
// function add(a, b, c) {
// 	return a + b + c
// }
// function curry(fn, ...args) {
// 	if (fn.length > args.length) {
// 		return function (...args2) {
// 			return curry(fn, ...args, ...args2)
// 		}
// 	} else {
// 		return fn(...args)
// 	}
// }
// const addCurry = curry(add, 3)

// console.log(addCurry(1)(2))

const curry = (fn, ...args) => {
	if (fn.length > args.length) {
		return (...args2) => {
			return curry(fn, ...args, ...args2)
		}
	} else {
		return fn(...args)
	}
}
