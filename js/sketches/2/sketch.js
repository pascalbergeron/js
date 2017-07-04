function Spiral(type) {
	this.pos = createVector(width / 2, height / 2);
	this.size = 10;
	this.angle = 0;
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);
	this.val = 2;

	this.update = function() {
		this.angle += type;
		this.r += this.val;
		this.g += this.val;
		this.b += this.val;
	}

	this.show = function() {
		translate(width / 2, height / 2);
		rotate(this.angle);
		beginShape();
		for (var i = 0; i < 500; i++) {
			fill(this.r, this.g, this.b, 5);
			curveVertex((i * 2) * sin(i / 5.0), (i * 2) * cos(i / 5.0));
		}
		endShape();
	}
}

var s;
var s2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	s = new Spiral(0.5);
	s2 = new Spiral(-0.5)


	strokeWeight(1);
}

function draw() {

	s.update();
	s.show();

	s2.update();
	s2.show();
}
