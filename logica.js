class Logica {

    

constructor(){
  this.level = 0;
  this.suciedad = false;
  this.basureroposx = 540;
  this.basureroposy = 230;
  this.esponjaposx = 840;
  this.esponjaposy = 130;
  this.compuestoposx = 700;
  this.compuestoposy = 230;
  this.mixposx = 840;
  this.mixposy = 230;
  this.listaDeElementos = [];
  this.listaDeSimbolos = [];
  this.listaDeFormulas = []
  this.casilla1 = {
      posx: 600,
      posy: 360,
      lista: []
  }
  this.casilla2 = {
    posx: 660,
    posy: 360,
    lista: []
  }
  this.casilla3 = {
    posx: 720,
    posy: 360,
    lista: []
  }
  this.casilla4 = {
    posx: 780,
    posy: 360,
    lista: []
  }
  this.elementoSeleccionado;
  this.compuesto;
  this.profesor = new Profesor();
  this.cantidadDeComPeligrosos = 0;
  this.crearElementos();
  this.compuestoPedido = "Agua";
  this.nivel = 0;
  this.tutorial;
  



}



logicDraw(){
    if(this.nivel == 0){
        this.tutorial = true;
        if(this.profesor.getParteDelTutorial()>13){
            this.nivel = 1;
    }}else{
        this.tutorial = false;
    }
    this.pintarcoponentes();
    this.pintarCasillas();
    this.profesor.pintarProfesor(this.tutorial);
    if(this.elementoSeleccionado != null && this.elementoSeleccionado != this.compuesto){ this.elementoSeleccionado.pintarElemento();}

}

crearElementos(){
    this.listaDeElementos[0] = new Elemento(600,500,"Na");
    this.listaDeElementos[1] = new Elemento(660,500,"O")
    this.listaDeElementos[2] = new Elemento(720,500,"H")
    this.listaDeElementos[3] = new Elemento(780,500,"C")
    this.listaDeElementos[4] = new Elemento(840,500,"Cl")
    this.listaDeElementos[5] = new Elemento(900,500,"Mn")
    this.listaDeElementos[6] = new Elemento(960,500,"Fe")
    this.listaDeElementos[7] = new Elemento(600,600,"K")
    this.listaDeElementos[8] = new Elemento(660,600,"Ca")
    this.listaDeElementos[9] = new Elemento(720,600,"S")
    this.listaDeElementos[10] = new Elemento(780,600,"Cu")

}


pintarcoponentes(){
    this.listaDeElementos.forEach(elemento => {
        elemento.pintarElemento();
    })
    
    //pintar basurero
    fill(250,0,0)
    rect(this.basureroposx,this.basureroposy,50,50);

    //pintar esponja
    fill(0,0,100)
    rect(this.esponjaposx,this.esponjaposy,50,50);

    //pintar boton

    fill(0,100,0)
    rect(this.mixposx,this.mixposy,50,50);



    //pintar libro


    //pintar compuesto
    if(this.compuesto != undefined){
        this.compuesto.pintarCompuesto();
    }
}




logicMousePressed(mousex,mousey){
    this.listaDeElementos.forEach(elemento =>{
        if(elemento.seleccionarElemento(mousex,mousey)==true){
           this.elementoSeleccionado = new Elemento(elemento.getPosX(),elemento.getPosY(),elemento.getSimbolo());
        }
    })
    this.agarrarElementosDeCasillas(this.casilla1,mousex,mousey);
    this.agarrarElementosDeCasillas(this.casilla2,mousex,mousey);
    this.agarrarElementosDeCasillas(this.casilla3,mousex,mousey);
    this.agarrarElementosDeCasillas(this.casilla4,mousex,mousey);
    this.limpiar(mousex,mousey);
    console.log(this.casilla1.lista)

    if(mousex>this.mixposx-25 && mousex < this.mixposx+25 
        && mousey > this.mixposy - 25 && mousey < this.mixposy + 25){
    this.crearCompuesto();}

    //agarrar el compuesto
if(this.compuesto != null || this.compuesto != undefined){
    if(mousex > this.compuesto.getPosX() -25 && mousex <this.compuesto.getPosX() +25 
        && mousey > this.compuesto.getPosY() -25 && mousey <this.compuesto.getPosY() +25 ){
            this.elementoSeleccionado = this.compuesto;
        }}

        //avanzar el turtorial

    this.profesor.siguienteFrase();

}

logicMouseDragged(mousex,mousey){

    if(this.tutorial == false){
   if(this.elementoSeleccionado != null){
    this.elementoSeleccionado.setPosX(mousex);
    this.elementoSeleccionado.setPosY(mousey);
   }}
   
    
  
}

logicMouseReleased(){
    if(this.elementoSeleccionado != null){
    this.validarCasillas(this.elementoSeleccionado,this.casilla1)
    this.validarCasillas(this.elementoSeleccionado,this.casilla2)
    this.validarCasillas(this.elementoSeleccionado,this.casilla3)
    this.validarCasillas(this.elementoSeleccionado,this.casilla4)
    this.elementoSeleccionado = null;}
    if(this.compuesto != undefined || this.compuesto != null){
        this.validarCompuesto();
    }

}



pintarCasillas(){
    if(this.suciedad==true){
        fill(0,100,0)
    }else{
        fill(100);
    }
    
    if(this.casilla1.lista[0] == undefined){
        rect(this.casilla1.posx,this.casilla1.posy,50,50);
    }else{
        this.casilla1.lista[0].pintarElemento();
    }


    if(this.casilla2.lista[0] == undefined){
        rect(this.casilla2.posx,this.casilla2.posy,50,50);
    }else{
        this.casilla2.lista[0].pintarElemento();
    }


    if(this.casilla3.lista[0] == undefined){
        rect(this.casilla3.posx,this.casilla3.posy,50,50);
    }else{
        this.casilla3.lista[0].pintarElemento();
    }


    if(this.casilla4.lista[0] == undefined){
        rect(this.casilla4.posx,this.casilla4.posy,50,50);
    }else{
        this.casilla4.lista[0].pintarElemento();
    }
    
    
}

validarCasillas(elemento,casilla){
    
    if(elemento.getPosX()>casilla.posx-25 && elemento.getPosX()<casilla.posx+25 
        && elemento.getPosY()>casilla.posy-25 && elemento.getPosY()<casilla.posy+25){
            if(casilla.lista[0]== undefined || casilla.lista[0].getSimbolo() == elemento.getSimbolo()){
                elemento.setPosX(casilla.posx);
                elemento.setPosY(casilla.posy);
                casilla.lista.push(elemento);
            }
        }else{elemento = null}

}

agarrarElementosDeCasillas(casilla,mousex,mousey){
    if(casilla.lista[0] != undefined){
        let elemento = casilla.lista[0];
        if(casilla.lista[0])
        if(casilla.lista[0].seleccionarElemento(mousex,mousey)==true){
           this.elementoSeleccionado = new Elemento(casilla.posx,casilla.posy,elemento.getSimbolo());
           casilla.lista.pop()
        }

    }  
}

limpiar(mousex,mousey){
    if(mousex>this.esponjaposx-25 && mousex < this.esponjaposx+25 
        && mousey > this.esponjaposy - 25 && mousey < this.esponjaposy + 25){
            this.suciedad = false;
        }
}

crearCompuesto(){
    this.casilla1.lista.forEach(elemento => {
        this.listaDeSimbolos.push(elemento.getSimbolo());
    })
    this.casilla2.lista.forEach(elemento => {
        this.listaDeSimbolos.push(elemento.getSimbolo());
    })
    this.casilla3.lista.forEach(elemento => {
        this.listaDeSimbolos.push(elemento.getSimbolo());
    })
    this.casilla4.lista.forEach(elemento => {
        this.listaDeSimbolos.push(elemento.getSimbolo());
    })

    console.log(this.listaDeSimbolos)
    this.compuesto = new Compuesto(this.listaDeSimbolos,this.suciedad,this.compuestoposx,this.compuestoposy);

    this.casilla1.lista = [];
    this.casilla2.lista = [];
    this.casilla3.lista = [];
    this.casilla4.lista = [];
    this.listaDeSimbolos = [];
    this.suciedad = true;

    if(this.compuesto.getNombre()=="Compuesto Peligroso"){
        this.cantidadDeComPeligrosos++;
    }
}


validarCompuesto(){
    if(this.compuesto.getPosX()>this.basureroposx-25 && this.compuesto.getPosX()<this.basureroposx+25
    &&this.compuesto.getPosY()>this.basureroposy-25&&this.compuesto.getPosY()<this.basureroposy+25){
       
        this.compuesto = null;
    }

    if(this.compuesto.getPosX()> 20 && this.compuesto.getPosX()< 320
    &&this.compuesto.getPosY()>370&&this.compuesto.getPosY()<670){
        this.profesor.validarNivel(this.compuesto,this.compuestoPedido);
}

}
}