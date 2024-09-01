/*
TP N°1
Alumno: Tomas Medina N° de legajo:119088/9
Comision: 3
Link del video: https://www.youtube.com/watch?v=JEIiTg_KuqE
*/

let obra;

let cantX;
let cantY;

var ciculo1;
var ciculo2;
var ciculo3;
let resetCuadrados = false;


function preload() {
  
  obra = loadImage ("data/obra.jpeg");
}

function setup() {
  
  cantX = 14;
  cantY = 8;
  
  circulo1 = 255;
  circulo2 = 255;
  circulo3 = 255;
  
  createCanvas(800, 400);
  noLoop();
  
}

function draw() {
  
  // FONDO
  background(145); 

  // OBRA
  for (let i = 0; i < cantX; i++) {
    for (let j = 0; j < cantY; j++) {
      var x = 376 + i * 57;
      var y = j * 57;
      fill(0); 
      rect(x, y, 40, 40);
      
      // COLOR CUADRADOS
      if (resetCuadrados) { 
        fill(0);
      }
      else if(dist(mouseX, mouseY, x + 20, y + 20) < 100) {

        fill (colorAleatorio());
        rect(x, y, 40, 40);
        
      }
    
  

      
      // CIRCULOS
      fill(circulo1, circulo2, circulo3);
      ellipseMode(CENTER);
      noStroke();
      ellipse(mouseX - 400 + i * 57, 50 + j * 57, 22, 22);
    }
  }

// IMAGEN OBRA
    image( obra, 0, 0, 400, 400);

}

function mousePressed() {
  cambiarColorDeCirculos();
  redraw();
}

function mouseMoved() {
  redraw(); 
}

function cambiarColorDeCirculos() {
  circulo1 = random(255);
  circulo2 = random(255);
  circulo3 = random(255);
}

// FUNCION PARA VOLVER LOS CIRCULOS BLANCOS
function resetCirculos() {
  circulo1 = 255;
  circulo2 = 255;
  circulo3 = 255;
  redraw();
}

// FUNCION PARA VOLVER LOS CUADRADOS A NEGROS
function resetCuadrados1() {
  
  resetCuadrados = true;
  redraw();
  
}

// REINICIAR
function keyPressed() {
  if (key == 'r' || key == 'R') {
    resetCirculos(); 
    resetCuadrados1();
    
  }
}

function colorAleatorio () {

return color (random(255), random (255), random(255) ); 

}
