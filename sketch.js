let prueba;
let prueba3;

function preload() {
  inconsolata = loadFont("./data/PressStart2P-Regular.ttf");
  
}


function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER)
  rectMode(CENTER);
  textAlign(CENTER)
  prueba3 = new Logica();
  let lista = ["Na","H","C","O","O","O"]
  let prueba2 =  new Compuesto(lista, false, 1,1);
  console.log(prueba2.getNombre())
  prueba = new Profesor();
  textFont(inconsolata);

}


function draw() {
  background(220);
  rect(170,520,300,400);
  prueba3.logicDraw();

  prueba.pintarProfesor(true);
}

function mousePressed(){
  prueba.siguienteFrase();
  prueba3.logicMousePressed(mouseX,mouseY);
}

function mouseDragged(){
prueba3.logicMouseDragged(mouseX,mouseY);
  
}

function mouseReleased(){
  prueba3.logicMouseReleased();
}
