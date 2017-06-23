function Drop() {
	this.pos = createVector(random(-100, width), random(height));
	this.vel = createVector(random(1,1.5), 8);
	this.acc = createVector(0, 0.4);
	this.c = random(50, 75);
	
	this.update = function() {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		
		if (random() < 0.1) this.acc.x = random(0.1,1);
		if (this.acc.x > 0) this.acc.x -= 0.1;
		
		if (this.pos.y > height) {
			this.pos.x = random(-100, width);
			this.pos.y = random(0, -height / 2);
			this.vel = createVector(random(1,1.5), 8);
		}
	}
	
	this.show = function() {
		line(this.pos.x, this.pos.y, this.pos.x + this.vel.x, this.pos.y + random(15,25));
	}
}

var d = [];
var num = 700;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	stroke(95);
	strokeWeight(1);
	
	for (var i = 0; i < num; i++) {
		d[i] = new Drop();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0, 170);
	this.drawingContext.clearRect(0, 0, width, height);
	
	for (var i = 0; i < d.length; i++) {
		d[i].update();
		d[i].show();
	}
}