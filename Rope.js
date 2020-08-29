class Rope {
    constructor(body1,body2, offsetX,offsetY)
    {
        this.offsetX=offsetY
        this.offsetY=offsetX
       var options={
           bodyA:body1,
           bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY}
       }
       this.chain=Matter.Constraint.create(options)
       World.add(world,this.chain)
     
       this.Rope=Constraint.reate(options)
       World.add(world,this.rope)
      
    }
    
}