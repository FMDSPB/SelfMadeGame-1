let mc; let mcImageLeft, mcImageRight, mcImageUpLeft, mcImageUpRight;
let brick, brickImage;
let brickGroup;
let gameState = 'start';

function setup() {
  createCanvas(600, 700);
  ground = createSprite(300, 700, 600, 15);

  mc = createSprite(300, 600);
  mc.addImage(mcImageLeft);
  mc.scale = 3.5;
  mc.debug = true;

  brickGroup = new Group();

}

function preload() {

  mcImageLeft = loadImage("MCStandLeft.png");
  mcImageRight = loadImage("MCStandRight.png");
  mcImageUpLeft = loadImage("MCJumpLeft.png")
  mcImageUpRight = loadImage("MCJumpRight.png");

  brickImage = loadImage("brick.png");

}

function draw() {
  background(0);

  if(gameState === "start") {

    text("To start the game press your SpaceBar", 200, 400);
    text("Press the left or right keys to move left or right repectively", 170, 360);
    text("Press the up arrow key along with your directional keys to move upward in that direction", 70, 380);

    
  }

  createBricks();

  if (keyDown(LEFT)) {
    mc.addImage(mcImageLeft);
    mc.x = mc.x - 3;
  }

  if (keyDown(RIGHT)) {
    mc.addImage(mcImageRight);
    mc.x = mc.x + 3;
  }

  if (keyDown(UP_ARROW) && keyDown(LEFT)) {
    mc.addImage(mcImageUpLeft);
    mc.velocityY = -17;
    mc.velocityX = -15;
  }

  if (keyDown(RIGHT) && keyDown(UP_ARROW)) {
    mc.addImage(mcImageUpRight);
    mc.velocityY = -17;
    mc.velocityX = 15;
  }


  mc.velocityY = mc.velocityY + 3;
  mc.velocityX = 0;

  mc.collide(ground);

  drawSprites();
}

function createBricks() {
  if (frameCount % 70 === 0) {

    //console.log("hi")
    brick = createSprite(Math.round(random(50, 550)), -5)
    brick.addImage(brickImage);
    brick.velocityY = 5;
    brick.scale = 0.3;
    brick.lifetime = 150;
    brickGroup.add(brick);

  }
}