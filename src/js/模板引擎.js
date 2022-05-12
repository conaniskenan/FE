/*
 * @Author: hypocrisy
 * @Date: 2021-08-06 17:51:38
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-09 17:02:06
 * @FilePath: /tencent/js/模板引擎.js
 */
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'
let data = {
	name: '姓名',
	age: 18,
}
template = template.replace(/\{\{(\w+)\}\}/g, (str, $1) => data[$1])
console.log(template)
//我是姓名，年龄18，性别undefined
