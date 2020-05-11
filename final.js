let phoneButton;
let labelButton;
let sparkle;
let sparkles = [];//array
let sparkles2 = []; //array
var sceneCount = 1; //to change scenes later
var buttonColor; //transparency
var isShifted = false; //for scene 5
var shiftX = 0; //for scene 5

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
	
	phoneButton = createButton(''); //middle of receiver
	phoneButton.style('background-color', buttonColor); //"transparency"
	phoneButton.style('border',buttonColor); //remove outline
	phoneButton.style('outline','none'); //remove highlight
	phoneButton.size(176,44); 
  phoneButton.position(304,180);
  phoneButton.mousePressed(changeScene); //go on to next scene
	
	labelButton = createButton(''); //museum label
	labelButton.style('background-color', buttonColor);
	labelButton.style('border',buttonColor);
	labelButton.style('outline','none');
	labelButton.size(150,154); 
  labelButton.position(342,428);
	
	dustButton = createButton(''); //dust on label
	dustButton.style('background-color', buttonColor);
	dustButton.style('border',buttonColor);
	dustButton.style('outline','none');
	dustButton.size(293,45); 
  dustButton.position(280,358);
	
	printButton = createButton(''); //footprints in the corner
	printButton.style('background-color', buttonColor);
	printButton.style('border',buttonColor);
	printButton.style('outline','none');
	printButton.size(381,147); 
  printButton.position(440,452);
	
	bushButton = createButton(''); //split section in bush
	bushButton.style('background-color', buttonColor);
	bushButton.style('border',buttonColor);
	bushButton.style('outline','none');
	bushButton.size(137,151); 
  bushButton.position(477,316);
	
	path1Button = createButton(''); //fairy nest
	path1Button.style('background-color', buttonColor);
	path1Button.style('border',buttonColor);
	path1Button.style('outline','none');
	path1Button.size(114,226); 
  path1Button.position(40,295);
	
	path2Button = createButton(''); //ocean scene
	path2Button.style('background-color', buttonColor);
	path2Button.style('border',buttonColor);
	path2Button.style('outline','none');
	path2Button.size(109,175); 
  path2Button.position(292,295);
	
	path3Button = createButton(''); //forest scene
	path3Button.style('background-color', buttonColor);
	path3Button.style('border',buttonColor);
	path3Button.style('outline','none');
	path3Button.size(148,205); 
  path3Button.position(604,295);
	
	for(let i=0; i < 4000; i = i+20){ //main sparkle array
		var sparkleX = random(276,569);
		var sparkleY = random(356,400);
		sparkles[i] = new Sparkle(sparkleX,sparkleY);
	}
	for(let i=0; i < 600; i = i+20){ //sparkle trail going downwards
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

function ring(){ //phone scene
	push();
	translate(392,191); //push center
	rotate(random(-2,2)); //phone ringing movement
	image(phone,-392,-191); //set png on center
	pop();
}

function scene2(){ //broken glass scene
	if (sceneCount == 2){
  	phoneButton.mousePressed(retire); //disable phoneButton
		frameRate(10); //slow down framerate
		background(random([0,150])); //flashing siren effect
		image(brokenExhibit,0,0);
  	labelButton.mousePressed(changeScene); //click on label
	}
}

function scene3(){ //label close-up scene
	if(sceneCount == 3){
  	labelButton.mousePressed(retire); 
		frameRate(60); //reset framerate
		background(0); //repaint background
		image(label,0,0); 
		for(let i=0; i < 4000; i=i+20){ //main sparkle array
			sparkles[i].display(); 				//covering description
			//sparkles[i].fall();
		}
		for(let i=0; i < 600; i=i+20){ //dust trail going down
			sparkles2[i].display(); 
			//sparkles2[i].fall();
		}
  	dustButton.mousePressed(changeScene);
	}
}

function scene4(){ //footprint scene
	if(sceneCount == 4){
  	dustButton.mousePressed(retire); 
		background(0);
		image(footprints,0,0);
		printButton.mousePressed(changeScene);
	}
}

function scene5(){ //landscape scene
	if(sceneCount == 5){
  	printButton.mousePressed(retire);
		background(0);
		sideScroll(); //hover side-scrolling effect
		image(landscape,0,0);
		bushButton.mousePressed(changeScene);
	}
}

function scene6(){ //three paths scene
	if(sceneCount == 6){
  	bushButton.mousePressed(retire);
		background(0);
		image(path,0,0);
		path1Button.mousePressed(changeScene); //+1 scene
		path2Button.mousePressed(skipScene); //+2 scene
		path3Button.mousePressed(doubleskipScene); //+3 scene
	}
}

function scene7 (){ //path1 (fairy nest)
	if(sceneCount == 7){
		path1Button.mousePressed(retire); //disable
		path2Button.mousePressed(retire); //all
		path3Button.mousePressed(retire); //buttons
  	background(0);
		image(path1,0,0);
	}
}

function scene8(){ //path2 (ocean scene)
	if(sceneCount == 8){
		path1Button.mousePressed(retire);
		path2Button.mousePressed(retire);
		path3Button.mousePressed(retire);
  	background(0);
		image(path2,0,0);
	}
}

function scene9(){ //path3 (forest scene)
	if(sceneCount == 9){
		path1Button.mousePressed(retire);
		path2Button.mousePressed(retire);
		path3Button.mousePressed(retire);
  	background(0);
		image(path3,0,0);
	}
}

function changeScene() { //function to move on to next scenes
  if (sceneCount < 10){ //max number of scenes
		sceneCount++;
	}
}

function skipScene() { //+2 scenes
  if (sceneCount < 10){
		sceneCount = sceneCount + 2;
	}
}

function doubleskipScene() { //+3 scenes 
  if (sceneCount < 10){
		sceneCount = sceneCount + 3;
	}
}

class Sparkle{ //sparkles for array
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	display(){
		image(sparkle,this.x, this.y);
	}
	/*fall(){
		if(mouseX == this.x && mouseY == this.y){ //i couldn't get this
			if(this.y < 603){ 											//to work, i'm suspecting
				this.y = this.y + 10;									//it's the mouseX and mouseY..
			}
		}
	}*/
}

function sideScroll(){ //hover sidescrolling effect for scene 5
	if(isShifted == false){ //hasn't been fully shifted yet
		if(mouseX > 780 && mouseX < 823){ //mouse in specific range on side
			translate(-shiftX,0);						//translate canvas to the left
			shiftX = shiftX + 8;						//by increments of 8
		}
		if(shiftX > 487){									//once it meets the edge of the png
			 isShifted = true;							//it becomes fully shifted
  	}
	}
	if(isShifted == true){							//once it fully shifted it went back so
		translate(-487,0);								//i used this to keep it in place
	}
	//print(isShifted);
	//print(shiftX);
}

function retire(){	//disable effect
}
