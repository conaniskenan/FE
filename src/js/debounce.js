let t = document.getElementsByClassName('txt')[0]
let c = document.getElementsByClassName('con')[0]

function debounce(fn, delay = 500) {
	let timer = null
	return function () {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments)
			timer = null
		}, delay)
	}
}
t.addEventListener(
	'keyup',
	debounce(() => {
		c.innerHTML = t.value
		console.log(t.value)
	})
)
