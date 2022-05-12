/*
 * @Author: hypocrisy
 * @Date: 2021-07-12 18:48:16
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-24 14:04:16
 * @FilePath: /tencent/js/手写双向绑定.js
 */
function View() {
	// let hander = {
	// 	get(taget, key) {},
	// 	set(target, key, value) {
	// 		console.log(value)
	// 	},
	// }
	let proxy = new Proxy(
		{},
		{
			get(target, key) {},
			set(target, key, value) {
				document
					.querySelectorAll(`[v-model='${key}']`)
					.forEach(item => {
						item.value = value
					})
				document
					.querySelectorAll(`[v-bind='${key}']`)
					.forEach(item => {
						item.innerHTML = value
					})
			},
		}
	)
	this.init = function () {
		let els = document.querySelectorAll('[v-model]')
		els.forEach(item => {
			item.addEventListener('keyup', function () {
				proxy[this.getAttribute('v-model')] = this.value
			})
		})
	}
}
new View().init()
