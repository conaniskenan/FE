/*
 * @Author: hypocrisy
 * @Date: 2021-07-23 18:53:50
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-06 19:46:57
 * @FilePath: /tencent/js/JSON.parse.js
 */
let obj = {
	a: 1,
	b: () => {},
	c: null,
	d: undefined,
	e: /\w+/,
	f: Symbol(),
	g: new Date(),
	h: [2],
	i: NAN,
}
console.log(JSON.parse(JSON.stringify(obj)))
/*{
  a: 1,
  c: null,
  e: {},
  g: '2021-07-23T10:58:25.161Z',
  h: [ 2 ],
  i: null
}
*/
正则, undefined, Symbol, 函数被忽略
日期变成字符串
NAN变成null
