class Brick {
constructor(x,y,width,height,angle){
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height)
    
       World.add (world,this.body)
       this.w = width
       this.h = height
       Matter.Body.setAngle (this.body,angle)
}     
      display(){
      rectMode(CENTER)
      fill("brown")
      strokeWeight(4)
      stroke("black")
      rect(this.body.position.x,this.body.position.y,this.w,this.h)
          
      }
}