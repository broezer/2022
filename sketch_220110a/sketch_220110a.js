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
  
  random = Math.floor(Math.random() * colors.length);
  color01 = colors[random];
  index01 = colors.indexOf(colors[random]);
  color01Name = colorNames[index01];
  
  if (index01 > -1) {
      colors.splice(index01, 1);
      colorNames.splice(index01, 1);
      
  }
  
  random02 = Math.floor(Math.random() * colors.length);
  color02 = colors[random02];
  index02 = colors.indexOf(colors[random02]);
  color02Name = colorNames[index02];
  if (index02 > -1) {
      colors.splice(index02, 1);
      colorNames.splice(index02, 1);
  }
  
  random03 = Math.floor(Math.random() * colors.length);
  color03 = colors[random03];
  index03 = colors.indexOf(colors[random03]);
  color03Name = colorNames[index03];
 
  if (index03 > -1) {
      colors.splice(index03, 1);
      colorNames.splice(index03, 1);
  }
  
  color04 = colors[0]
  color04Name = colorNames[0];


  fill(color03);
  rect(x + width/2,  y + height/2, width/2, height/2);

  fill(color01);
  rect(x, y, width/2, height/2)
  
  fill(color04);
  rect(x, y + height/2, width/2, height/2);
  
  fill(color02);
  rect( x + width/2, y, width/2, height/2)
  
  text(color01Name, x + width/2 + width/4, y + height/2 + height/4 + 12);
  
  fill(color03);
  text(color02Name, x + width/4, y + height/2 + height/4 + 12);
  
  fill(color04);
  text(color03Name, x + width/4, y + height/4 + 12);
  
  fill(color01);
  text(color04Name, x + width/2 + width/4, y + height/4 + 12);

  
}

function mouseClicked() {
    saveCanvas('20220110', 'png');
}
