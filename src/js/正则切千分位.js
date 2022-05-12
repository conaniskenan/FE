/*
 * @Author: hypocrisy
 * @Date: 2021-08-06 19:28:06
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-06 19:28:17
 * @FilePath: /tencent/js/正则切千分位.js
 */
let num = '13214343876346942110'
num = num.replace(/(\d)(?=(\d{3})+$)/g, (str, $1) => {
	return $1 + ','
})
console.log(num)
let num2 = '342243242322.3432423'
num2 = num2.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
console.log(num2)
