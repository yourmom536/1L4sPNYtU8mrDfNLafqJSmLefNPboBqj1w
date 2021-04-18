var canvas;
var block1,block2,block3,block4,block5,block6;
var ball, edges;
var music;

function preload(){
    music = loadSound('music.mp3');
}


function setup(){
    canvas = createCanvas(1300,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(525,580,230,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(755,580,200,30)
    block4.shapeColor = "green";

    block5 = createSprite(970,580,200,30)
    block5.shapeColor = "blue";

    block6 = createSprite(1185,580,200,30);
    block6.shapeColor = "purple";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    
    ball.velocityY = 6;
    ball.velocityX = -6

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
   
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
    }

    if(block5.isTouching(ball) && ball.bounceOff(block5)){
        ball.shapeColor = "blue";
    }

    if(block6.isTouching(ball) && ball.bounceOff(block6)){
        ball.shapeColor = "purple";
    }
    
    drawSprites();
}
