var fixedRect, movingRect;
var gameObject1 , gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(500,100,80,40)
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(500,200,80,40)
  gameObject2.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect , gameObject2)){
    movingRect.shapeColor = "blue"
    gameObject2.shapeColor = "yellow"
  } else {
    movingRect.shapeColor = "green"
    gameObject2.shapeColor = "green"
}
  
  drawSprites();
}
function isTouching(cat , dog){
  if (cat.x - dog.x < dog.width/2 + cat.width/2
    && dog.x - cat.x < dog.width/2 + cat.width/2
    && cat.y - dog.y < dog.height/2 + cat.height/2
    && dog.y - cat.y < dog.height/2 + cat.height/2) {
 return true;  
}
else {
  
  return false;
}

}