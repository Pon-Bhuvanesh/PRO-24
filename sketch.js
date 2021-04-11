
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
     
    paperSprite=createSprite(80,630,30,30); 
    paperSprite.shapeColor=color("skyblue")

	groundSprite=createSprite(500,650,1000,10)
    groundSprite.shapeColor=color("blue");
 
	boxPosition=width/1-280
	 boxY=600;

	 boxleftSprite=createSprite(boxPosition,boxY,20,100);
     boxleftSprite.shapeColor=color(255,0,0);

	 boxLeftbody=Bodies.rectangle(boxPosition+20,boxY,20,100,{inStatic:true});
     World.add(world,boxLeftbody);

	 boxBase=createSprite(boxPosition+100,boxY+40,200,20);
	 boxBase.shapeColor=color(255,0,0);
     
	 boxBottomBody=Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{inStatic:true});
     World.add(world,boxBottomBody);

	 boxleftSprite=createSprite(boxPosition+200,boxY,20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
     
	 boxRightBody=Bodies.rectangle(boxPosition+200-20,boxY,20,100,{inStatic:true});
     World.add(world,boxRightBody);

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
