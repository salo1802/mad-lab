function setup() {
  createCanvas(1280, 720);
  
let lista = ["O","Cl"]
let prueba = new Compuesto(lista, false,1,1);
console.log(prueba.getNombre());
}


function draw() {
  background(220);
}
