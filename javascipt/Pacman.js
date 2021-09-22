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
           objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
           objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
            
       ) {
       nextMovePos = this.pos; 
       }
       return { nextMovePos, direction: this.dir };
    }
    makeMove(){
     const classesToremove = [OBJECT_TYPE.PACMAN];   
     const classesToAdd = [OBJECT_TYPE.PACMAN];
      
     return { classesToremove, classesToAdd}
    }

    setNewPos(nextMovePos){
        this.pos = nextMovePos;
    }

    handleKeyInput(e, objectExist){
        console.log(e)
        let dir;

        if(e.Keycode >= 37 && e.Keycode <= 40){
            dir = DIRECTIONS[e.key];
        }else{
            return;
        }

        const nextMovePos = this.pos + dir.movment;
        if (objectExist(nextMovePos, OBJECT_TYPE.WALL)) return;
        this.dir = dir;
    }
}

export default Pacman;