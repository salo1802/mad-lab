class Compuesto {

    constructor(listaElementos, suciedad, posx, posy){
        this.posx = posx;
        this.posy = posy;
        this.listaElementos = [listaElementos]; 
        this.suciedad = suciedad;
        this.formula = "";
        this.crearListaDeFormulas();
        this.validarFormula();
}


crearListaDeFormulas(){
    this.listaDeFormulas=[2];

    this.listaDeFormulas[0] = {
        nombre: "agua",
        formula: "H,H,O"
    }

   this.listaDeFormulas[1] = {
        nombre: "sal de mesa",
        formula: "Na,Cl"
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
    this.posY = posY;
}

}

