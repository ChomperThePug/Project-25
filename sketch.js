const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, groundObject
var paper1;
var world;


function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width / 2, 670, width, 20);
	dustbinObj = new dustbin(1200, 650);
	paper1 = new Paper(100, 650);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(230);
	paper1.display();
	groundObject.display();
	dustbinObj.display();

}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.position,{x:150,y:-270});
	}
}