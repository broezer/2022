const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;


function setup() {
  createCanvas(1000, 1000);
  
  c1 = color(200, 200, 30);
  c2 = color(200, 100, 10);
  c3 = color(200, 10, 0);
}

function draw() {
  noStroke();
  fill(255);  
  setGradient(0, 0, width, height, c1, c2, c3, X_AXIS);
  setGradient(width/4, height/4, width/2, height/2, c3, c2, c1, X_AXIS);
  stroke('white');
  line(0, height, width, 0);
}

function mouseClicked() {
    saveCanvas('20220105', 'png');
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
