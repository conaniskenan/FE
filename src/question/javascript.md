null 表示“没有对象”，即该处不应该有值。所以 Object.prototype.__proto__ 的值为 null 表示 Object.prototype 没有原型
--------------------------------------
MDN：闭包是指那些能够访问自由变量的函数。
ECMA:闭包是指能够访问自由变量的函数，并且函数执行时创建该函数的上下文已经被销毁（从执行上下文栈中被弹出）
--------------------------------------
使用 ?? 时，只有当值1为null或undefined时才返回值2；
使用 || 时，值1会转换为布尔值判断，为true返回值1，false 返回值2
--------------------------------------
Arguments对象的length属性，表示实参的长度
function foo(b, c, d){
    console.log("实参的长度为：" + arguments.length)
}
console.log("形参的长度为：" + foo.length)
foo(1)
// 形参的长度为：3
// 实参的长度为：1
--------------------------------------
Arguments 对象的 callee 属性，通过它可以调用函数自身。
--------------------------------------
解决0.1+0.2==0.3的问题
1 function numbersequal(a,b){ return Math.abs(a-b)<Number.EPSILON;2^-52
} 
var a=0.1+0.2， b=0.3;
console.log(numbersequal(a,b)); //true

2 把计算数字 提升 10 的N次方 倍 再 除以 10的N次方
--------------------------------------
箭头函数
1.没有 this
2. 没有 arguments
3. 不能通过 new 关键字调用
JavaScript 函数有两个内部方法：[[Call]] 和 [[Construct]]。
当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。
当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。
箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错。
4.没有 new.target
5.没有原型->prototype
--------------------------------------
instanceof 的结果为 false
var s = Symbol('foo');
console.log(s instanceof Symbol); // false