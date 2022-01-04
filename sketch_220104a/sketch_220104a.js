const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
const points = []
const mult = 0.005

function setup() {
  createCanvas(1000, 1000)
  
  angleMode(DEGREES)
  noiseDetail(1)
  c1 = color(30);
  c2 = color(240);
  c3 = color(30);
  background(0)
  let density = 5
  let space = width / density
  
  for (let x = 0; x < width; x+= space){
    for (let y =0; y < height; y += space){
      let p = createVector(x,y);
      points.push(p)
    }
  }
}

function draw() {
  noStroke()
  
  fill(255)
  translate(width/10,0);
  for (var i = 0; i < points.length; i++){
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720 )
    points[i].add(createVector(cos(angle), sin(angle)))
    setGradient(points[i].x, points[i].y, 1 , height / 10 , c1, c2, c3, Y_AXIS);
  }
  
  for (var i = 0; i < points.length; i++){
    let angle = map(noise(-points[i].x * mult, -points[i].y * mult), 0, 1, 0, 720 )
    points[i].add(createVector(cos(angle), sin(angle)))
    setGradient(points[i].x, points[i].y, width/10 , 1 , c1, c2, c3, X_AXIS);
  }
}

function mouseClicked() {
    saveCanvas('flowfield', 'png');
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
