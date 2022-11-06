

class Ninja {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.attackEast;
        this.idleEast;
        this.ninjaSprite;
        this.ninjaAttackOn = false;
        this.ninjaDirectionEast = true;
        this.runWest;
        this.runEast;
        this.ninjaAttack;
    }

    loadNinjaAnimations() {
        this.idleEast = loadAnimation('assets/img/ninja_player/idle/idle_east/idle_1.png', 'assets/img/ninja_player/idle/idle_east/idle_2.png', 'assets/img/ninja_player/idle/idle_east/idle_3.png', 'assets/img/ninja_player/idle/idle_east/idle_4.png')
        this.idleEast.frameDelay = 15;

        this.idleWest = loadAnimation('assets/img/ninja_player/idle/idle_west/idle_1.png', 'assets/img/ninja_player/idle/idle_west/idle_2.png', 'assets/img/ninja_player/idle/idle_west/idle_3.png', 'assets/img/ninja_player/idle/idle_west/idle_4.png')
        this.idleWest.frameDelay = 15;
        
        //attack animations
        this.attackWest = loadAnimation('assets/img/ninja_player/attack/attack_west/attack_1.png', 'assets/img/ninja_player/attack/attack_west/attack_6.png');
        this.attackWest.frameDelay = 6;

        this.attackEast = loadAnimation('assets/img/ninja_player/attack/attack_east/attack_1.png', 'assets/img/ninja_player/attack/attack_east/attack_6.png');
        this.attackEast.frameDelay = 6;

        //run animations
        this.runWest = loadAnimation('assets/img/ninja_player/run/run_west/ninja_1.png', 'assets/img/ninja_player/run/run_west/ninja_4.png')
        this.runWest.frameDelay = 10;
        
        this.runEast = loadAnimation('assets/img/ninja_player/run/run_east/ninja_1.png', 'assets/img/ninja_player/run/run_east/ninja_4.png');
        this.runEast.frameDelay = 10;
    }

    createNinja() {
        this.ninjaSprite = createSprite(this.positionX, this.positionY, 40);
        this.ninjaSprite.addAnimation('idleEast', this.idleEast);
        this.ninjaSprite.addAnimation('attackEast', this.attackEast);
        this.ninjaSprite.addAnimation('idleWest', this.idleWest);
        this.ninjaSprite.addAnimation('attackWest', this.attackWest);
        this.ninjaSprite.addAnimation('runWest', this.runWest);
        this.ninjaSprite.addAnimation('runEast', this.runEast);
        let ninjaPosition = this.ninjaSprite.position;
        this.ninjaPosition = ninjaPosition;
       // console.log(this.ninjaSprite.getAnimationLabel());
        this.ninjaSprite.debug = true;
        this.ninjaSprite.scale = 4;
        //this.attackEast.looping = false;
    }

    createAttackCollision(direaction) {
        if(direaction === 'east'){
            this.ninjaAttack = createSprite(this.ninjaPosition.x + 20, this.ninjaPosition.y, 20);
            this.ninjaAttack.setCollider("rectangle", 10, 0, 30, 60)
        }else{
            this.ninjaAttack = createSprite(this.ninjaPosition.x - 20, this.ninjaPosition.y, 20);
            this.ninjaAttack.setCollider("rectangle", -10, 0, 30, 60)
        }
        this.ninjaAttack.debug = true;
    }

    move() {
        console.log(this.ninjaPosition)
        if (keyIsDown(LEFT_ARROW)) {
            this.ninjaSprite.changeAnimation('runWest')
            this.ninjaDirectionEast = false;
            this.ninjaSprite.animation.play();

            x1 += scrollSpeed;
            x2 += scrollSpeed;
            for(let i = 0; i < clouds.length; i++){
                cloudX[i] += scrollSpeed;
            }

            if(x1 > 0){
                scrollSpeed = 0;
                x1 = 0;
            } 

        }

        if (keyIsDown(RIGHT_ARROW)) {
            scrollSpeed = 2;
            this.ninjaSprite.changeAnimation('runEast')
            this.ninjaDirectionEast = true;
            this.ninjaSprite.animation.play();
            x1 -= scrollSpeed;
            x2 -= scrollSpeed;
            for(let i = 0; i < clouds.length; i++){
                cloudX[i] -= scrollSpeed;
            }

        }
    }

    attackAnimation() {
        
        if (keyIsDown(32) && this.ninjaAttackOn === false) {
            if (this.ninjaDirectionEast == true) {
                this.ninjaSprite.changeAnimation('attackEast');
                this.ninjaSprite.animation.play();
                this.createAttackCollision('east')
            }
            if (this.ninjaDirectionEast == false) {
                this.ninjaSprite.changeAnimation('attackWest');
                this.ninjaSprite.animation.play();
                this.createAttackCollision('west')
            }
            this.ninjaAttackOn = true;

        } 
        
        /*
        if(this.ninjaAttackOn = true && frameCount % 24 == 0){
            if (this.ninjaDirectionEast == true) {
                this.ninjaSprite.changeAnimation('idleEast');
            }
            else if (this.ninjaDirectionEast == false) {
                this.ninjaSprite.changeAnimation('idleWest');
            }
            this.ninjaAttackOn = false;

        }*/

    }

    isBusy(){
        if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(32)) {
            return true;
        }

    }

    notBusy(){
        let result;
        if(this.isBusy()){ //the player is Busy
            result=false //the player isBusy
        } else {
            result=true //the player is not busy
        }
        return result;
    }

    checkNinjaStatus(){

        if(this.notBusy()){
            this.ninjaAttackOn = false;
            this.ninjaSprite.animation.stop();
            this.ninjaSprite.animation.rewind();
            if(this.ninjaAttack){
                this.ninjaAttack.remove();
            }
    
            if(this.ninjaDirectionEast){
                this.ninjaSprite.changeAnimation('idleEast');
                this.ninjaSprite.animation.play('idleEast');
            }else{
                this.ninjaSprite.changeAnimation('idleWest');
                this.ninjaSprite.animation.play('idleWest');
            }
            
         
        }
        if(this.isBusy()){
            
        }
    }
    
}