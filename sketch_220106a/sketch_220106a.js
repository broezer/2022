const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  c1 = color(200, 0, 60);
  c2 = color(40, 200, 80);
  c3 = color(200, 200, 80); 
  
  setGradient(0, 0, width, height, c1, c2, c3, X_AXIS);
  
  fill(255)
  textFont('Courier');
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  textSize(48);
  let s = 'my friends don\'t do genart -_-';
  translate(0, height/20);
  for(let z = 0; z < 10; z+=1){
    text(s, width/2, height/11 * z);
  }
  
  
  
}


function mouseClicked() {
    saveCanvas('20220106', 'png');
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
