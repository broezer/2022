const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
const points = [];

function setup() {
  createCanvas(2000,2000, WEBGL);
  
  c1 = color(0, 10, 36);
  c2 = color(0, 180, 180);
  c3 = color(0, 10, 90);
  
  let buffer = 10;
  for (let i = 0; i < 1000; i++) {
    points.push(
      createVector(
        random(buffer, width - buffer),
        random(buffer, height - buffer)
      )
    );
  } 
}

function draw() {
  translate(-width/2, -height/2);
  background(0);
  
  noStroke();
  fill(255);
  push();
  translate(0, 0, width/5);
  rotateX(QUARTER_PI - QUARTER_PI/2);
   for (let p of points){
      //rect(p.x, p.y, width/1000, height/10);  
      setGradient(p.x, p.y , width/1000 , height/10 , c1, c2, c3, Y_AXIS);
   }
   pop();
   
   
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}
