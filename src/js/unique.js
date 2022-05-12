let arr = [1, 2, 3, 2, 1, 1, 1]
function getRepeatElements(arr) {
	let res = []
	arr.forEach(item => {
		if (
			arr.indexOf(item) !== arr.lastIndexOf(item) &&
			res.indexOf(item) === -1
		) {
			res.push(item)
		}
	})
	return res
}
console.log(getRepeatElements(arr))
