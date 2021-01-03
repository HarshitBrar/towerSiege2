const Engine = Matter.Engine
const World = Matter.World  
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;
var myWorld,myEngine;
var ground,plate,plate2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25; 
var polygon,slingshot;
function setup() {
  createCanvas(800, 600);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(400, 590, 800, 10);
  plate = new Ground(300, 560, 300, 10);
  plate2 = new Ground(600, 400, 250, 10);

  box1 = new Box(210, 530, 30, 40);
  box2 = new Box(240, 530, 30, 40);
  box3 = new Box(270, 530, 30, 40);
  box4 = new Box(300, 530, 30, 40);
  box5 = new Box(330, 530, 30, 40);
  box6 = new Box(360, 530, 30, 40);
  box7 = new Box(390, 530, 30, 40);

  box8 = new Box(240, 490, 30, 40);
  box9 = new Box(270, 490, 30, 40);
  box10 = new Box(300, 490, 30, 40);
  box11 = new Box(330, 490, 30, 40);
  box12 = new Box(360, 490, 30, 40);

  box13 = new Box(270, 450, 30, 40);
  box14 = new Box(300, 450, 30, 40);
  box15 = new Box(330, 450, 30, 40);

  box16 = new Box(300, 410, 30, 40);
  
  box17 = new Box(540,200,30,40);
  box18 = new Box(570,200,30,40);
  box19 = new Box(600,200,30,40);
  box20 = new Box(630,200,30,40);
  box21 = new Box(660,200,30,40);

  box22 = new Box(570,160,30,40);
  box23 = new Box(600,160,30,40);
  box24 = new Box(630,160,30,40);

  box25 = new Box(600,120,30,40);

  polygon = new Paper(50,450);

  slingshot = new Slingshot(polygon.body,{x:50, y:450});
}
function draw() {
  background(0);
  Engine.update(myEngine);
  
  ground.display();
  plate.display();
  plate2.display();
  fill("blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("purple");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("red");
  box13.display();
  box14.display();
  box15.display();
  fill("green");
  box16.display();
  fill("blue");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("purple");
  box22.display();
  box23.display();
  box24.display();
  fill("red");
  box25.display();

  polygon.display();

  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}