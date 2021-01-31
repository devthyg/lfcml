var tabsList = document.querySelectorAll('.tabs-list a')
var onTabs = function(o) {
		var active = o.parentNode
		var tabs = o.parentNode.parentNode.parentNode
		var div = o.parentNode.parentNode.parentNode.parentNode
		var main = div.parentNode.parentNode
		var mainContent = div.querySelector('.tabs-elements-main')
		var activeHead = main.querySelector('.tabs-head')
		if (active.classList.contains('active')) {
			return false;
		}
		tabs.querySelector('.tabs-list .active').classList.remove('active')
		active.classList.add('active')
		mainContent.querySelector('.activemc').classList.remove('activemc')
		activeHead.querySelector('.activeh').classList.remove('activeh')
		mainContent.querySelector(o.getAttribute('href')).classList.add('activemc')
		activeHead.querySelector(o.getAttribute('href')).classList.add('activeh')
}
for (var i = 0; i <  tabsList.length; i++ ) {
	tabsList[i].addEventListener('click', function(e) {
		onTabs(this)
	})
}
var hash = window.location.hash
var activeA = document.querySelector('a[href ="' + hash + '"]')
if (activeA !== null && !activeA.classList.contains('active')) {
	onTabs(activeA)
}

var tabs = document.querySelector('.tabs')
var dispawn = document.querySelector('.tabs-elements')
var body = document.querySelector('.body')
var y = document.querySelector('.menuToggler')
var line = document.querySelector('.line')
var circle = document.querySelector('.circle')

var menuToggle = function (x) {
	/*x.classList.toggle("change")*/
	tabs.classList.toggle("tabs-active")
	dispawn.classList.toggle("dispawn")
	line.classList.toggle("lineActive")
	circle.classList.toggle("circleActive")
}

body.addEventListener('click' , function () {
	if (tabs !== null && tabs.classList.contains('tabs-active')) {
		tabs.classList.remove("tabs-active")
	}
	if (dispawn !== null && dispawn.classList.contains('dispawn')) {
		dispawn.classList.remove("dispawn")
	}
	if (y !== null && y.classList.contains('change')) {
		y.classList.remove("change")
	}
	if (line !== null && line.classList.contains('lineActive')) {
		line.classList.remove("lineActive")
	}
	if (circle !== null && circle.classList.contains('circleActive')) {
		circle.classList.remove("circleActive")
	}
})
