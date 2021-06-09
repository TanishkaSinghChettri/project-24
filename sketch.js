const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,iron,rubber,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300,350)
    stone = new Stone(700,320)
    rubber1= new Rubber(920,450,30)
    rubber2= new Rubber(940,450,30)
    rubber3= new Rubber(960,450,30)
    rubber4= new Rubber(980,450,30)
    rubber5= new Rubber(1000,450,30)
   
   
  
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    hammer.display();
    iron.display();
    
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
     rubber5.display();
    
    

    
 
}