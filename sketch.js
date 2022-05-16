
var trex ,trex_running;
var ground
function preload(){

  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(25,180,20,20)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(300,180,600,17)
 
}

function draw(){
  background("black")
  

  if(keyDown("space")) {
trex.velocityY=-2 
 }

 trex.velocityY=trex.velocityY+0.8
 trex.collide(ground)


  drawSprites()

  

}
