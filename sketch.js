var hr,mn,sec;
var hrAngle,mnAngle,secAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

  
}

function draw() {
  background("black");
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  stroke(255,0,255);
  point(0,0);
  
  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,0,260,260,0,secAngle);

  stroke("green");
  arc(0,0,280,280,0,mnAngle);

  stroke("blue");
  arc(0,0,300,300,0,hrAngle);
}