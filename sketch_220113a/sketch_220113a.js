// Based on https://editor.p5js.org/cacheflowe/sketches/JWQn2Wn4E
// A template for rendering a looping animation to video file.
// Step 1:
// Import the following Javascript in index.html:
// <script type="module" src="https://cacheflowe.github.io/haxademic.js/src/p5-recorder.es6.js"></script>
// Step 2: 
// Copy the code above `setup()` below
// Step 3:
// In `draw()` call `updateLoopRecording()` after you've draw your stuff:
// `if(saveVideo) updateLoopRecording();`
// Step 4:
// Download your video with the button that shows up under your sketch
// Step 5:
// Convert your downloaded .webm video to mp4 here: 
// https://ffmpegwasm.netlify.app/

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Editable properties:
// Edit `loopFrames` to change the loop duration
// And disable `saveVideo` while you're working on your sketch
var loopFrames = 400; // 8-second loop (50fps * 8)
let saveVideo = true;
let xStep = 0;

// Loop properties that help you loop elements in your animation.
// These are updated in `updateLoopRecording()`
let frameCountLooped = 1;
let loopProgress = 0;
let loopProgressRadians = 0;

// call this function at the end of `draw()`
var recorder = null;
function updateLoopRecording() {
  // create a looped framecount & normalized progress
  frameCountLooped = frameCount % loopFrames;
  loopProgress = frameCountLooped / loopFrames;
  loopProgressRadians = loopProgress * TWO_PI;
  // update video recorder
  if(saveVideo) {
    if(!recorder) recorder = new p5Recorder(loopFrames);
    recorder.renderVideo();
  }
}
/////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////////


function setup() {
  createCanvas(800, 80);
  frameRate(50);
  background('black');
}

function draw() {;
  
                
  rotate(QUARTER_PI);
  translate(0, -height * 2);
  drawLoopedShapes();
                 
  rotate(-HALF_PI);
  translate(-width, width/2);
  drawLoopedShapes();
  updateLoopRecording();

}

function drawLoopedShapes() {
  // draw something on a loop!
  
  var w = width;
  var h = height;
  //background('black');
  
  to = color(0, 240, 200, 255);
  from = color(200, 0, 200, 255);
  
  push();
    for (var i=0; i< w; i+=10){
      let inter = 0.008 * i;
      //console.log(inter);
      let c = lerpColor(from, to, inter);
      fill(c)
      //rectMode(CENTER)
      rect(0, ((h/i) * xStep/4) + h/2, w*2, (h/10));
      rect(0, ((-h/i) * xStep/4) + h/2 - (h/10), w*2, (h/10));
    }
  pop();

  xStep = xStep + (0.9 * sin(loopProgressRadians));
}
