const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true,
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  var ball_options={
  restitution:1.5,  
  }
  ball=Bodies.rectangle(200,200,20,30,ball_options);
World.add(world,ball);
World.add(world,ground);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,30);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}