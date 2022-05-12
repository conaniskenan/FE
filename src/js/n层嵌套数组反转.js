/*
 * @Author: hypocrisy
 * @Date: 2021-08-24 12:42:43
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-24 12:42:50
 * @FilePath: /tencent/js/n层嵌套数组反转.js
 */
let a = [1, [2, [3, [4, null]]]]
a = a.flat(Infinity).reverse()
a.shift()
a.push(null)
for (let i = a.length - 2; i >= 0; i--) {
	if (i === a.length - 2) {
		a[i] = [a[i], null]
		continue
	}
	a[i] = [a[i], a[i + 1]]
}
//[4, [3, [2, [1, null]]]]
