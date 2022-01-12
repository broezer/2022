let circles;
let spots;

function setup() {
  createCanvas(1000, 1000);
  //frameRate(10);
  circles = [];
}

function draw() {
  background(0);

  //c = new Circle(random(width),random(height));
  //circles.push(c);
  
  let total = 0.0001;
  let count = 0;
  let attempts = 0;
  
  while (count < total){
    let newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 100) {
      noLoop();
      console.log("finished");
      break;
    }
  }
  
  for (let i = 0; i < circles.length; i++){
    let circl = circles[i];
    
    if (circl.growing){
       if (circl.edges()){
         circl.growing = false;
       }else{
         for (let j = 0; j < circles.length; j++) {
          let other = circles[j];
          if (circl !== other) {
            var d = dist(circl.x, circl.y, other.x, other.y);
            var distance = circl.r + other.r;
            if (d - 4 < distance) {
              circl.growing = false;
              break;
            }
          }
        }
         
       }
    }
    circl.show();  
    circl.grow();
  }
}

function newCircle(){
    var x = random(width);
    var y = random(height);
    
    var valid = true;
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i];
      var d = dist(x, y, circle.x, circle.y);
      if (d < circle.r) {
        valid = false;
        break;
      }
    }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
  
}

function mouseClicked() {
    saveCanvas('20220112', 'png');
}
