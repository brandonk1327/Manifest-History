var testp = new pin();
var posArray = [];
var mci = 0;

function setup()
{
	createCanvas(windowWidth, windowWidth);
//	canvas.position(0,0);
//	canvas.style('z-index', '-1');
	//colorMode(HSB,360,100,100);
	//background(92,219,149);
	background(255);
	textSize(48);
}

function draw()
{
	background(255);
	testp.drawPinT2(mouseX,mouseY);	

	for (var i = 0; i < mci; i++)
	{
		drawPlacedPins(posArray[i].x,posArray[i].y,i);
	}
}

function mouseClicked()
{
	placePin();	
}

function pin() {
	this.drawPinT1 =
	function(x,y) {
	fill(0);
	stroke(0);
    ellipse(x,y-150,100,100);
	strokeWeight(5);
	line(x,y-150,x,y);
	};

	this.drawPinT2 =
	function(x,y) {
	fill(0);
	stroke(0);
    ellipse(x,y-150,100,100);
	fill(255);
	ellipse(x,y-150,85,85);
	strokeWeight(5);
	triangle(x-50,y-150,x,y,x+50,y-150);
	};

	this.drawPinT3 =
	function(x,y) {
	fill(0);
	stroke(0);
    ellipse(x,y-150,100,100);
	fill(255);
	ellipse(x,y-150,75,75);
	strokeWeight(5);
	triangle(x-50,y-150,x,y,x+50,y-150);
	ellipse(x,y-150,75,75);
	};
}

function placePin()
{
		mci++;
		var tp = createVector(mouseX,mouseY);
		posArray.push(tp);
}

function drawPlacedPins(x,y,pn)
{
		var tp = new pin();
		tp.drawPinT2(x,y);
		fill(0);
		text(pn.toString(),x-15,y-75);
}
