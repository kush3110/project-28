const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var base;
var side1, side2;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150, 280);
	ground = new Ground(600,height,1600,20);
	base = new Dustbin(1130, 380, 200, 20);
	side1 = new Dustbin(1030, 330, 20, 100);
	side2 = new Dustbin(1230, 330, 20, 100);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  base.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85})
				  
   }
}


