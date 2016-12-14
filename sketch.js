// Preparatory study for interaction pattern:
// SIMPLE ANIMATION
// This sketch demonstrates how to perform a simple animation when a keyboard event occurs.

// How it works:
// It continuously updates the dimention and the color of a circle untill it kicks a certain limit.
// Look here for KEY CODES: http://keycode.info/

var runAnimation, radius, maxRadius;

function setup() {
  createCanvas(windowWidth,windowHeight);
    
  // define important variables
  runAnimation = false;
  radius = height/4;
  maxRadius = height*0.9;
}

function draw() {
  background(41,162,172);
  fill(240,196,10);
  textAlign(CENTER);
  textSize(14);
  text('PRESS "F" KEY.',width/2,30);
    
    
  if(runAnimation == true) {
    // Animation speed, has to be bigger than 0
    radius += 10; 
    
    // Calculate opacity
    var circleOpacity = map(radius,height/4,maxRadius,255,0);
    
    // Draw ellipse
    fill(240,196,10, circleOpacity);
    noStroke();
    ellipse(width/2,height/2,radius)
    
    // Reset animation when limit is reached
    if(radius > maxRadius) {
      radius = height/4;
      runAnimation = false;
    }
  }
}

function keyPressed() {
  if (keyCode == 70) {
    // Update important variables
    runAnimation = true;
    radius = height/4;
  } 
  return false; // prevent default
}
