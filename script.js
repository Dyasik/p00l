'use strict';

var WIDTH = 777; // Board width, px
var HEIGHT = 444; // Board height, px
var SVG; // Board

var RED = 0;
var YELLOW = 1;
var WHITE = 2;
var BLACK = 3;

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

/*
* Ball object.
*
* @param x Number X coord
* @param y Number Y coord
* @param color Number Ball color
*
* @returns Object Ball instance 
*/
function Ball(x, y, color) {
	var v = {
		x: 0,
		y: 0
	}
	var p = {
		x: x,
		y: y
	}
	function move() {
		p.x += v.x;
		p.y += v.y;
	}

	return {
		v: v,
		move: move,
		getPos: function() { 
			return {
				x: p.x, 
				y: p.y
			} 
		},
		getColor: function() {
			return color
		}
	}
}