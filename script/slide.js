var rC = document.querySelector('.rightClick img')
var right = rC.parentNode
var lC = document.querySelector('.leftClick img')
var left = lC.parentNode
var DIV = document.querySelectorAll('.slide_container .containt')
var nbSlide = DIV.length;
var div = document.querySelector('.slide_container .containt')
var Div = document.querySelector('.slide_container')
var id = div.id 
var vid = document.querySelectorAll('.slide_container .containt video')
rC.addEventListener('click', function () {
	if (id <= nbSlide - 1 ) {
		Div.querySelector('.activeim').classList.remove('activeim')
		id++
		var nextSlide = document.querySelector('div[ id ="' + id + '"]')
		nextSlide.classList.add('activeim')
	}else {
		Div.querySelector('.activeim').classList.remove('activeim')
		id = 1
		var nextSlide = document.querySelector('div[ id ="' + id + '"]')
		nextSlide.classList.add('activeim')
	}
})
lC.addEventListener('click', function () {
	if (id >= 2) {
		Div.querySelector('.activeim').classList.remove('activeim')
		id--
		var nextSlide = document.querySelector('div[ id ="' + id + '"]')
		nextSlide.classList.add('activeim')
	}else {
		Div.querySelector('.activeim').classList.remove('activeim')
		id = nbSlide
		var nextSlide = document.querySelector('div[ id ="' + id + '"]')
		nextSlide.classList.add('activeim')
	}
})
if (vid.play && div !== null && !div.classList.contains('activeim')) {
	vid.paused();
}
