<<<<<<< HEAD
var carrier; // this is the oscillator we will hear
var modulator; // this oscillator will modulate the frequency of the carrier

var analyzer; // we'll use this visualize the waveform

// the carrier frequency pre-modulation
var carrierBaseFreq = 220;

// min/max ranges for modulator
var modMaxFreq = 112;
var modMinFreq = 0;
var modMaxDepth = 150;
var modMinDepth = -150;

function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  noFill();

  carrier = new p5.Oscillator('sine');
  carrier.amp(0); // set amplitude
  carrier.freq(carrierBaseFreq); // set frequency
  carrier.start(); // start oscillating

  // try changing the type to 'square', 'sine' or 'triangle'
  modulator = new p5.Oscillator('sawtooth');
  modulator.start();

  // add the modulator's output to modulate the carrier's frequency
  modulator.disconnect();
  carrier.freq( modulator );

  // create an FFT to analyze the audio
  analyzer = new p5.FFT();

  // fade carrier in/out on mouseover / touch start
  toggleAudio(cnv);
}

function draw() {

  // map mouseY to modulator freq between a maximum and minimum frequency
  var modFreq = map(mouseY, height, 0, modMinFreq, modMaxFreq);
  modulator.freq(modFreq);
  

  // change the amplitude of the modulator
  // negative amp reverses the sawtooth waveform, and sounds percussive
  //
  var modDepth = map(mouseX, 0, width, modMinDepth, modMaxDepth);
  modulator.amp(modDepth);

  // analyze the waveform
  waveform = analyzer.waveform();
  
  background(255);

  // draw the shape of the waveform
  stroke(51);
  strokeWeight(10);
  beginShape();
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();

  strokeWeight(1);
  // add a note about what's happening
  text('Fréquence: ' + modFreq.toFixed(3) + ' Hz', 20, 20);
  text('Amplitude: ' + modDepth.toFixed(3), 20, 40);

}

// helper function to toggle sound
function toggleAudio(cnv) {
  cnv.mouseOver(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.touchStarted(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.mouseOut(function() {
    carrier.amp(0.0, 1.0);
  });
=======
var carrier; // this is the oscillator we will hear
var modulator; // this oscillator will modulate the frequency of the carrier

var analyzer; // we'll use this visualize the waveform

// the carrier frequency pre-modulation
var carrierBaseFreq = 220;

// min/max ranges for modulator
var modMaxFreq = 112;
var modMinFreq = 0;
var modMaxDepth = 150;
var modMinDepth = -150;

function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  noFill();

  carrier = new p5.Oscillator('sine');
  carrier.amp(0); // set amplitude
  carrier.freq(carrierBaseFreq); // set frequency
  carrier.start(); // start oscillating

  // try changing the type to 'square', 'sine' or 'triangle'
  modulator = new p5.Oscillator('sawtooth');
  modulator.start();

  // add the modulator's output to modulate the carrier's frequency
  modulator.disconnect();
  carrier.freq( modulator );

  // create an FFT to analyze the audio
  analyzer = new p5.FFT();

  // fade carrier in/out on mouseover / touch start
  toggleAudio(cnv);
}

function draw() {

  // map mouseY to modulator freq between a maximum and minimum frequency
  var modFreq = map(mouseY, height, 0, modMinFreq, modMaxFreq);
  modulator.freq(modFreq);
  

  // change the amplitude of the modulator
  // negative amp reverses the sawtooth waveform, and sounds percussive
  //
  var modDepth = map(mouseX, 0, width, modMinDepth, modMaxDepth);
  modulator.amp(modDepth);

  // analyze the waveform
  waveform = analyzer.waveform();
  
  background(255);

  // draw the shape of the waveform
  stroke(51);
  strokeWeight(10);
  beginShape();
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();

  strokeWeight(1);
  // add a note about what's happening
  text('Fréquence: ' + modFreq.toFixed(3) + ' Hz', 20, 20);
  text('Amplitude: ' + modDepth.toFixed(3), 20, 40);

}

// helper function to toggle sound
function toggleAudio(cnv) {
  cnv.mouseOver(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.touchStarted(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.mouseOut(function() {
    carrier.amp(0.0, 1.0);
  });
>>>>>>> origin/master
}