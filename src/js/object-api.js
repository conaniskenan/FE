/*
 * @Author: hypocrisy
 * @Date: 2021-03-15 12:48:44
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-03 15:29:05
 * @FilePath: /tencent/js/object-api.js
 */
let obj = {
	a: 100,
	b: 200,
	[Symbol('c')]: 1,
}
Object.prototype.ff = 9
Object.defineProperty(obj, 'c', { value: 123 })
for (let key in obj) {
	console.log(key)
}
console.log(Object.keys(obj)) //可枚举的自身属性,等于for in +hasOwnProperty
console.log(Object.getOwnPropertyNames(obj)) //除symbol外的所有自身属性
console.log(Object.getOwnPropertySymbols(obj)) //自身symbol属性
console.log(Object.getOwnPropertyDescriptors(obj)) //所有自身属性的描述对象 key:属性 value:描述
console.log(Reflect.ownKeys(obj)) //所有自身属性 等于getOwnPropertyNames+getOwnPropertySymbols
