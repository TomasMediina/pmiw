class Puntos{
  constructor(){
   this.puntos=0; 
  }
  subirPuntos(){
   this.puntos++; 
  }
  
  bajarPuntos(){
   this.puntos--;
  }
  reiniciarPuntos(){
    this.puntos=0;
  }
  mostrarPuntos(){
textAlign(RIGHT,TOP);
textSize(20);
fill(0);
text("Puntos:"+this.puntos,20,30);
  }
  
}
