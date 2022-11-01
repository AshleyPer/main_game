class Ninja{ 
    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
    }

    createNinja(){
        let ninjaSprite = createSprite(this.positionX,this.positionY, 40);
        ninjaSprite.addAnimation('idleEast', this.idleEast)
        ninjaSprite.scale = 4;
        ninjaSprite.life = 14;
        ninjaSprite.looping = true;
    }

    loadNinjaAnimations(){
        let idleEast = loadAnimation( 'assets/img/ninja_player/idle/idle_east/idle_1.png', 'assets/img/ninja_player/idle/idle_east/idle_2.png', 'assets/img/ninja_player/idle/idle_east/idle_3.png', 'assets/img/ninja_player/idle/idle_east/idle_4.png')
        this.idleEast = idleEast;
        //idleEast = loadAnimation( 'assets/img/ninja_player/idle/idle_east/idle_1.png', 'assets/img/ninja_player/idle/idle_east/idle_2.png', 'assets/img/ninja_player/idle/idle_east/idle_3.png', 'assets/img/ninja_player/idle/idle_east/idle_4.png')
    }
}