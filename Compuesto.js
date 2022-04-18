class Compuesto {

    constructor(listaElementos, suciedad, posx, posy){
        this.posx = posx;
        this.posy = posy;
        this.listaElementos = [listaElementos]; 
        this.suciedad = suciedad;
        this.nombre;
        this.formula = "";
        this.imagen;
        this.crearListaDeFormulas();
        this.validarFormula();
        

    }


    crearListaDeFormulas(){
    
        this.listaDeFormulas = [10];
    
        this.listaDeFormulas[0] = {
            nombre: "Agua",
            formula: "H,H,O",
            img: "./data/agua.png"
        }
    
       this.listaDeFormulas[1] = {
            nombre: "Sal\nde mesa",
            formula: "Na,Cl",
            img: "./data/sal.png"
        }
    
        this.listaDeFormulas[2] = {
            nombre: "Óxido\nde hierro",
            formula: "Fe,O",
            img: "./data/oxido.png"
        }
    
        this.listaDeFormulas[3] = {
            nombre: "Dióxido\nde carbono",
            formula: "C,O,O",
            img: "./data/dioxido.png"
        }
    
        this.listaDeFormulas[4] = {
            nombre: "Carbonato\nde calcio",
            formula: "Ca,C,O,O,O",
            img: "./data/carbonato.png"
        }
    
        this.listaDeFormulas[5] = {
            nombre: "Sulfato\nde cobre",
            formula: "Cu,S,O,O,O,O",
            img: "./data/sulfato.png"
        }
    
        this.listaDeFormulas[6] = {
            nombre: "Permanganato\nde potasio",
            formula: "K,Mn,O,O,O,O",
            img: "./data/permanganato.png"
        }
    
        this.listaDeFormulas[7] = {
            nombre: "Bicarbonato\nde sodio",
            formula: "Na,H,C,O,O,O",
            img: "./data/bicarbonato.png"
        }
    
        this.listaDeFormulas[8] = {
            nombre: "Etanol",
            formula: "C,C,H,H,H,H,H,O,H",
            img: "./data/etanol.png"
        }
    
        this.listaDeFormulas[9] = {
            nombre: "Ácido\nacetilsalicílico",
            formula: "C,C,C,C,C,C,C,C,C,H,H,H,H,H,H,H,H,O,O,O,O",
            img: "./data/aspirina.png"
        }
    
        
    
        
    
      
    }

    

validarFormula(){
       this.nombre = "Compuesto\nPeligroso";
       this.imagen = loadImage("./data/peligro.png")
        this.listaElementos.forEach(element => {
            this.formula = `${this.formula}${element}`
        });
if(this.suciedad==false){
    this.listaDeFormulas.forEach(f =>{
        if(this.formula==f.formula){
            this.nombre = f.nombre;
            this.imagen = loadImage(f.img) ;
        }
    });
    
}else{
    this.nombre = "Compuesto\nPeligroso"
    this.imagen = loadImage("./data/peligro.png")
}

}

pintarCompuesto(){
    this.imagen.resize(60,60);
    image(this.imagen,this.posx,this.posy)
    textSize(10);
    fill(255);
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

