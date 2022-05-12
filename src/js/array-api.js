// let arr = [1, 2, [4, 5,[6,7]]]
// function flat(arr) {
// 	let isDeep = arr.some(item => item instanceof Array)
// 	if (!isDeep) {
// 		return arr
//   }
// 	let res = Array.prototype.concat.apply([], arr)
// 	return flat(res)
// }
// let res = flat(arr)
// console.log(res)
let a = [1, 2, [3, 4,[5,6]]]
let b = Array.prototype.concat.apply([], a)
console.log(a, b);
let c = a.flat()
console.log(c.flat())