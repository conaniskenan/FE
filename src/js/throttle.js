let div1 = document.getElementsByClassName('d')[0]

function throttle(fn, delay = 500) {
	let timer = null
	console.log('触发节流');
	return function () {
		if (timer) {
			return
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments)
			timer = null
		}, delay)
	}
}
div1.addEventListener(
	'drag',
	throttle(e => {
		console.log(e.offsetX, e.offsetY)
	})
)
