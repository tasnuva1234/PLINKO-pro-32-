var Engine = Matter.Engine,
   World = Matter.World,
   Events = Matter.Events,
   Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function preload(){
  bgImg=loadImage("sky.jpeg");

}

function setup() {
  createCanvas(800, 1000);
  engine = Engine.create();
  world = engine.world;

  //For making the ground
  ground = new Ground(width/2,height,width,20);


  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 50; j <=width; j=j+60) { 
    plinkos.push(new Plinko(j,250));
  }

  //create 2nd row of plinko objects
  for (var j = 80; j <=width-20; j=j+60) 
  {
    plinkos.push(new Plinko(j,340));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width; j=j+60) 
  {
    plinkos.push(new Plinko(j,430));
  }
  
  //create 4th row of plinko objects
  for (var j = 80; j <=width-20; j=j+60) 
  {
    plinkos.push(new Plinko(j,520));
  }

 
    
}
 


function draw() {

  background(bgImg);//For displaying the background
  textSize(20)
 
  Engine.update(engine);

  //For displaying the ground
  ground.display();

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

   //create particle objects
   if(frameCount%60===0){
    particles.push(new Particle(random(150,750/*width/2-10,width/2+10*/),10,10))
  }

   for (var l = 0; l < particles.length; l++) {
    particles[l].display();
  }



  //For displaying the PLINKO text
  strokeWeight(0)
  stroke("white")
  fill ("white")
  textSize(70)
  text("PLINKO🌟",150,100)

  //For writting the numbers at the bottom
  textSize(45)
  text("10",12,900)

  textSize(45)
  text("20",95,900)

  textSize(45)
  text("30",175,900)

  textSize(45)
  text("40",255,900)

  textSize(45)
  text("50",335,900)

  textSize(45)
  text("60",415,900)

  textSize(45)
  text("70",495,900)

  textSize(45)
  text("80",575,900)

  textSize(45)
  text("90",655,900)

  textSize(45)
  text("100",722,900)

 

}