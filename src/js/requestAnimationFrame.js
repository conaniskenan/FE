/*
 * @Author: hypocrisy
 * @Date: 2021-07-14 23:01:53
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-07-14 23:01:56
 * @FilePath: /tencent/js/requestAnimationFrame.js
 */
console.log(box1)
let style = getComputedStyle(box1)
box1.onclick = function () {
	console.log(style.width)
	let timer = requestAnimationFrame(function fn() {
		console.log(style.width)
		if (parseInt(style.width) < 1000) {
			box1.style.width = parseInt(style.width) + 5 + 'px'
			timer = requestAnimationFrame(fn)
		} else {
			cancelAnimationFrame(timer)
		}
	})
}
