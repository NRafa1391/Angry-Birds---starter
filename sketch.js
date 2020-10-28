const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(840,320,50,50);
    box3 = new Box(700, 250, 50, 50);
    box4 = new Box(840, 250, 50, 50);
    box5 = new Box(770, 180, 50, 50)

    pig1 = new Pig(770, 320);
    pig2 = new Pig(770, 250);


    log = new Log(770, 300, 250, PI/2);
    log2 = new Log(770, 230, 250, PI/2);
    log3 = new Log(730, 180, 130, PI/7);
    log4 = new Log(810, 180, 130, -PI/7);

    bird = new Bird(100, 100);
    ground = new Ground(200,height,3000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    
    ground.display();
}