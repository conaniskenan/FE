/*
 * @Author: hypocrisy
 * @Date: 2021-08-05 19:57:58
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-09 21:42:57
 * @FilePath: /tencent/js/定时器的实现.js
 */
const mySetTimeOut = (cb, delay = 0) => {
	const timer = setInterval(() => {
		cb()
		clearInterval(timer)
	}, delay)
}
// mySetTimeOut(() => {
// 	console.log(222)
// }, 2000)
const mySetTimeInterval = (cb, delay = 0) => {
	let timer = null
	;(function inner() {
		timer = setTimeout(() => {
			cb()
			inner()
		}, delay)
	})()
	return () => clearInterval(timer)
}
const cancel = mySetTimeInterval(() => {
	console.log(222)
}, 1000)

setTimeout(() => {
	cancel()
}, 10000)
