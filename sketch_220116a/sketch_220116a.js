let c1, c2;
function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  background(220);
  c1 = color(255, 179, 13);
  c2 = color(200,64,200);
  for (let i = 0; i <= 0 + height; i++) {
    let inter = map(i, 0, 0 + height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    let d = lerpColor(c2, c1, inter);
    stroke(c);
    line(0, i, 0 + width, i);
    line(0, i, 0 + width, i/5);
    stroke(d);
    fill(d);
    rect(0, 0 + i, width, random(height/2));
  }
  noLoop();
  save("20220116.png");
}
