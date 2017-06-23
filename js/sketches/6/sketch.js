function Ball(x, y) {
	this.pos = createVector(x, y);
	this.vel = p5.Vector.random2D();
	this.radius = 100;
	
	this.update = function() {
		this.pos.x += this.vel.x * 10;
		this.pos.y += this.vel.y * 10;
		
		if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
		if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
	}
}

var ball;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(200, 200);
	
	pixelDensity(1);
	
	ball = new Ball(width / 2, height / 2);
}

function draw() {
	background(0);
	
	loadPixels();
	for (var x = floor(ball.pos.x - ball.radius); x < ball.pos.x + ball.radius; x += 6) {
		for (var y = floor(ball.pos.y - ball.radius); y < ball.pos.y + ball.radius; y += 6) {
			var index = (x + y * width) * 4;
			//var d = dist(x, y, ball.pos.x, ball.pos.y);
			var d = map(dist(x, y, ball.pos.x, ball.pos.y), 0, ball.radius, 255, 0);
			pixels[index+0] = d * Math.random();
			pixels[index+1] = d * Math.random();
			pixels[index+2] = d * Math.random();
			pixels[index+3] = 255; 
		}
	}
	updatePixels();
	
	ball.update();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}