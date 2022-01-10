//https://massmoca.org/event/walldrawing413/
let c1, c2, c3;
function setup() {
  createCanvas(1000, 1000);
  background(238, 230, 217);
  
  translate(width/150, height/150);
  fourByfour(0, 0, width/2 - width/75, height/2 - height/75);
  fourByfour(width/2, 0, width/2 - width/75, height/2 - height/75);

  fourByfour(0, height/2, width/2 - width/75, height/2 - height/75);
  fourByfour(width/2, height/2, width/2 - width/75, height/2 - height/75);
  
}


function fourByfour(x,y, width, height){
  c1 = color(253, 221, 48);
  c2 = color(232, 110, 121);
  c3 = color(119, 186, 212);
  c4 = color(222, 209, 190);
  
  const colors = [c1, c2, c3, c4];
  const colorNames = ["yellow", "salmon", "blue", "taupe"];
  
  noStroke();
  textSize(52);
  textAlign(CENTER);
  //const firstColor = colors[random];
  const random = Math.floor(Math.random() * colors.length);

  let index01 = colors.indexOf(colors[random]);
  let color01 = colorNames[index01];
  let colorIndex01 = colorNames.indexOf(color01);
  
  let firstColor = colors[random];
  fill(colors[random]);
  rect(x, y, width/2, height/2)
  
  
  if (index01 > -1) {
      colors.splice(index01, 1);
      colorNames.splice(colorIndex01,1);
      
  }
  
  const random02 = Math.floor(Math.random() * colors.length);
  
  fill(colors[random02]);
  text(color01, x + width/4, y + height/4 + 12)
  
  let index02 = colors.indexOf(colors[random02]);
  let color02 = colorNames[index02];
  let colorIndex02 = colorNames.indexOf(color02);
  
  
  rect( x + width/2, y, width/2, height/2)

  if (index02 > -1) {
      colors.splice(index02, 1);
     colorNames.splice(colorIndex02,1);
  }
  
  const random03 = Math.floor(Math.random() * colors.length);
  
  
  let index03 = colors.indexOf(colors[random03]);
  let color03 = colorNames[index03];
  let colorIndex03 = colorNames.indexOf(color03);
  
  fill(colors[random03]);
  rect(x + width/2,  y + height/2, width/2, height/2);
  text(color02, x + width/2 + width/4, y + height/4 + 12)

  
  
  if (index03 > -1) {
      colors.splice(index03, 1);
      colorNames.splice(colorIndex03,1);
  }
  fill(colors[0]);
  rect(x, y + height/2, width/2, height/2);
  text(color03, x + width/2 + width/4, y + height/2 + height/4 + 12)
  
  fill(firstColor);
  
  text(colorNames[0], x + width/4, y + height/2 + height/4 + 12)

  
}

function mouseClicked() {
    saveCanvas('20220110', 'png');
}
