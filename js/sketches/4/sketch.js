var col = 0;

function Circle(x, y, r) {
	this.position = createVector(x, y);
	this.radius = r;
	this.color = col;
	
	this.update = function() {
		
		if (this.radius > 0) {
			this.radius -= 2;
			col += 0.01;
			if (col > 360) col = 0;
		}
		
	}
	
	this.show = function() {
		fill(this.color, 100, 100);
		ellipse(this.position.x, this.position.y, this.radius);
	}
}

var circles;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	colorMode(HSB);
	
	circles = new Array();
}

function mouseDragged() {
	circles.push(new Circle(mouseX, mouseY, 150));
}

function draw() {
	background(0);
	
	for (var i = 0; i < circles.length; i++) {
		circles[i].update();
		circles[i].show();
	}
}
