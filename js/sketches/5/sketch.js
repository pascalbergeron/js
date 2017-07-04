var h = 0;

function Line(x1, y1, x2, y2) {
	this.first = createVector(x1, y1);
	this.second = createVector(x2, y2);
	
	this.update = function() {
		this.second.x = mouseX;
		this.second.y = mouseY;
	}
	
	this.show = function() {
		var x = map(mouseX, 0, width, 0, 1);
		var y = map(mouseY, 0, height, 0, 1);
		h = x * y / 0.5;
		stroke(h, random(0.8, 0.9), random(0.3, 0.5), random(0.15, 0.25));
		line(this.first.x, this.first.y, this.second.x, this.second.y);
	}
}

var lines = []
var step = 25;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 1.0);
	
	// Rangée du haut et du bas
	for (var x = 0; x < width / step; x++) {
		lines.push(new Line(x * step, 0, width / 2, height / 2));		// haut
		lines.push(new Line(x * step, height, width / 2, height / 2));	// bas
	}
	// " de droite et de gauche
	for (var y = 0; y < height / step; y++) {
		lines.push(new Line(0, y * step, width / 2, height / 2));	// gauche
		lines.push(new Line(width, y * step, width / 2, height / 2));	// droite
	}
}

function mouseMoved() {
	for (var i = 0; i < lines.length; i++) {
		lines[i].update();
	}
}

var bg = 0;
var sw = 1;
var growing = true;

function draw() {
	background(bg, 0.8, 0.25, 0.6);
	strokeWeight(sw);
	
	bg = h + h < 0.5 ? 0.5 : -0.5;
	
	if (growing) {
		sw += 0.5;
		if (sw >= 30) growing = false;
	}
	else {
		sw -= 1;
		if (sw <= 3) growing = true;
	}
	
	for (var i = 0; i < lines.length; i++) {
		lines[i].show();
	}
}