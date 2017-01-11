'use strict';

var WIDTH = 777; // Board width, px
var HEIGHT = 444; // Board height, px
var SVG; // Board

// https://en.wikipedia.org/wiki/Blackball_(pool)

document.addEventListener('DOMContentLoaded', init);

function init(event) {
	SVG = document.querySelector('#main_svg');
	SVG.setAttribute('width', WIDTH);
	SVG.setAttribute('height', HEIGHT);
	SVG.addEventListener('contextmenu', function (event) {
		event.preventDefault();
	});
}