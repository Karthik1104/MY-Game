var car,wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  car = createSprite(50, 200, 50, 30);
  //car.shapeColor=("green");
  wall = createSprite(1500,200,60,height/2)

  car.velocityX=speed;

}

function draw() {
  background(0);
  
  

 // deformation = (0.5*speed*weight*speed)/22500

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation= 0.5 * weight *speed * speed/22509;

    console.log(deformation)
    if(deformation>180)
    {
      car.shapeColor="red";
    }
  
    if (deformation<180 && deformation>100)
    {
      car.shapeColor="green";
    }
  
    if(deformation<100)
    {
      car.shapeColor="blue";
    }
  
  }

  
  drawSprites();
}

