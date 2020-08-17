const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box20,box21,box22,box23,box24,box25;
var ball;
var slingshot;

function setup() {
  var canvas = createCanvas(1536,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground (730,550,400,10);
  ground1 = new Ground (1230,350,280,10);
  ground2 = new Ground (2000,600,10000,50)
  box1 = new Box(600,445,60,90);
  box2 = new Box(660,445,60,90);
  box3 = new Box(720,445,60,90);
  box4 = new Box(780,445,60,90);
  box5 = new Box(840,445,60,90);
  box6 = new Box(630,345,60,90);
  box7 = new Box(690,345,60,90);
  box8 = new Box(750,345,60,90);
  box9 = new Box(810,345,60,90);
  box10 = new Box(660,245,60,90);
  box11 = new Box(720,245,60,90);
  box12 = new Box(780,245,60,90);
  box13 = new Box(690,145,60,90);
  box14 = new Box(750,145,60,90);
  box15 = new Box(720,45,60,90);
  box20 = new Box(1170,245,60,90);
  box21 = new Box(1230,245,60,90);
  box22 = new Box(1290,245,60,90);
  box23 = new Box(1200,145,60,90);
  box24 = new Box(1260,145,60,90);
  box25 = new Box(1230,45,60,90);
  ball = new Ball(200,400,50,50);
  slingshot = new SlingShot(ball.body,{x:200, y:400});
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("white");
    textSize(35)
    text ("Drag the Stone and Release it, to launch it towards the blocks",50,50);
  ground.display();
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  ball.display();
  slingshot.display();
}

function mouseDragged(){
 
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(ball.body);
     Matter.Body.setPosition(ball.body, {x: 200 , y: 100});
  }
}