/*
 * @Author: hypocrisy
 * @Date: 2021-06-21 19:06:06
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-06-21 20:39:56
 * @FilePath: /tencent/index.js
 */
;(function () {
	class Waterfall {
		constructor(opt) {
			this.el = document.getElementById(opt.el)
			this.oItems = this.el.getElementsByTagName('div')
			this.heightArr = []
			this.colmun = opt.colmun
			this.gap = opt.gap
			this.itemWidth =
				(this.el.offsetWidth - (this.colmun - 1) * this.gap) /
				this.colmun
			this.init()
		}
		init() {
			this.render()
		}
		render() {
			let minIndex = -1
			let item = null
			for (let i = 0; i < this.oItems.length; i++) {
				item = this.oItems[i]
				item.style.width = this.itemWidth + 'px'
				if (i < this.colmun) {
					item.style.top = '0px'
					item.style.left = i * (this.itemWidth + this.gap) + 'px'
					this.heightArr.push(item.offsetHeight)
				} else {
					minIndex = this.getMinHeight(this.heightArr)
					item.style.top = this.heightArr[minIndex] + this.gap + 'px'
					item.style.left =
						minIndex * (this.itemWidth + this.gap) + 'px'
					this.heightArr[minIndex] += item.offsetHeight + this.gap
				}
			}
		}
		getMinHeight(arr) {
			return arr.indexOf(Math.min(...arr))
		}
	}
	window.Waterfall = Waterfall
})()
