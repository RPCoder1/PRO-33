var snow,snowImg
var bg



function preload() {
bg = loadImage("snow3.jpg")
snowImg = loadImage("snow4.webp")
}


function setup() {
  createCanvas(1000,600);
  snow = createSprite(400, 200, 50, 50);
  snow.addImage(snowImg)
  snow.scale = 0.2
  snow1 = createSprite(100, 50, 50, 50);
  snow1.addImage(snowImg)
  snow1.scale = 0.2
  snow2 = createSprite(200, 300, 50, 50);
  snow2.addImage(snowImg)
  snow2.scale = 0.2
  snow3 = createSprite(300, 200, 50, 50);
  snow3.addImage(snowImg)
  snow3.scale = 0.2
  snow4 = createSprite(600, 40, 50, 50);
  snow4.addImage(snowImg)
  snow4.scale = 0.2
  snow5 = createSprite(450, 100, 50, 50);
  snow5.addImage(snowImg)
  snow5.scale = 0.2
}

function draw() {
  background(bg);  
  drawSprites();
}