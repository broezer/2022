function setup() {
  createCanvas(1000, 1000);
  frameRate(50);
  background(250);
  colorMode(HSB);
}

function draw() {
  
  noStroke();
  
  translate(0,-height/4)
  
  fill(360,80,80, 0.5)
  circle(width/4, height/2, width/2)
  fill(360/3,80,80, 0.5)
  circle(width/2, height/2, width/2)
  fill((360/3) * 2,80,80, 0.5)
  circle(width/2 + width/4, height/2, width/2)
  
  translate(0,height/4)
  
  fill(360/3,80,80, 0.5)
  circle(width/4, height/2, width/2)
  fill((360/3) * 2,80,80, 0.5)
  circle(width/2, height/2, width/2)
  fill(360,80,80, 0.5)
  circle(width/2 + width/4, height/2, width/2)
  
  translate(0,height/4)
  
  fill((360/3) * 2,80,80, 0.5)
  circle(width/4, height/2, width/2)
  fill(360,80,80, 0.5)
  circle(width/2, height/2, width/2)
  fill(360/3,80,80, 0.5)
  circle(width/2 + width/4, height/2, width/2)
  
  noLoop();
  save("2022017.png")

}
