class Coder {
	logName = () => {
		console.log('this', this)
	}
	logname() {
		console.log(this)
	}
	constructor() {
		console.log('------------', this)
	}
}
function Coder1() {
	this.a = 1
	console.log('------------', this.a)
	this.fn = function () {
		console.log('fn', this.a)
	}
	this.fn1 = () => {
		console.log('fn1', this.a)
	}
}
