/*
 * @Author: hypocrisy
 * @Date: 2021-08-02 22:29:17
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-10 19:46:57
 * @FilePath: /tencent/js/异步输出.js
 */
async function async1() {
	console.log('async1 start') //2
	await async2()
	console.log('async1 end') //7
}
async function async2() {
	new Promise(function (resolve) {
		console.log('promise1') //3
		resolve()
	}).then(function () {
		console.log('promise2') //6
	})
}
console.log('script start') //1
setTimeout(function () {
	console.log('setTimeout') //9
}, 0)
async1()
new Promise(function (resolve) {
	console.log('promise3') //4
	resolve()
}).then(function () {
	console.log('promise4') //8
})
console.log('script end') //5
/*
script start
async1 start
promise1
promise3
script end
promise2
async1 end
promise4
setTimeout
*/
