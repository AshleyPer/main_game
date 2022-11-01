class Ninja {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.attackEast;
        this.idleEast;
        this.ninjaSprite;
    }


    loadNinjaAnimations() {
        this.idleEast = loadAnimation('assets/img/ninja_player/idle/idle_east/idle_1.png', 'assets/img/ninja_player/idle/idle_east/idle_2.png', 'assets/img/ninja_player/idle/idle_east/idle_3.png', 'assets/img/ninja_player/idle/idle_east/idle_4.png')
        this.attackEast = loadAnimation('assets/img/ninja_player/attack/attack_east/attack_1.png', 'assets/img/ninja_player/attack/attack_east/attack_6.png');
        this.attackEast.frameCount = 1;
    }

    createNinja() {
        this.ninjaSprite = createSprite(this.positionX, this.positionY, 40);
        this.ninjaSprite.addAnimation('idleEast', this.idleEast);
        this.ninjaSprite.addAnimation('attack', this.attackEast);
        console.log(this.ninjaSprite.getAnimationLabel());
        this.ninjaSprite.debug = true;
        this.ninjaSprite.scale = 4;
        this.attackEast.looping = false;
    }

    attackAnimation() {
        if (keyIsDown(32)) {
            this.ninjaSprite.changeAnimation('attack');
            this.attackEast.play();

        }

    }
}