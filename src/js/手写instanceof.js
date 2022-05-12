/*
 * @Author: hypocrisy
 * @Date: 2021-06-02 19:44:14
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-02 20:13:15
 * @FilePath: /tencent/js/手写instanceof.js
 */
function myInstanceof(left, right) {
	let proto = Object.getPrototypeOf(left)
	while (true) {
		if (proto == null) {
			return false
		}
		if (proto == right.prototype) {
			return true
		}
		proto = Object.getPrototypeOf(proto)
	}
}
function F() {}
let o = new F()
