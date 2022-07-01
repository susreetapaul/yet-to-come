var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombei,zombeiImg
var zombeigroup
var score=0
var catsel

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombeiImg=loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombeigroup = new Group()

catsel = createSprite   


}

function draw() {
  background(0); 



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")&&player.y>100||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")&&player.y<700||touches.length>0){
 player.y = player.y+30
}
console.log(player.y)

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

if (zombeigroup.isTouching(player)){
  zombeigroup.destroyEach()
  score=score +1
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

spawnZombei();
drawSprites();

textSize(40);
text ("score"+score,600,50)


}

function spawnZombei(){
  var count=160
  if (score>10){
    count=count-100
  }
  if(frameCount%count===0){
    zombei=createSprite(width-600,height-400,50,50)
     zombei.addImage(zombeiImg)
     zombei.velocityX=-3
     zombei.y=random(100,600)
     zombei.lifeTime=50 
     zombei.scale=0.15
     zombeigroup.add(zombei)
    }
  }

