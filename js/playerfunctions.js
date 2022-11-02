let ninjaAttackOn = false;
let ninjaDirectionEast = true;

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
        this.idleWest = loadAnimation('assets/img/ninja_player/idle/idle_west/idle_1.png', 'assets/img/ninja_player/idle/idle_west/idle_2.png', 'assets/img/ninja_player/idle/idle_west/idle_3.png', 'assets/img/ninja_player/idle/idle_west/idle_4.png')
        this.attackWest = loadAnimation('assets/img/ninja_player/attack/attack_west/attack_1.png', 'assets/img/ninja_player/attack/attack_west/attack_6.png');
       // this.attackEast.frameCount = 1;
    }

    createNinja() {
        this.ninjaSprite = createSprite(this.positionX, this.positionY, 40);
        this.ninjaSprite.addAnimation('idleEast', this.idleEast);
        this.ninjaSprite.addAnimation('attackEast', this.attackEast);
        this.ninjaSprite.addAnimation('idleWest', this.idleWest);
        this.ninjaSprite.addAnimation('attackWest', this.attackWest);
        console.log(this.ninjaSprite.getAnimationLabel());
        this.ninjaSprite.debug = true;
        this.ninjaSprite.scale = 4;
        //this.attackEast.looping = false;
       
    }
    move(){
        if (keyIsDown(LEFT_ARROW)){
            this.ninjaSprite.position.x = this.ninjaSprite.position.x -1
            this.ninjaSprite.changeAnimation('idleWest')
            ninjaDirectionEast = false;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.ninjaSprite.position.x = this.ninjaSprite.position.x +1
            this.ninjaSprite.changeAnimation('idleEast')
            ninjaDirectionEast = true;
        }
    }
  
    attackAnimation() {
        if (keyIsDown(32) && ninjaAttackOn === false) {
            if(ninjaDirectionEast == true){
                this.ninjaSprite.changeAnimation('attackEast');
            }
            if(ninjaDirectionEast == false){
                this.ninjaSprite.changeAnimation('attackWest');
            }
          //  this.attackEast.play();
          ninjaAttackOn = true;

        }
        else if (keyIsDown(32) && ninjaAttackOn === true) {
            if (ninjaDirectionEast == true){
                this.ninjaSprite.changeAnimation('idleEast');
            }
            else if (ninjaDirectionEast == false){
                this.ninjaSprite.changeAnimation('idleWest');
            }
          //  this.attackEast.play();
          ninjaAttackOn = false;

        }

    }
}