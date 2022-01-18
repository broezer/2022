let c1, c2;
function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  background(220);
  c1 = color(40, 0, 200);
  c2 = color(0,0,0);
  for (let i = 0; i <= 0 + height; i++) {
    let inter = map(i, 0, 0 + height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    let d = lerpColor(c2, c1, inter);
    stroke(c);
    line(0, i, 0 + width, i-4);
    stroke(d);
    fill(d);
    rect(0, 0 + i, width, random(height/2));
    
  }
  
  c3 = color(200, 0, 10, 1);
  c4 = color(0,0,0, 2);
  for (let i = 0; i <= 0 + height; i++) {
    let inter = map(i, 0, 0 + height, 0, 1);
    let c = lerpColor(c3, c4, inter);
    let d = lerpColor(c4, c3, inter);
    stroke(c);
    line(0, i, 0 + width, i-1);
    stroke(d);
    fill(d);
    rect(0, 0 + i, width, random(height/2));
    
  }
  
  c5 = color(0, 0, 0, 0.1);
  c6 = color(0,255,10, 0.5);
  for (let i = 0; i <= 0 + height; i++) {
    let inter = map(i, 0, 0 + height, 0, 1);
    let c = lerpColor(c5, c6, inter);
    let d = lerpColor(c6, c5, inter);
    stroke(c);
    line(0, i, 0 + width, i-1);
    stroke(d);
    fill(d);
    rect(0, 0 + i, width, random(height/4));
    
  }
  noLoop();
  save("20220118.png");
}
