const Constraint= Matter.Constraint;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
var ground1;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

 ground1=new Ground(240,790,480,10)
}

function draw() {
  background(255,255,255); 
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
  }

  for(var a=0 ; a<particles.length ; a++){
      particles[a].display();
  }

  for(var k=0 ; k<divisions.length ; k++){
    divisions[k].display();
}

for(var j=0 ; j<plinkos.length ; j++){
  plinkos[j].display();
}

  ground1.display()
  drawSprites();
}