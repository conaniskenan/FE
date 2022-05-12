const obj = {
	fn(func) {
		func()
	},
}
obj.fn(function () {
	console.log(this)
})
