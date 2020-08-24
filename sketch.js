
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ball;

function preload()
{
	
}

function setup() {
	createCanvas(2500, 1200);

	wall1=createSprite(2000, 895, 50,200);
	wall2=createSprite(1500, 895, 50,200);
	wall3=createSprite(1750, 970, 500,50);

	//ground.fill("yellow");

   ball = new Ball(100,100,50);
	

	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  console.log(Ball.body.position.x);
    console.log(Ball.body.position.y);
    console.log(Ball.body.angle);
    Ball.display();
    


	keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(paperObject.body,paperObject.position,{x:85,Y:-85});
	}
}



