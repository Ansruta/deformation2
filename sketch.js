var speed,weight;
var car;
var wall;
var deform;


function setup() {
  createCanvas(1600,400);
  car=createSprite(100, height/2, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";
  wall=createSprite(1500, 200, 60, height/2);
  
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(20); 
 if(car.x-wall.x<car.width/2+wall.width/2){
   car.velocityX=0;
   var deform=0.5*weight*car.velocityX*car.velocityX/22509;
 
  if(deform>180){
    car.shapeColor="red";
  }
   if(deform>100&&deform<180){
    car.shapeColor="yellow";
  }
  if(deform<100){
    car.shapeColor="green";
  }
}
  drawSprites();
}