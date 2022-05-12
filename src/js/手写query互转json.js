/*
 * @Author: hypocrisy
 * @Date: 2021-06-09 20:11:52
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-06 19:12:51
 * @FilePath: /tencent/js/手写query互转json.js
 */
// let url =
// 	'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
// let query = url.split('?')[1].split('&')
// let queryObj = query.reduce((pre, cur) => {
// 	if (cur.includes('=')) {
// 		cur = cur.split('=')
// 		if (cur[0] in pre) {
// 			pre[cur[0]] = [].concat(pre[cur[0]], decodeURIComponent(cur[1]))
// 		} else {
// 			pre[cur[0]] = decodeURIComponent(cur[1])
// 		}
// 	} else {
// 		pre[cur] = true
// 	}
// 	return pre
// }, {})
// console.log(queryObj)

let url =
	'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'

let query = {}
decodeURIComponent(url).replace(
	/(\w+)=([\w|\p{Unified_Ideograph}]+)/gu,
	(str, $1, $2) => {
		if ($1 in query) {
			query[$1] = [].concat(query[$1], $2)
		} else {
			query[$1] = $2
		}
	}
)
console.log(query)
