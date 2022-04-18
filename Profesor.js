class Profesor {

    constructor(){
        this.posx = 170;
        this.posy = 520;
        this.frasesTurorial = [];
        this.buencompuesto;
        this.Crearfrases();
        this.parteDelTutorial = 0;
        this.tutorial;
        this.img = loadImage('./data/Profesor.png');
        this.imgS = loadImage('./data/Profesor Sorprendido.png')
        this.imgB = loadImage("./data/Profesor Correcto.png")
        this.sombra = [13];
        this.frases;
        this.globo = loadImage("./data/nube.png")
             
    this.sombra[0] = loadImage("./data/tutorial1.png");
    this.sombra[1] = loadImage("./data/tutorial1.png");
    this.sombra[2] = loadImage("./data/tutorial2.png");
    this.sombra[3] = loadImage("./data/tutorial3.png");
    this.sombra[4] = loadImage("./data/tutorial4.png");
    this.sombra[5] = loadImage("./data/tutorial5.png");
    this.sombra[6] = loadImage("./data/tutorial6.png");
    this.sombra[7] = loadImage("./data/tutorial7.png");
    this.sombra[8] = loadImage("./data/tutorial8.png");
    this.sombra[9] = loadImage("./data/tutorial9.png");
    this.sombra[10] = loadImage("./data/tutorial10.png");
    this.sombra[11] = loadImage("./data/tutorial1.png");
    this.sombra[12] = loadImage("./data/tutorial1.png");

    }
    pintarProfesor(tutorial){
        
        fill(0);
        this.img.resize(300,400);
        if(this.parteDelTutorial<12){
            image(this.sombra[this.parteDelTutorial],640,360)
        }
        
        this.globo.resize(416,252)
        image(this.globo,220,150)
        if(this.buencompuesto == false){
            image(this.imgS,this.posx,this.posy);
        }else{
            if(this.buencompuesto ==true){
                image(this.imgB,this.posx,this.posy);
            }else{
                image(this.img, this.posx,this.posy)
            }
            
        }
        
        this.tutorial= tutorial;
        textSize(16);
        this.pintarFrases();
  

    }
    
    Crearfrases(){
       this.frasesTurorial = [13];
       this.frases;

    this.frasesTurorial[0] = ("Hola! bienvenido\na Mad-Lab,"+"\n" + "soy el profesor L."+"\n"+"estoy aqui para guiarte"
     + "\n" + "y explicarte tus labores")
    

    this.frasesTurorial[1] = ("Tu objetivo es"+"\n"+"crear compuestos" + "\n" + "químicos en el menor" + "\n" 
        + "tiempo posible");

    this.frasesTurorial[2] = ("Los compuestos"+"\n"+"apareceran en la" + "\n" + "parte superior");

    this.frasesTurorial[3] = ("Debes arrastrar"+"\n"+"los elementos" + "\n" + "de la tabla");

    this.frasesTurorial[4] = ("Y organizarlos en"+"\n"+"orden de formula" + "\n" + "en las casillas");

    this.frasesTurorial[5] = ("Recuerda que puedes"+"\n"+"poner varias veces" + "\n" + "un elemento en la" +"\n"+ "misma casilla");

    this.frasesTurorial[6] = ("Y puedes eliminar"+"\n"+"elementos"+"\n"+"arrastrandolos al"+ "\n" + "basurero");

    this.frasesTurorial[7] = ("Para crear un"+"\n"+"compuesto debes dar"+"\n"+"al botón mezclar");

    this.frasesTurorial[8] = ("Y con la esponja"+"\n"+"puedes limpiar tu" + "\n" + "espacio al terminar" +"\n"+ "de mezclar");
  
    this.frasesTurorial[9] = ("Si tienes un"+"\n"+"compuesto peligroso" + "\n" + "debes eliminarlo");

    this.frasesTurorial[10] = ("Puedes consultar"+"\n"+"el libro por" + "\n" + "pista pero se te" +"\n"+ "descontaran puntos"
    + "\n" + "cada que lo uses");

    this.frasesTurorial[11] = ("Para continuar"+"\n"+"entregame el" + "\n" + "compuesto");

    this.frasesTurorial[12] = ("Estas listx?");

    
    


}



siguienteFrase(){
    if(this.tutorial==true){
        this.parteDelTutorial ++;
    }

}

pintarFrases(){

    if(this.tutorial==true){
        text(this.frasesTurorial[this.parteDelTutorial],this.posx+50, 100);
    }
    if(this.tutorial==false){
        text(this.frases,this.posx+50, 100);
    }
    
}


validarNivel(compuesto,nivel){
    
    if(compuesto.getNombre() == nivel ){
        this.buencompuesto = true;
        this.frases = "Bien Hecho!\n" + "Vamos con el\n siguiente nivel";
        
    }else{
        if(compuesto.getNombre() == "Compuesto\nPeligroso"){
    this.frases = "CREASTE UN\nCOMPUESTO PELIGROSO!!!" + "\n" + "DESASTE DE ÉL RÁPIDO" + "\n" + "REVISA BIEN LA FORMULA\n" +"Y QUE TU ESPACIO\n DE TRABAJO NO ESTE SUCIO"
   
        }else{
            this.frases = "Esto no es\nlo que te pedi \n" + "dejalo en el basurero\n e intenta de nuevo";
            
        }
        this.buencompuesto = false;
    }
    
}



getParteDelTutorial(){
    return this.parteDelTutorial;
}

getFrases(){
    return this.frases;
}

getBuenCompuesto(){
return this.buencompuesto;
}

setCompuesto(boolean){
    this.buencompuesto = boolean;
}

setFrases(frase){
    this.frases = frase;
}
}