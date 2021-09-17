import  {OBJECT_TYPE, DIRECTIONS} from './setup'

class Pacman {
    constructor(speed, startpos){
        this.pos = startpos;
        this.speed = speed;
        this.dir = null;
        this.timer = 0;
        this.powerPil = false;   
        this.rototaion = true;

    
    }

    shouldMove() {
        if (!this.dir) return false;
    
        if (this.timer === this.speed){
            this.timer = 0;
            return true;
        }
        this.timer++
    }        
   
   getNextMove(objectExist)  {
       let nextMovePos = this.pos + this.dir.movement; 
       

       if(
           objectExist(nextmovePos, OBJECT_TYPE.WALL) ||
           objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
            
       ) {
       nextmovePos = this.pos; 
       }
       return { nextMovePos, direction: this.dir };
    }
}