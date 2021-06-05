let ic, end;
let childabuse;
let sad1, sad2, sad3, sad4, sad5, sad6, sad7;
let smile1, smile2, smile3, smile4, smile5, smile6, smile7;
let bg;


const maxXChange = 120;
const maxYChange = 5;
const yNoiseChange = 0.01;
const mouseYNoiseChange = 0.3;
const timeNoiseChange = 0.013;

let inverted = false;
let ix = 0;
let iy = 0;

let y1, y2, y3, y4, y5, y6, y7 = 0;

function preload(){
  bg = loadImage('bg.jpg');
    ic=loadSound('ic.mp3');
  end = loadSound('end.mp3');
  childabuse = loadJSON('childabuse.json');
  sad1 = loadImage('1m.png');
  sad2 = loadImage('2m.png');
  sad3 = loadImage('3m.png');
  sad4 =loadImage('4m.png');
  sad5 = loadImage('5m.png');
  sad6 = loadImage('6m.png');
  sad7 = loadImage('7m.png');
  smile1 = loadImage('1p.png');
  smile2 = loadImage('2p.png');
  smile3 = loadImage('3p.png');
  smile4 =loadImage('4p.png');
  smile5 = loadImage('5p.png');
  smile6 = loadImage('6p.png');
  smile7 = loadImage('7p.png');
}
function setup() {
  createCanvas(constrain(bg.width - maxXChange * 2, 100, windowWidth), constrain(bg.height - maxYChange * 2, 100, windowHeight));
  background(255);
  image(bg, -maxXChange, -maxYChange);
  for (let i = 0; i < 100; i++) {
    drawStreak();
  }
}
function draw(){
  for (let i = 0; i < bg.height / 60; i++) { 
    drawStreak();
  }
  
  image(bg, ix, iy);
  
  image(smile1,0,y1);
  image(smile2,0,y2);
  image(smile3,0,y3);
  image(smile4,0,y4);
  image(smile5,0,y5);
  image(smile6,0,y6);
  image(smile7,0,y7);
  
  
  
  if(y1=height||y2=height||y3=height||y4=height||y5=height||y6=height||y7=height){
    ix = width;
    iy = height;
  
}
}
function drawStreak() {
  let y = floor(random(height));
  let h = floor(random(20, 30)); 
  let xChange = floor(map(noise(y * yNoiseChange, (mouseY * mouseYNoiseChange + frameCount) * timeNoiseChange), 0.06, 0.94, -maxXChange, maxXChange)); //floor(random(-maxXChange, maxXChange));
  let yChange = floor(xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1);

  if (random() < dist(pmouseX, pmouseY, mouseX, mouseY) / width * 0.3 + 0.0015) filter(POSTERIZE, floor(random(2, 6)));
  if (mouseIsPressed && abs(mouseY - y) < 60) {
    if (!inverted) filter(INVERT);
    inverted = true;
  } else {
    if (inverted) filter(INVERT);
    inverted = false
  }
  
  image(bg, xChange - maxXChange, -maxYChange + y + yChange, bg.width, h, 0, y, bg.width, h);
}
  
