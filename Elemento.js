class Elemento{

    constructor(posx,posy,simbolo){
        this.posx = posx;
        this.posy = posy;
        this.simbolo = simbolo;
        this.color;
        this.seleccionarElemento();
    }

    pintarElemento(){
        // fill(this.color)
        rect(this.posx,this.posy,50,50)
        fill(0)
        textSize(16);
        text(this.simbolo,this.posx,this.posy + 50);
       
    }

    seleccionarElemento(){
        switch (this.simbolo){
            case "H":
                //this.color = 233,0,200
                break;

            case "O":
                //this.color = 0,0,200
                break;

            case "Na":
              // this.color = 233,0,0
                break;

            case "Cl":
               // this.color = 100,0,100
                break;

            case "Fe":
               // this.color = 100,100,100
                break;

            case "Ca":
               // this.color = 133,200,200
                break;

            case "S":
               // this.color = 0,0,200
                break;
            
             case "K":
               // this.color = 100,200,200
                 break;

            case "Mn":
                //this.color = 250,250,250
                break;

                case "C":
                // this.color = 0,0,0
                    break;

                 case "Cu":
               // this.color = 184,115,51
                    break;
            
         }
    }

    seleccionarElemento(mousex,mousey){
    
        if(mousex>this.posx-25 && mousex < this.posx+25 && mousey > this.posy - 25 && mousey < this.posy + 25){
           return true;
        }

    }

    getPosX(){
        return this.posx;
    }

    getPosY(){
        return this.posy;
    }

    getSimbolo(){
        return this.simbolo
    }

    setPosX(x){
        this.posx = x;
    }

    setPosY(y){
        this.posy = y;
    }

}