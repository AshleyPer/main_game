class Ninja{ 
    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
    }

    createNinja(){
        let ninjaSprite = createSprite(this.positionX,this.positionY, 40);
        ninjaSprite.addAnimation('idleEast', idleEast)
        ninjaSprite.scale = 4;
        ninjaSprite.life = 14;
        ninjaSprite.looping = true;
    }
}