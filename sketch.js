var movingRectangle;
var fixedRectangle;

function setup() {
  createCanvas(1000,600);
  fixedRectangle=createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor="pink"
  movingRectangle=createSprite(600, 200, 50, 50);
  movingRectangle.shapeColor="blue"
}

function draw() {
  background("black");  
  movingRectangle.x=World.mouseX
  movingRectangle.y=World.mouseY


  if (movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2
    &&fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2
    ){
movingRectangle.shapeColor="yellow"
fixedRectangle.shapeColor="yellow"


    }

    else{
      movingRectangle.shapeColor="blue"
      fixedRectangle.shapeColor="pink"
    }


  drawSprites();
}