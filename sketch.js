var car,wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.shapecolor=color("green");
  wall = createSprite(1500,200,60,height/2)
  wall.shapecolor=color("blue");
}

function draw() {
  background(0);
  
  car.velocityX=5;

  //deformation (0.5*speed*weight*speed)/22500

  spawn();
  drawSprites();
}




function spawn() {

  if(wall.x-car.x < (car.width+wall.width)/2)
    {
      car.velocityX=0;
      var deformation= 0.5 * weight *speed * speed/22509;
      if(deformation>180)
      {
        car.shapecolor=color(225,0,0);
      }
    
      if (deformation<180 && deformation>100);
      {
        car.shapecolor=color(230,230,0);
      }
    
      if(deformation<100);
      {
        car.shapecolor=color(225,0);
      }
    
    }
  }
