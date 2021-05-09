const bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World

function setup() {
  createCanvas(800,400);

  //namespace --> to give a nickname to a longname
  zengine = Engine.create()
  zworld = zengine.world
  var x = {a : 3}
  console.log(x.a) //3

  var xa = [ 2, 3, 4]
  console.log( xa[0]) //2

   Zaryab = new zaryab(400,200,50,50);
   console.log(Zaryab.body)
}

function draw() {
  background(0);  

  Engine.update(zengine)
  Zaryab.display();


}