/*
 * @Author: hypocrisy
 * @Date: 2021-03-06 13:49:31
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-07-14 00:21:54
 * @FilePath: /tencent/js/手写ajax.js
 */
function ajax({ method, url, timeout = 2000, data = {} }) {
	const xhr = new XMLHttpRequest()
	xhr.timeout = timeout
	return new Promise((reslove, reject) => {
		xhr.ontimeout = _ => {
			reject('请求超时')
		}
		xhr.onreadystatechange = _ => {
			try {
				if (xhr.readyState == 4) {
					if (
						(xhr.status >= 200 && xhr.status < 300) ||
						xhr.status === 304
					) {
						reslove(JSON.parse(xhr.responseText))
					}
				}
			} catch (e) {
				reject(e)
			}
		}
		let arr = []
		for (let [k, v] of Object.entries(data)) {
			arr.push(`${encodeURIComponent(k)}="${encodeURIComponent(v)}"`)
		}
		let encodeData = arr.join('&')
		if (method === 'get') {
			url += url.includes('?') ? '&' : '?' + encodeData
			xhr.open(method, url)
			xhr.send(null)
		} else {
			xhr.open(method, url)
			xhr.setRequestHeader(
				'Content-Type',
				'application/x-www-form-urlencoded;charset = utf8'
			)
			xhr.send(encodeData)
		}
	})
}
ajax({
	method: 'get',
	url: 'http://127.0.0.1:8001/list',
	data: { page: 'sjl', size: 10 },
}).then(
	res => {
		console.log(res)
	},
	e => {
		console.log(e)
	}
)
