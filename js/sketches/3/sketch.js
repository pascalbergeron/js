var mic;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	background(0, 51);
	
	var volume = mic.getLevel();
	
	var threshold = 0.05;
	if (volume > threshold) {
		stroke(0);
		fill(random(255), random(255), random(255));
		rect(random(40, width), random( height), volume * 150, volume * 150);
	}
	
	var y = map(volume, 0,1,height,0);
	var ythreshold = map(threshold, 0,1,height,0);
	
	noStroke();
	fill(175);
	rect(0,0,30,height);
	
	fill(0);
	rect(0,y,30,y);
	stroke(0);
	line(0, ythreshold, 29, ythreshold);
}
