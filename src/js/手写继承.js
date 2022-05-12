/*
 * @Author: hypocrisy
 * @Date: 2021-05-20 13:45:43
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-20 15:51:59
 * @FilePath: /tencent/js/继承.js
 */

/**
 * @description: 原型链继承 缺点:共享引用属性
 * @param {*}
 * @return {*}
 */
// function Person() {
// 	this.a = 1
// }
//Person.prototype.b = 2
// function Student() {}
// Student.prototype = new Person()
// Student.prototype.constructor = Student
// const s = new Student()
// console.log(s.constructor)

/**
 * @description: 构造函数继承 缺点:拿不到父类原型的属性
 * @param {*}
 * @return {*}
 */
// function Person() {
// 	this.a = 1
// }
// Person.prototype.b = 2
// function Student() {
// 	Person.call(this)
// }
// const s = new Student()

/**
 * @description: 组合式继承 缺点:执行了两次父类构造函数
 * @param {*}
 * @return {*}
 */
// function Person() {
// 	this.a = 1
// }
// Person.prototype.b = 2
// function Student() {
// 	Person.call(this)
// }
// Student.prototype = new Person()
// Student.prototype.constructor = Student
// const s = new Student()
/**
 * @description: 寄生组合式继承
 * @param {*}
 * @return {*}
 */
function Person() {
	this.a = 1
}
Person.prototype.b = 2
function Student() {
	Person.call(this)
}
//Student.prototype = Object.create(Person.prototype)
Student.prototype.__proto__ = Person.prototype
Student.prototype.constructor = Student
const s = new Student()
console.log(s.a, s.b)
