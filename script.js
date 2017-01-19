'use strict';

var WIDTH = 777; // Board width, px
var HEIGHT = 444; // Board height, px
var SVG; // Board
var CIRCLE; // Circle SVG node (for various aims)
var HOLE_RAD = 21; // Holes' radius, px
var BALL_RAD = 19; // Ball radius, px

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
	CIRCLE = document.querySelector('#circle');
	// create holes
	CIRCLE.setAttribute("r", HOLE_RAD);
	// 1
	var hole = CIRCLE.cloneNode(); 
	hole.setAttribute("cx", 0);
	hole.setAttribute("cy", 0);
	SVG.appendChild(hole);
	// 2
	hole = CIRCLE.cloneNode(); 
	hole.setAttribute("cx", WIDTH / 2);
	hole.setAttribute("cy", 0);
	SVG.appendChild(hole);
	// 3
	hole = CIRCLE.cloneNode(); 
	hole.setAttribute("cx", WIDTH);
	hole.setAttribute("cy", 0);
	SVG.appendChild(hole);
	// 4
	hole = CIRCLE.cloneNode(); 
	hole.setAttribute("cx", WIDTH);
	hole.setAttribute("cy", HEIGHT);
	SVG.appendChild(hole);
	// 5
	hole = CIRCLE.cloneNode(); 
	hole.setAttribute("cx", WIDTH / 2);
	hole.setAttribute("cy", HEIGHT);
	SVG.appendChild(hole);
	// 6
	hole = CIRCLE.cloneNode(); 
	hole.setAttribute("cx", 0);
	hole.setAttribute("cy", HEIGHT);
	SVG.appendChild(hole);
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