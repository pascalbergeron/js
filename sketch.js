function Drawer(x, y) {
	this.pos = createVector(x, y);
	this.vel = createVector(random(-4, 4), random(-4, 4));
	this.size = 10;
	this.c = random(360);

	this.update = function() {
		this.pos.add(this.vel);
		this.vel.rotate(random(-0.3, 0.3));

		if (this.pos.x > width) this.pos.x = 0;
		if (this.pos.x < 0) this.pos.x = width;
		if (this.pos.y > height) this.pos.y = 0;
		if (this.pos.y < 0) this.pos.y = height;
	}

	this.show = function() {
		fill(random(255), random(255), random(255));
		if (this.c > 360) this.c = 0;
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}
}

var d = [];
var num = 200;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//	colorMode(HSB);

	background(random(255), random(255), random(255));

	for (var i = 0; i < num; i++) {
		d[i] = new Drawer(0, 0);
	}
}

function mousePressed() {
	background(random(255), random(255), random(255));
	for (var i = 0; i < num; i++) {
		d[i] = new Drawer(0, 0);
	}
}

function draw() {
	background(0, 2);
	for (var i = 0; i < d.length; i++) {
		d[i].update();
		d[i].show();
	}
}
