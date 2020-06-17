class Slingshot{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.1      
    }    
   
   this.sling =  Matter.Constraint.create(options)
   World.add(world,this.sling)
   this.sling1 = loadImage("sling1.png")
   this.sling2 = loadImage("sling2.png")
   this.sling3 = loadImage("sling3.png")
    }
attach(bodynew){
    this.sling.bodyA=bodynew
}
fly(){
    this.sling.bodyA=null
}
    display(){
        image(this.sling1,1060,600);
        image(this.sling2,1030,600);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
       
          strokeWeight(7);
               line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            //}
            
                
        }
    }
}
