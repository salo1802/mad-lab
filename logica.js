class Logica {

    

constructor(){
  this.level = 0;
  this.basureroposx = 540;
  this.basureroposy = 230;
  this.listaDeElementos = [];
  this.listaDeFormulas = []
  this.casilla1 = {
      posx: 600,
      posy: 260,
      lista: []
  }
  this.casilla2 = {
    posx: 660,
    posy: 260,
    lista: []
  }
  this.casilla3 = {
    posx: 720,
    posy: 260,
    lista: []
  }
  this.casilla4 = {
    posx: 780,
    posy: 260,
    lista: []
  }
  this.elementoSeleccionado;
  this.crearListaDeFormulas();
  this.crearElementos();
  



}


crearListaDeFormulas(){
    

    this.listaDeFormulas[0] = {
        nombre: "Agua",
        formula: "H,H,O"
    }

   this.listaDeFormulas[1] = {
        nombre: "Sal de mesa",
        formula: "Na,Cl"
    }

    this.listaDeFormulas[2] = {
        nombre: "Óxido de hierro",
        formula: "Fe,O"
    }

    this.listaDeFormulas[3] = {
        nombre: "Dióxido de carbono",
        formula: "C,O,O"
    }

    this.listaDeFormulas[4] = {
        nombre: "Carbonato de calcio",
        formula: "Ca,C,O,O,O"
    }

    this.listaDeFormulas[5] = {
        nombre: "Sulfato de cobre",
        formula: "Cu,S,O,O,O,O"
    }

    this.listaDeFormulas[6] = {
        nombre: "Permanganato de potasio",
        formula: "K,Mn,O,O,O,O"
    }

    this.listaDeFormulas[7] = {
        nombre: "Bicarbonato de sodio",
        formula: "Na,H,C,O,O,O"
    }

    this.listaDeFormulas[8] = {
        nombre: "Etanol",
        formula: "C,C,H,H,H,H,H,O,H"
    }

    this.listaDeFormulas[9] = {
        nombre: "Ácido acetilsalicílico",
        formula: "C,C,C,C,C,C,C,C,C,H,H,H,H,H,H,H,H,O,O,O,O"
    }

    

    

  
}

logicDraw(){
    this.pintarcoponentes();
    this.pintarCasillas();
    if(this.elementoSeleccionado != null){ this.elementoSeleccionado.pintarElemento();}

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


}


borrarElemento(elemento){
    
}

logicMousePressed(mousex,mousey){
    this.listaDeElementos.forEach(elemento =>{
        if(elemento.seleccionarElemento(mousex,mousey)==true){
           this.elementoSeleccionado = new Elemento(elemento.getPosX(),elemento.getPosY(),elemento.getSimbolo());
        }
    })
    this.agarrarElementosDeCasillas(this.casilla1,mousex,mousey);
    console.log(this.casilla1.lista)
}

logicMouseDragged(mousex,mousey){
   if(this.elementoSeleccionado != null){
    this.elementoSeleccionado.setPosX(mousex);
    this.elementoSeleccionado.setPosY(mousey);
   }
   
  
}

logicMouseReleased(){
    this.validarCasillas(this.elementoSeleccionado,this.casilla1)
    this.validarCasillas(this.elementoSeleccionado,this.casilla2)
    this.validarCasillas(this.elementoSeleccionado,this.casilla3)
    this.validarCasillas(this.elementoSeleccionado,this.casilla4)
    this.elementoSeleccionado = null;

}

crearTablas(){

}

pintarCasillas(){
    fill(100);
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

}