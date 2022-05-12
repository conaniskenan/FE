/*
 * @Author: hypocrisy
 * @Date: 2021-07-15 21:07:54
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-07-15 21:49:58
 * @FilePath: /tencent/js/事件流.js
 */

let outer = document.querySelector('.outer')
let inner = document.querySelector('.inner')
let oul = document.querySelector('.list')
outer.addEventListener(
	'click',
	() => {
		console.log('触发外层')
	},
	true
)
inner.addEventListener('click', () => {
	console.log('触发内层')
})
oul.addEventListener('click', e => {
	console.log([...e.currentTarget.children].indexOf(e.target))
})
