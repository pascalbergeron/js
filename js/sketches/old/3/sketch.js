var mic;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	background(0, 10);
	
	var volume = mic.getLevel() * 2;
	
	stroke(255);
	fill(random(255), random(255), random(255), 100);
	ellipse(random(width), random(height), volume * 200);
	fill(random(255), random(255), random(255), 100);
	ellipse(random(width), random(height), volume * 200);
	fill(random(255), random(255), random(255), 100);
	ellipse(random(width), random(height), volume * 200);
	fill(random(255), random(255), random(255), 100);
	ellipse(random(width), random(height), volume * 200);
	fill(random(255), random(255), random(255), 100);
	ellipse(random(width), random(height), volume * 200);
	
	
	var y = map(volume, 0,2,height,0);
	
	
	noStroke();
	fill(175);
	rect(0,0,50,height);
	
	fill(175,0,0);
	rect(0,y,50,y);
}
