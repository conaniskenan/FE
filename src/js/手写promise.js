/*
 * @Author: hypocrisy
 * @Date: 2021-06-05 20:18:08
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-09 17:38:26
 * @FilePath: /tencent/js/手写promise.js
 */
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const resolvePromise = (promise2, x, resolve, reject) => {
	if (promise2 === x) {
		return reject(
			new TypeError('Chaining cycle detected for promise #<Promise>')
		)
	}
	if (
		(typeof x === 'object' && x !== null) ||
		typeof x === 'function'
	) {
		let called //防止在then里return new Promise时同时调用resolve和resolve, reject
		try {
			let then = x.then
			if (typeof then === 'function') {
				then.call(
					x,
					y => {
						if (called) {
							return
						}
						called = true
						resolvePromise(promise2, y, resolve, reject)
					},
					r => {
						if (called) {
							return
						}
						called = true
						reject(r)
					}
				)
			} else {
				resolve(x)
			}
		} catch (e) {
			if (called) {
				return
			}
			called = true
			reject(e)
		}
	} else {
		resolve(x)
	}
}
class myPromise {
	constructor(excutor) {
		this.status = PENDING
		this.value == undefined
		this.reason = undefined
		this.onFulfilledCallbacks = []
		this.onRejectedCallbacks = []
		const resolve = value => {
			if (this.status === PENDING) {
				this.status = FULFILLED
				this.value = value
				this.onFulfilledCallbacks.forEach(fn => fn())
			}
		}
		const reject = reason => {
			if (this.status === PENDING) {
				this.status = REJECTED
				this.reason = reason
				this.onRejectedCallbacks.forEach(fn => fn())
			}
		}
		try {
			excutor(resolve, reject)
		} catch (e) {
			reject(e)
		}
	}
	then(onFulfilled, onRejected) {
		onFulfilled =
			typeof onFulfilled === 'function' ? onFulfilled : value => value
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: reason => {
						throw reason
				  }
		let promise2 = new myPromise((resolve, reject) => {
			if (this.status === FULFILLED) {
				setTimeout(() => {
					try {
						let x = onFulfilled(this.value)
						resolvePromise(promise2, x, resolve, reject)
					} catch (e) {
						reject(e)
					}
				}, 0)
			}
			if (this.status === REJECTED) {
				setTimeout(() => {
					try {
						let x = onRejected(this.reason)
						resolvePromise(promise2, x, resolve, reject)
					} catch (e) {
						reject(e)
					}
				}, 0)
			}
			if (this.status === PENDING) {
				this.onFulfilledCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onFulfilled(this.value)
							resolvePromise(promise2, x, resolve, reject)
						} catch (e) {
							reject(e)
						}
					}, 0)
				})
				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason)
							resolvePromise(promise2, x, resolve, reject)
						} catch (e) {
							reject(e)
						}
					}, 0)
				})
			}
		})
		return promise2
	}
	catch(errorCallback) {
		return this.then(null, errorCallback)
	}
	finally(callback) {
		return this.then(
			res => {
				callback()
				return res
			},
			e => {
				callback()
				throw e
			}
		)
	}
	static resolve(value) {
		if (value instanceof myPromise) {
			return value
		}
		return new myPromise((resolve, reject) => {
			if (value && value.then && typeof value.then === 'function') {
				setTimeout(() => {
					value.then(resolve, reject)
				})
			} else {
				resolve(value)
			}
		})
	}
	static reject(reason) {
		return new myPromise((resolve, reject) => reject(reason))
	}
	static all(arr) {
		return new myPromise((resolve, reject) => {
			let result = []
			let index = 0
			const promiseAdd = (key, value) => {
				result[key] = value
				if (++index === arr.length) {
					resolve(result)
				}
			}
			if (arr.length === 0) {
				resolve(arr)
			} else {
				for (let i = 0; i < arr.length; i++) {
					myPromise.resolve(arr[i]).then(
						res => {
							promiseAdd(i, res)
						},
						e => {
							reject(e)
							return
						}
					)
				}
			}
		})
	}
	static race(promises) {
		return new myPromise((resolve, reject) => {
			if (promises.length === 0) {
				return
			} else {
				for (let i of promises) {
					myPromise.resolve(i).then(
						res => {
							resolve(res)
							return
						},
						e => {
							reject(e)
							return
						}
					)
				}
			}
		})
	}
}

module.exports = myPromise
