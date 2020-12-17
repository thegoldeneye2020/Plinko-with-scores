var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var particle;

var gameState="play";
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Grounds(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
   background("black");
   textSize(20);
    text("SCORE:"+score, 28, 30);
    textSize(20);
  text("500",20,535);
  text("500",100,535);
  text("500",180,535);
  text("500",260,535);
    text("100",340,535);
    text("100",420,535);
    text("100",500,535);
    text("200",580,535);
    text("200",660,535);
    text("200",745,535);
  

  Engine.update(engine);
  ground.display();

  if(gameState=="end"){
    textSize(100);
    text("GAMEOVER",40,400);
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null)
   {
    particle.display();

    if(particle.body.position.y>50)
    {
    if(particle.body.position.x<300)
    {
        score=score+500;
        particle=null;
        if(count>=5) gameState="end";

      }
      else if(particle.body.position.x<600 && particle.body.position.x>301)
      {
score=score+100;
particle=null;
if(count>=5) gameState="end";
      }
      else if(particle.body.position.x<900 && particle.body.position.x>601)
      {
score=score+200;
particle=null;
if(count>=5) gameState="end";
      }
    }
   }


   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="end"){
count++;
particle=new Particle(mouseX,10,10,10);
  }
}