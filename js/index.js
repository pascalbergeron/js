
// Original
// var colors = new Array(
  // [62,35,255],
  // [60,255,60],
  // [255,35,98],
  // [45,175,230],
  // [255,0,255],
  // [255,128,0]);

// Pale 1 [PAS UTILISÉ ENCORE]
// var colors = new Array(
  // [192,87,70],
  // [173,198,152],
  // [208,227,196],
  // [255,255,255],
  // [80,48,71],
  // [120,133,133]);

  // pale 2[PAS UTILISÉ ENCORE]
// var colors = new Array(
  // [242,84,91],
  // [169,63,85],
  // [25,50,60],
  // [243,247,240],
  // [140,94,88],
  // [8,178,227]);

  // couleur vive
var colors = new Array(
  [237,27,0],
  [168,0,33],
  [0,32,61],
  [0,177,226],
  [136,12,244],
  [245,187,0]);
  
var step = 0;

// var colorIndices = [0,1,2,3];
var colorIndices = [0,2,1,3];

// var gradientSpeed = 0.004;
var gradientSpeed = 0.008;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
    // background: "-webkit-gradient(linear, left bottom, rig ht top, from("+color1+"), to("+color2+"))"}).css({
	background: "-webkit-gradient(radial, center center, 0, center center, 1401, from("+color1+"), color-stop(50%, "+color2+"), to("+color1+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

/////////////////////////////************ *****************/////////////////////
// Mon anim

function aMove() {
    var elem = document.getElementsByTagName("a"); 
    var posY = 10;
    var id = setInterval(frame, 1);
	var moving = true;
    function frame() {
		if (moving) {
			posY += 0.1;
			if (posY >= 14) moving = false;
		}
		else {
			posY -= 0.05;
			if (posY <= 6) moving = true;
		}
		
		for (var i = 0; i < elem.length; i++) {
			elem[i].style.top = posY + 'px';
			//elem[i].style.paddingTop = Math.random() * 50 + "px";
		}
		//clearInterval(id);
    }
}
