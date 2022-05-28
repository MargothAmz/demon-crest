var ball,ballImage
var edges
var paddle,paddleImage;
var yellow,blue,darkblue,dorado,green,purple,red;

function setup() {
    createCanvas(700, 500);
    
    ball=createSprite(350,300,20,20);
    ballImage=loadImage("ball-1.png");
    ball.shapeColor="blue";
    ball.addImage("ball",ballImage);
    ball.scale=0.5;
    
    paddle=createSprite(350,455,100,10);
    paddleImage=loadImage("demon-1.png");
    paddle.addImage("paddle",paddleImage);
    paddle.scale=0.7;
    
    blue=loadImage("crest_blue-1.png");
    darkblue=loadImage("crest_darkblue.png");
    dorado=loadImage("crest_dorado.pn");

    
    edges=createEdgeSprites();
}

function draw() {
  // Fill the canvas with light gray, covering up previous images
    background(0);
    fill("red");
    textSize(20);
    text("Press SPACE to START",250,350);
    
    paddle.x=mouseX;
  
    if(keyDown("space")){
    ball.velocityX=5;
    ball.velocityY=6;
    }
    
    //Escribe todos los edges o limites
    //ball.bounceOff(edges);
    //Acceder individualmente a cada uno de ellos 
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    
    ball.bounceOff(paddle);
 
    gemasCrest(50);//1
    gemasCrest(50+30);//2
    gemasCrest(50+30+30);//3
    gemasCrest(50+30+30+30);//4
    gemasCrest(50+30+30+30+30);//5
    gemasCrest(50+30+30+30+30+30);//6
    gemasCrest(50+30+30+30+30+30+30);//7
  
    drawSprites();
    
    
}

function gemasCrest(y){
    var x=125;
    for(var i=0;i<6;i++){
    var crest=createSprite(x,y,50,25);
     x += crest.width + 40;
    }
    
}