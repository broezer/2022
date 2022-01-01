function setup() {
  createCanvas(2000, 2000);   
  frameRate(50);
}
function draw() {
  background(20);
  var w = width;
  var h = height;
  
  for (var i=0; i<100; i+=1){
    for(var j=0; j<100; j+=1){
      let c = color(255 - (i * 2.5), (i * 2.5) , (j * 2.5) );
      fill(c);
      circle( w/200 + (w/100) * i, h/200 + (h/100) * j, w/100);
    }
  }
  
  save("20220101.png");
  noLoop();
}
