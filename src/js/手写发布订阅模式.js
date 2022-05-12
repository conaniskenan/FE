/*
 * @Author: hypocrisy
 * @Date: 2021-08-09 17:49:11
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-09 17:49:22
 * @FilePath: /tencent/js/手写发布订阅模式.js
 */
class EventEmitter {
	constructor() {
		this.emitter = new Map()
	}
	on(funcName, func) {
		if (this.emitter.has(funcName)) {
			this.emitter.get(funcName).push(func)
		} else {
			this.emitter.set(funcName, [func])
		}
	}
	emit(funcName, ...args) {
		if (this.emitter.has(funcName)) {
			this.emitter.get(funcName).forEach(item => {
				item(...args)
			})
		}
	}
	off(funcName, func) {
		if (this.emitter.has(funcName)) {
			this.emitter
				.get(funcName)
				.splice(this.emitter.get(funcName).indexOf(func), 1)
		}
	}
	offAll(funcName) {
		if (this.emitter.has(funcName)) {
			this.emitter.delete(funcName)
		}
	}
}
const emitter = new EventEmitter()
function printWords(...agrs) {
	console.log(...agrs)
}
function printWords2() {
	console.log('printWords2')
}
emitter.on('print', printWords)
emitter.on('print', printWords2)
emitter.emit('print', [1, 2, 3, 4])
emitter.offAll('print')
emitter.emit('print', [1, 2, 3, 4])
