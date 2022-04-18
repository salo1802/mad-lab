class Elemento{

    constructor(posx,posy,simbolo){
        this.posx = posx;
        this.posy = posy;
        this.simbolo = simbolo;
        this.img;
        //this.seleccionarElemento();
        switch (this.simbolo){
            case "H":
                this.img = loadImage('./data/h.png');
                break;

            case "O":
                this.img = loadImage('./data/o.png');
                break;

            case "Na":
                this.img = loadImage('./data/na.png');
                break;

            case "Cl":
                this.img = loadImage('./data/cl.png');
                break;

            case "Fe":
                this.img = loadImage('./data/fe.png');
                break;

            case "Ca":
                this.img = loadImage('./data/ca.png');
                break;

            case "S":
                this.img = loadImage('./data/s.png');
                break;
            
             case "K":
                this.img = loadImage('./data/k.png');
                 break;

            case "Mn":
                this.img = loadImage('./data/mn.png');
                break;

                case "C":
                    this.img = loadImage('./data/c.png');
                    break;

                 case "Cu":
                    this.img = loadImage('./data/cu.png');
                    break;}
    }

    pintarElemento(){
        // fill(this.color)
        this.img.resize(60,60)
        image(this.img,this.posx,this.posy);
        fill(250)
        textSize(16);
        text(this.simbolo,this.posx,this.posy + 60);
       
    }

    seleccionarElemento(){
        switch (this.simbolo){
            case "H":
                this.img = loadImage('./data/h.png');
                break;

            case "O":
                this.img = loadImage('./data/o.png');
                break;

            case "Na":
                this.img = loadImage('./data/na.png');
                break;

            case "Cl":
                this.img = loadImage('./data/cl.png');
                break;

            case "Fe":
                this.img = loadImage('./data/fe.png');
                break;

            case "Ca":
                this.img = loadImage('./data/ca.png');
                break;

            case "S":
                this.img = loadImage('./data/s.png');
                break;
            
             case "K":
                this.img = loadImage('./data/k.png');
                 break;

            case "Mn":
                this.img = loadImage('./data/mn.png');
                break;

                case "C":
                    this.img = loadImage('./data/c.png');
                    break;

                 case "Cu":
                    this.img = loadImage('./data/cu.png');
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