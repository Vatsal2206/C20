var fixedRect, movingRect;

function setup() {
  createCanvas(500,500);
  
  fixedRect = createSprite(250, 250, 50, 50);
  fixedRect.shapeColor = "black";
  fixedRect.debug = true;

  movingRect = createSprite(250, 150, 50, 50);
  movingRect.shapeColor = "black";
  movingRect.debug = true;

}

function draw() {
  background("brown"); 
  
  console.log(movingRect.y - fixedRect.y);
  console.log(movingRect.height/2 + fixedRect.height/2);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2  &&
     movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
      fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){

    movingRect.shapeColor = "cream";
    fixedRect.shapeColor = "cream";

  }else{
    movingRect.shapeColor = "black";
    fixedRect.shapeColor = "black";
  }
  
  drawSprites();
}