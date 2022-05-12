/*
 * @Author: hypocrisy
 * @Date: 2021-06-02 16:38:42
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-07-15 21:07:38
 * @FilePath: /tencent/js/闭包.js
 */
var data = []

// for (var i = 0; i < 3; i++) {
// 	;(data[i] = function () {
// 		console.log(arguments.callee.i)
// 	}).i = i
// }
for (var i = 0; i < 3; i++) {
	data[i] = (function (i) {
		return function () {
			console.log(i)
		}
	})(i)
}
data[0]()
data[1]()
data[2]()
// for (var i = 0; i < 3; i++) {
// 	;(function (i) {
// 		setTimeout(function log() {
// 			console.log(i)
// 		}, 1000)
// 	})(i)
// }
