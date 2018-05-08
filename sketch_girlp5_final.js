var ear;
var num = 0;

function setup() {
  createCanvas(440,520);
  background(255);
  noStroke();
  ear = loadImage("girl.png");
  ear.loadPixels();
}

function draw() {
  if(num==0) {
    Blurring();
  }
  
  if(num==1) {
    SecondDraw();
  }
}

function Blurring() {
  noStroke();
  frameRate(60);
  var x = int(mouseX);
  var y = int(mouseY);
  
  var loc = ear.get(x,y);
  fill(loc,100);
  triangle(x,y,x+random(30),y-random(30),x+random(30),y+random(30));
  

}

function SecondDraw() {
  background(0);
  frameRate(5);
  var circleX = new Array (20);
  var circleY = new Array (20);
  var size =  new Array (20);
 
  for(var i=0; i<20; i++) {
    circleX[i] = random(440);
    circleY[i] = random(520);
    size[i] = random(100);
  }
  for(var i=0; i<20; i++) {
    noStroke();
    fill(random(0,256),random(0,256),random(0,256),random(0,200));
    ellipse(circleX[i],circleY[i],size[i],size[i]);
  }

  strokeWeight(int(random(10)) );
  stroke(random(0,255),random(0,255),random(0,255),random(0,200));
  line(random(0,440),random(0,520),random(0,440),random(0,520));

}
function mousePressed() {
  if(num==1) {
    num=0;
    background(255);
  }
  else if(num==0) {
    num=1;
  }
}