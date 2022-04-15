class Compuesto {

    constructor(listaElementos, suciedad, posx, posy){
        this.posx = posx;
        this.posy = posy;
        this.listaElementos = [listaElementos]; 
        this.suciedad = suciedad;
        this.nombre;
        this.formula = "";
        this.crearListaDeFormulas();
        this.validarFormula();
        

    }


    crearListaDeFormulas(){
    
        this.listaDeFormulas = [10];
    
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

    

validarFormula(){
       this.nombre = "Compuesto Peligroso";
        this.listaElementos.forEach(element => {
            this.formula = `${this.formula}${element}`
        });
if(this.suciedad==false){
    this.listaDeFormulas.forEach(f =>{
        if(this.formula==f.formula){
            this.nombre = f.nombre;
        }
    });
    
}else{
    this.nombre = "Compuesto Peligroso"
}

}

pintarCompuesto(){
    rect(this.posx,this.posy,50,50);
    textSize(10);
    text(this.nombre,this.posx,this.posy + 50);
}


getFormula(){
    return this.formula;
}

getNombre(){
    return this.nombre;
}

getPosX(){
    return this.posx;
}

getPosY(){
    return this.posy;
}

setPosX(posX){
this.posx = posX;}


setPosY(posY){
    this.posy = posY;
}



}

