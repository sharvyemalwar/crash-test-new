var car1,car2,car3,car4,wall1,wall2,wall3,wall4;
var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight4;
var deform;
var wall5;
function setup() {
  createCanvas(1600,400);
  car1=createSprite(50, 50, 60, 20);
  car2=createSprite(50, 150, 60, 20);
  car3=createSprite(50, 250, 60, 20);
  car4=createSprite(50, 350, 60, 20);

  wall1=createSprite(10,100,3500,10);
  wall2=createSprite(10,200,3500,10);
  wall3=createSprite(10,300,3500,10);
  wall4=createSprite(1250,200,60,400);
  wall5=createSprite(1350,200,60,400);
  
  wall1.shapeColor= color(180,200,80);
  wall2.shapeColor= color(180,200,80);
  wall3.shapeColor= color(180,200,80);
  wall4.shapeColor= color(250,100,70);

  wall5.shapeColor= color(280,100,70);

  speed1 = random(55,90);
  
  speed2 = random(55,110);
  speed3 = random(55,150);
  speed4= random(55,190);

  weight1 = random(400,1500);
  weight2 = random(300,1000);
  weight3 = random(500,2500);
  weight4 = random(200,3500);

}

function draw() {
  background(0); 
  
  //car1.setAnimation("whitecar.png");
  //car1.scale=0.5;

car1.velocityX = speed1;
car2.velocityX = speed2;
car3.velocityX = speed3;
car4.velocityX = speed4;

//crash test for car1
if(wall4.x-car1.x<(car1.width+wall4.width)/2)
{
  car1.velocityX=0;
 var deform = (0.5*weight1*speed1*speed1)/22500;
 if(deform>180){
   //car1.shapeColor = color(255,0,0);
   car1.shapeColor = color(230,230,0);
 }

if(deform<180 && deform>100)
{
  //car1.shapeColor = color(230,230,0);
  car1.shapeColor = color(255,0,0);
}

if(deform<100){
  car1.shapeColor = color(0,255,0);
}
}

//crash test for car2
if(wall4.x-car2.x<(car2.width+wall4.width)/2)
{
  car2.velocityX=0;
 var deform = (0.5*weight1*speed1*speed1)/22500;
 if(deform>180){
   car2.shapeColor = color(255,0,0);
 }

if(deform<180 && deform>100)
{
  car2.shapeColor = color(230,230,0);
}

if(deform<100){
  car2.shapeColor = color(0,255,0);
}
}

//crash test for car3
if(wall4.x-car3.x<(car3.width+wall4.width)/2)
{
  car3.velocityX=0;
 var deform = (0.5*weight1*speed1*speed1)/22500;
 if(deform>180){
   //car3.shapeColor = color(255,0,0);
   car3.shapeColor = color(0,255,0);
 }

if(deform<180 && deform>100)
{
  car3.shapeColor = color(230,230,0);
}

if(deform<100){
  //car3.shapeColor = color(0,255,0);
  car3.shapeColor = color(255,0,0);
  
}
}

//crash test for car4
if(wall4.x-car4.x<(car4.width+wall4.width)/2)
{
  car4.velocityX=0;
 var deform = (0.5*weight1*speed1*speed1)/22500;
 if(deform>180){
   car4.shapeColor = color(255,0,0);
 }

if(deform<180 && deform>100)
{
  car4.shapeColor = color(230,230,0);
}

if(deform<100){
  car4.shapeColor = color(0,255,0);
}
}


car1.bounceOff(wall4);
car1.collide(wall4);

car2.bounceOff(wall4);
car2.collide(wall4);

car3.bounceOff(wall4);
car3.collide(wall4);

car4.bounceOff(wall4);
car4.collide(wall4);
  wall4.visible=false;
drawSprites();
}