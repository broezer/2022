function setup() {
  createCanvas(1000, 1000);
  background(220);  
}

function draw() {
  background(220);
  
  fill(0);
  beginShape(); 
  for(let i=0; i< 100  ; i+=1){
    curveVertex(width * random(1), height * random(1));
  }
  endShape();
  noLoop();
  
}

function mouseClicked() {
    saveCanvas('20220108', 'png');
    redraw();
}
