class Profesor {

    constructor(){
        this.posx = 170;
        this.posy = 520;
        this.hablar = false;
        this.frasesTurorial = [];
        this.buencompueto;
        this.Crearfrases();
        this.parteDelTutorial = 0;
        this.tutorial;
        this.img = loadImage('./data/prueba.png');
        this.frases = [];

    }
    pintarProfesor(tutorial){
        fill(0);
        this.img.resize(300,400);
        image(this.img, this.posx,this.posy)
        this.tutorial= tutorial;
        textSize(16);
        this.pintarFrases();
        

    }
    
    Crearfrases(){
       this.frasesTurorial = [13];
       this.frases = [3];

    this.frasesTurorial[0] = ("Hola! bienvenido a Mad-Lab,"+"\n" + "soy el profesor L."+"\n"+"estoy aqui para guiarte"
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
  
    this.frasesTurorial[9] = ("Si tienes un"+"\n"+"compuesto peligroso" + "\n" + "debes elminarlo");

    this.frasesTurorial[10] = ("Puedes consultar"+"\n"+"el libro por" + "\n" + "pista pero se te" +"\n"+ "descontaran puntos"
    + "\n" + "cada que lo uses");

    this.frasesTurorial[11] = ("Para continuar"+"\n"+"entregame el" + "\n" + "compuesto");

    this.frasesTurorial[12] = ("Estas listx?");

    this.frases[0] = "Bien Hecho!\n" + "Vamos con el siguiente nivel";
    this.frases[1] = "Esto no es lo que te pedi \n" + "dejalo en el basurero e intenta de nuevo";
    this.frases[2] = "CREASTE UN COMPUESTO PELIGROSO!!!" + "\n" + "DESASTE DE ÉL RÁPIDO" + "\n" + "REVISA BIEN LA FORMULA\n" +"Y QUE TU ESPACO DE TRABAJO NO ESTE SUCIO"


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
    
}


validarNivel(compuesto,nivel){
    if(compuesto.getNombre() == nivel ){
        
    }
}

getHablar(){
    return this.hablar;
}

getParteDelTutorial(){
    return this.parteDelTutorial;
}




}