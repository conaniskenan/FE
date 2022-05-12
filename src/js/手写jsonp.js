/*
 * @Author: hypocrisy
 * @Date: 2021-07-12 19:32:08
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-07-13 23:47:18
 * @FilePath: /tencent/js/手写jsonp.js
 */
const jsonp = (url, callback, data = {}) => {
	let dataStr = url.includes('?') ? '&' : '?'
	let arr = []
	for (const [k, v] of Object.entries(data)) {
		arr.push(`${k}=${v}`)
	}
	dataStr += arr.join('&')
	let cb_name = 'jsonpCallback'
	dataStr += 'callback=' + cb_name
	let oScript = document.createElement('script')
	oScript.src = url + dataStr
	document.body.append(oScript)
	window[cb_name] = data => {
		callback(data)
		document.body.removeChild(oScript)
	}
}

const jsonp = (url, data = {}) => {
	let dataStr = url.includes('?') ? '&' : '?'
	for (const [k, v] of Object.entries(data)) {
		dataStr += `${k}=${v}&`
	}
	dataStr += 'callback=callback'
	let oScript = document.createElement('script')
	oScript.src = url + dataStr
	document.body.append(oScript)
	return new Promise((resolve, reject) => {
		window['callback'] = data => {
			try {
				resolve(data)
			} catch (e) {
				reject(e)
			} finally {
				document.body.removeChild(oScript)
			}
		}
	})
}
jsonp('http://127.0.0.1:8001/list').then(res => {
	console.log(res)
})
