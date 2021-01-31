var scrollbar = document.getElementById('scrollbarProgress')

window.onscroll = function () {
	var	progress = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) ) * 350
	var progressPercent =  Math.round(-progress) + "%"
	console.log(window.pageYOffset)
	console.log(document.body.scrollHeight)
	console.log(window.innerHeight)
	scrollbar.style.height = progressPercent
}
