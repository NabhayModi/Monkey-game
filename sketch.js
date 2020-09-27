
var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png",
    "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");


}




function setup() {
  createCanvas(400, 400);

  monkey = createSprite(200, 300, 20, 20);
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(200, 300, 1000, 10);
}


function draw() {
  background("white");
  monkey.collide(ground);

  ground.velocityX = -10
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }

  if (keyWentDown("space")) {

    monkey.velocityY = -12

  }

  if (frameCount % 80 === 0) {

  }

  monkey.velocityY = monkey.velocityY + 1
  drawSprites();
}






