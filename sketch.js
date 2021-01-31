
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(370,100,400,20)

	bob1=new Bob(170,400,30)
	rope1=new Rope(bob1.body,roof.body,-190)

	bob2=new Bob(240,400,30)
	rope2=new Rope(bob2.body,roof.body,-100)

	bob3 =new Bob(270,400,30)
	rope3=new Rope(bob3.body,roof.body,0)

	bob4=new Bob(320,400,30);
	rope4=new Rope(bob4.body,roof.body,100)

	bob5=new Bob(400,400,30);
	rope5=new Rope(bob5.body,roof.body,190)

	Engine.run(engine);
  
}


function draw() {
  
  background(220);
  
  roof.display();
  
  bob1.display();
  rope1.display();
 
  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();
 
}

function keyPressed(){

	if (keyCode=== UP_ARROW){
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:70,y:-70});
		
	}
}




