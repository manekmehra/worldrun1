var walls=[],walls1=[],walls2=[],walls3=[],walls4=[],walls5=[]
var player
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var flag = 0,brick1group,c,bunny
function setup(){
  engine = Engine.create()

  world = engine.world
  createCanvas(1200,800);
  brick1group = new Group()
  var j = 0, k = 0
 
  for (var i = 50 ; i<1000; i=i+60){

walls[j]=new Brick1(i,600,100,50)
walls3[j]=new Brick1(i,790,100,50)
walls2[j] = new Brick1(i,200,200,50)
walls4[j] = new Brick1(10,i+200,200,50)
walls5[j] = new Brick1(i,10,200,50)
j++
}
for (var i = 1150 ; i>200; i=i-60){

  walls1[k]=new Brick1(i,400,100,50)
  k++
  }
player = createSprite(50,790,10,50)
bunny = new Brick(400,200,50,20)
//c = new Slingshot(bunny.body,{x:600,y:300})
}

function draw(){

  
Engine.update(engine)  
background(225)
drawSprites()
//for(var i = 0;i<walls1.length;i++)
//walls1[i].display()

//for(var i = 0;i<walls.length;i++){
//walls[i].display()
//walls2[i].display()
//}
player.bounceOff(brick1group)
bunny.display()
//c.display()

if (keyDown("UP_ARROW")){
  player.y = player.y-5
}
if (keyDown("LEFT_ARROW")){
  player.x = player.x-5
}
if (keyDown("RIGHT_ARROW")){
  player.x = player.x+5
}
if (keyDown("DOWN_ARROW")){
  player.y = player.y+5
}
if (keyDown("A")){
  c.attach(player)
}
}
