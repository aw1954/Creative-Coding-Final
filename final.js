let phoneButton;
let labelButton;
let sparkle;
let sparkles = [];
let sparkles2 = [];
var sceneCount = 1;
var buttonColor;
var isShifted = false;
var shiftX = 0;

function preload(){ //preloading all images, referenced from shiffman
	phonebase = loadImage("phonebase.png"); 
	phone = loadImage("phone.png");
	landscape = loadImage("landscape.png");
	label = loadImage("label.png");
	footprints = loadImage("footprints.png");
	dusttrail = loadImage("dusttrail.png");
	brokenExhibit = loadImage("brokenexhibit.png");
	path = loadImage("path.png");
	path1 = loadImage("path1.png");
	path2 = loadImage("path2.png");
	path3 = loadImage("path3.png");
	rainbow = loadImage("rainbow.png");
	backtrack = loadImage("backtrack.png");
	sparkle = loadImage("sparkle.png");
}

function setup() {
	let buttonColor = color(0,0,0,0);
	background(0); //black bg
  createCanvas(822, 600); //based on film noir aspect ratio
	angleMode(DEGREES); //change from radians to degrees
	
	phoneButton = createButton('');
	phoneButton.style('background-color', buttonColor);
	phoneButton.style('border',buttonColor);
	phoneButton.style('outline','none');
	phoneButton.size(176,44); 
  phoneButton.position(304,180);
  phoneButton.mousePressed(changeScene);
	
	labelButton = createButton('');
	labelButton.style('background-color', buttonColor);
	labelButton.style('border',buttonColor);
	labelButton.style('outline','none');
	labelButton.size(150,154); 
  labelButton.position(342,428);
	
	dustButton = createButton('');
	dustButton.style('background-color', buttonColor);
	dustButton.style('border',buttonColor);
	dustButton.style('outline','none');
	dustButton.size(293,45); 
  dustButton.position(280,358);
	
	printButton = createButton('');
	printButton.style('background-color', buttonColor);
	printButton.style('border',buttonColor);
	printButton.style('outline','none');
	printButton.size(381,147); 
  printButton.position(440,452);
	
	bushButton = createButton('');
	bushButton.style('background-color', buttonColor);
	bushButton.style('border',buttonColor);
	bushButton.style('outline','none');
	bushButton.size(137,151); 
  bushButton.position(477,316);
	
	path1Button = createButton('');
	path1Button.style('background-color', buttonColor);
	path1Button.style('border',buttonColor);
	path1Button.style('outline','none');
	path1Button.size(114,226); 
  path1Button.position(40,295);
	
	path2Button = createButton('');
	path2Button.style('background-color', buttonColor);
	path2Button.style('border',buttonColor);
	path2Button.style('outline','none');
	path2Button.size(109,175); 
  path2Button.position(292,295);
	
	path3Button = createButton('');
	path3Button.style('background-color', buttonColor);
	path3Button.style('border',buttonColor);
	path3Button.style('outline','none');
	path3Button.size(148,205); 
  path3Button.position(604,295);
	
	for(let i=0; i < 4000; i = i+20){
		var sparkleX = random(276,569);
		var sparkleY = random(356,400);
		sparkles[i] = new Sparkle(sparkleX,sparkleY);
	}
	for(let i=0; i < 600; i = i+20){
		var sparkle2X = random(276,300);
		var sparkle2Y = random(400,600);
		sparkles2[i] = new Sparkle(sparkle2X,sparkle2Y);
	}
}

function draw() {
  background(0); //black bg
	print(mouseX, mouseY);
	print(sceneCount);
	image(phonebase,0,0); //initial phone base
	ring();
	scene2();
	scene3();
	scene4();
	scene5();
	scene6();
	scene7();
	scene8();
	scene9();
}

function ring(){
	push();
	translate(392,191);
	rotate(random(-2,2));
	image(phone,-392,-191);
	pop();
}

function scene2(){
	if (sceneCount == 2){
  	phoneButton.mousePressed(retire);
		frameRate(10);
		background(random([0,150])); 
		image(brokenExhibit,0,0);
  	labelButton.mousePressed(changeScene);
	}
}

function scene3(){
	if(sceneCount == 3){
  	labelButton.mousePressed(retire);
		frameRate(60);
		background(0);
		image(label,0,0);
		for(let i=0; i < 4000; i=i+20){
			sparkles[i].display();
			sparkles[i].fall();
		}
		for(let i=0; i < 600; i=i+20){
			sparkles2[i].display();
			sparkles2[i].fall();
		}
  	dustButton.mousePressed(changeScene);
	}
}

function scene4(){
	if(sceneCount == 4){
  	dustButton.mousePressed(retire);
		background(0);
		image(footprints,0,0);
		printButton.mousePressed(changeScene);
	}
}

function scene5(){
	if(sceneCount == 5){
  	printButton.mousePressed(retire);
		background(0);
		sideScroll();
		image(landscape,0,0);
		bushButton.mousePressed(changeScene);
	}
}

function scene6(){
	if(sceneCount == 6){
  	bushButton.mousePressed(retire);
		background(0);
		image(path,0,0);
		path1Button.mousePressed(changeScene);
		path2Button.mousePressed(skipScene);
		path3Button.mousePressed(doubleskipScene);
	}
}

function scene7 (){
	if(sceneCount == 7){
		path1Button.mousePressed(retire);
		path2Button.mousePressed(retire);
		path3Button.mousePressed(retire);
  	background(0);
		image(path1,0,0);
	}
}

function scene8(){
	if(sceneCount == 8){
		path1Button.mousePressed(retire);
		path2Button.mousePressed(retire);
		path3Button.mousePressed(retire);
  	background(0);
		image(path2,0,0);
	}
}

function scene9(){
	if(sceneCount == 9){
		path1Button.mousePressed(retire);
		path2Button.mousePressed(retire);
		path3Button.mousePressed(retire);
  	background(0);
		image(path3,0,0);
	}
}

function changeScene() {
  if (sceneCount < 10){
		sceneCount++;
	}
}

function skipScene() {
  if (sceneCount < 10){
		sceneCount = sceneCount + 2;
	}
}

function doubleskipScene() {
  if (sceneCount < 10){
		sceneCount = sceneCount + 3;
	}
}

class Sparkle{
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	display(){
		image(sparkle,this.x, this.y);
	}
	fall(){
		if(mouseX == this.x && mouseY == this.y){
			if(this.y < 603){
				this.y = this.y + 10;
			}
		}
	}
}

function sideScroll(){
	if(isShifted == false){
		if(mouseX > 780 && mouseX < 823){
			translate(-shiftX,0);
			shiftX = shiftX + 8;
		}
		if(shiftX > 487){
			 isShifted = true;
  	}
	}
	if(isShifted == true){
		translate(-487,0);
	}
	//print(isShifted);
	//print(shiftX);
}

function retire(){
}