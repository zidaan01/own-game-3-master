var player,  enemy;
var bush, tree;
var edges;
var stone;

function preload(){

playerImg = loadImage("player.png");
bushImg = loadImage("Bush1.png");
stoneImg = loadImage("Stone1.png");
treeImg = loadImage("tree.png");
enemyImg = loadImage("Enemy.png");
}

function setup(){
createCanvas(800,600);
edges = createEdgeSprites();


tree = createSprite(600, 450, 50, 50);
tree.addImage(treeImg);

bush = createSprite(210, 530, 50, 50);
bush.addImage(bushImg);
bush.scale = 0.3;

stone = createSprite(400, 520, 50, 50);
stone.addImage(stoneImg);
stone.scale = 0.4;

player = createSprite(100, 440, 50, 50);
player.addImage(playerImg);
player.debug = false;
player.scale = 1.5;
player.velocityY = 3;

enemy = createSprite(650, 510, 50, 50);
enemy.addImage(enemyImg);
enemy.scale = 1.5;
}
function draw(){

background("cyan");

player.collide(edges);

if(player.isTouching(stone)){
  player.velocity = 0;
}

controls();

drawSprites();
}
function controls(){
   if(keyDown(UP_ARROW)){
     player.velocityY = -7;
   }
   if(keyDown(LEFT_ARROW)){
    player.x = player.x - 7;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 7;
  }
  
player.velocityY = player.velocityY + 4;


}





