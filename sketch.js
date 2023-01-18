var space, spaceImg
var rocket, rocketImg
var star, starImg
var asteroid1, asteroid1Img
var asteroid2, asteroid2Img
var asteroid3, asteroid3Img
var gameState = "play"



function preload(){
spaceImg = loadImage("Sprite_background_effects_0112.png")
rocketImg = loadImage("OIP-removebg-preview.png")
starImg = loadImage("R-removebg-preview.png")
asteroid1Img = loadImage("OIP__1_-removebg-preview.png")
asteroid2Img = loadImage("R__1_-removebg-preview.png")
asteroid3Img = loadImage("R__2_-removebg-preview.png")
}
function setup() {
createCanvas(500,700)
//creating space
space = createSprite(400,360,200,0)
space.addImage("space", spaceImg)


//creating Rocket
rocket = createSprite(50,360,50,50)
rocket.addImage("rocket", rocketImg)
rocket.scale=0.2

}

function draw() {
 background(255)
 if (space.x < 200) {
    space.x = 310
 }
 space.velocityX = -1
 rocket.Y = World.mouseY
  drawSprites();

//Movement of Rocket with Arrows
if (keyDown(UP_ARROW)){
   rocket.y + 1
}






}