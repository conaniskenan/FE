/*
 * @Author: hypocrisy
 * @Date: 2021-08-07 13:35:42
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-08-07 13:43:22
 * @FilePath: /tencent/js/观察者模式.js
 */
class Subject {
	constructor() {
		this.observers = new Set()
	}
	add(observe) {
		this.observers.add(observe)
	}
	remove(observe) {
		this.observers.delete(observe)
	}
	notify() {
		for (const observer of this.observers) {
			observer.update()
		}
	}
}
class Observer {
	constructor(name) {
		this.name = name
	}
	update() {
		console.log(`目标通知更新了,我是${this.name}`)
	}
}
const subject = new Subject()
const ob1 = new Observer('前端')
const ob2 = new Observer('后端')
subject.add(ob1)
subject.add(ob2)
subject.notify()
