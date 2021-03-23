var bgI,catI1,catI2,mouseI1,mouseI2,catI3,mouseI3;
var cat,mouse,backround;
function preload() {
    //load the images here
  bgI = loadImage("garden.png") 
  catI1 = loadAnimation("images/cat1.png") 
  catI2 = loadAnimation("images/cat2.png","images/cat3.png")
  mouseI1 = loadAnimation("images/mouse1.png")
  mouseI2 = loadAnimation("images/mouse2.png","images/mouse3.png")
  catI3 = loadAnimation("images/cat4.png")
  mouseI3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(900,700);
  background("bgI")
   backround = createSprite(450,350)
   backround.addImage(bgI)
    //create tom and jerry sprites here
    cat = createSprite(700,600,20,20)
    mouse = createSprite(100,600,20,20)
    cat.addAnimation("catSitting",catI1)
    mouse.addAnimation("mouseSitting",mouseI1)
  cat.scale =0.13
  mouse.scale = 0.13
}

function draw() {

   
  
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2) {
        cat.velocityX = 0
        cat.addAnimation("catHappy",catI3)
        cat.changeAnimation("catHappy")
        mouse.addAnimation("mouseHappy",mouseI3)
        mouse.changeAnimation("mouseHappy")
    }

    keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")) {
      mouse.addAnimation("mouseTeasing",mouseI2)
      mouse.changeAnimation("mouseTeasing")
     
      cat.addAnimation("catRunning",catI2)
      cat.changeAnimation("catRunning")
      cat.velocityX = -5
  }


}
