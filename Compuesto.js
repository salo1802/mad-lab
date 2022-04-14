class Compuesto {

    constructor(listaElementos,listaDeFormulas, suciedad, posx, posy){
        this.posx = posx;
        this.posy = posy;
        this.listaElementos = [listaElementos]; 
        this.suciedad = suciedad;
        this.formula = "";
        this.listaDeFormulas = [listaDeFormulas];
        this.validarFormula();
        

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

