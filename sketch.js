
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,stone,rubber,brick;
var ground;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,570,800,50);

	hammer = new Hammer(200,200);
	rubber = new Rubber(600,430);
    stone = new Stone(600,530);
	brick = new Brick(300,530);
	sand1 = new Sand(450,540);
	sand2 = new Sand(200,540);
	sand3 = new Sand(250,540);
	sand4 = new Sand(300,540);
	sand5 = new Sand(320,540);
	sand6 = new Sand(400,540);
	sand7 = new Sand(420,540);

	Engine.run(engine);

  
}


function draw() {
  
  background("lightblue");
  Engine.update(engine);
  
  hammer.display();
  ground.display();
  rubber.display();
  stone.display();
  brick.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();

  drawSprites();
 
}



