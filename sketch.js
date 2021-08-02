var path,pathImg;
var runner, runnerani;
var invisibleBoundary,invisibleBoundary2 ;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerani = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(150,200,10,10);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1;
  runner = createSprite(150,200,5,5);
  runner.addAnimation("runner", runnerani);
  runner.scale = 0.05;
  runner.x = World.mouseX;
  
  invisibleBoundary = createSprite(25,200,10,400);
  invisibleBoundary.visible = false;
  
}

function draw() {
 
  background("white");
  if(path.y > 400 ) {
    path.y = height/2;
  }
  runner.collide(invisibleBoundary);
  drawSprites();
}
