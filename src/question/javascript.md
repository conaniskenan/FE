null 表示“没有对象”，即该处不应该有值。所以 Object.prototype.__proto__ 的值为 null 表示 Object.prototype 没有原型

MDN：闭包是指那些能够访问自由变量的函数。
ECMA:闭包是指能够访问自由变量的函数，并且函数执行时创建该函数的上下文已经被销毁（从执行上下文栈中被弹出）

使用 ?? 时，只有当值1为null或undefined时才返回值2；
使用 || 时，值1会转换为布尔值判断，为true返回值1，false 返回值2