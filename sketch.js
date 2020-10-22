var rect1, rect2;

function setup() {
  createCanvas(400,400);

  rect1=createSprite(200,300,50,50);
  rect1.shapeColor="blue";
  rect2=createSprite(200,100,50,50);
  rect2.shapeColor="blue";

}

function draw() {

  background(0,0,0);  

  rect1.x=mouseX;
  rect1.y=mouseY;

  if(rect1.x-rect2.x<(rect1.width
    +rect2.width)/2 && rect2.x-rect1.x<(rect1.width
      +rect2.width)/2 && rect1.y-rect2.y<(rect1.height
        +rect2.height)/2 && rect2.y-rect1.y<(rect1.height
          +rect2.height)/2) {
      rect1.shapeColor="red";
    }
  else{
    rect1.shapeColor="blue";
  }

  console.log(rect1.x-rect2.x);

  drawSprites();
}