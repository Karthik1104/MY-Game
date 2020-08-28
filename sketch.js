
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  hanger

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	hanger = createSprite(400,100,450,20)


	engine = Engine.create();
	world = engine.world;

	Rope1=new rope(bobObject1body,roofobject.body,bobDiameter*2,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



