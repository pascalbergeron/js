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
		fill(this.c, 100, 100);
		this.c++;
		if (this.c > 360) this.c = 0;
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}
}

var d = [];
var num = 500;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);

	background(0);

	for (var i = 0; i < num; i++) {
		d[i] = new Drawer(width / 2, height / 2);
	}
}

function mousePressed() {
	background(0);
	for (var i = 0; i < num; i++) {
		d[i] = new Drawer(mouseX, mouseY);
	}
}

function draw() {
	for (var i = 0; i < num; i++) {
		d[i].update();
		d[i].show();
	}
}
