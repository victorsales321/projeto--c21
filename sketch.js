  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  bombimg=loadImage("Design sem nome.png")
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  bombGroup= new Group();

  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
 if(tower.y >400 ){
      tower.y = height/2
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        ghost.x = ghost.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for 
      
    }
    if(keyDown("right_arrow")){
  
          ghost.x = ghost.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
         ghost.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
      
      spawnDoors();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.]

     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.collide(invisibleBlock)
      gameState = "end"
    }
    if(bombGroup.isTouching(ghost) || ghost.y > 600){
      ghost.collide(bomb)
      gameState = "end"
    }
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
    spookySound.stop()
  }
}

function spawnDoors()
 {
 
  if (frameCount % 240 === 0) {
    var door = createSprite(Math.round(random(200,400)), -50);
    var climber = createSprite(door.x,10);
    var invisibleBlock = createSprite(door.x,15);
    var bomb = createSprite(Math.round(random(200,400)),50)
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //adicione a função aleatória
    

    //
    door.addImage(doorImg);
    bomb.addImage(bombimg)
    bomb.scale=0.2
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    bomb.velocityY=5
    //mude a profundidade do fantasma e da porta
    
     
ghost.depth = door.depth;
door.depth = ghost.depth
    ghost.depth =1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

 invisibleBlock.lifetime = 500;
    climber.lifetime = 500;
    door.lifetime = 500;
    bomb.lifetime = 500
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
    bombGroup.add(bomb)
  }
 





  }
  


