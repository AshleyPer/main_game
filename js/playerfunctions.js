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
        this.ninjaSprite.immovable = true;
        this.ninjaSprite.hp = 50;
        //this.attackEast.looping = false;
    }

    //create a sprite for the collision with the sword
    //it temporarily is not invisible
    createAttackCollision(direction) {
        if (direction === 'east') {
            this.ninjaAttack = createSprite(this.ninjaPosition.x + 20, this.ninjaPosition.y, 20);
            this.ninjaAttack.setCollider("rectangle", 10, 0, 30, 60)
        } else {
            this.ninjaAttack = createSprite(this.ninjaPosition.x - 20, this.ninjaPosition.y, 20);
            this.ninjaAttack.setCollider("rectangle", -10, 0, 30, 60)
        }
        this.ninjaAttack.debug = true;
        this.ninjaAttack.immovable = true;
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.ninjaSprite.changeAnimation('runWest')
            this.ninjaDirectionEast = false;
            this.ninjaSprite.animation.play();
            this.ninjaSprite.position.x--

            x1 += scrollSpeed;
            x2 += scrollSpeed;
            enemy1.enemySprite1.position.x += scrollSpeed
            enemy2.enemySprite2.position.x += scrollSpeed
            enemy3.enemySprite3.position.x += scrollSpeed
            enemyB.enemySprite4.position.x += scrollSpeed

        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.ninjaSprite.changeAnimation('runEast')
            this.ninjaDirectionEast = true;
            this.ninjaSprite.animation.play();
            this.ninjaSprite.position.x++;

            x1 -= scrollSpeed;
            x2 -= scrollSpeed;
            enemy1.enemySprite1.position.x -= scrollSpeed
            enemy2.enemySprite2.position.x -= scrollSpeed
            enemy3.enemySprite3.position.x -= scrollSpeed
            enemyB.enemySprite4.position.x -= scrollSpeed
        }
    }

    attackAnimation() {
        //console.log('ms pre', millis());
        //console.log('time pre', time);
       // console.log('-------------------');
        if (keyIsDown(32) ) {
            if (this.ninjaDirectionEast == true) {
                    this.ninjaSprite.changeAnimation('attackEast');
                    this.ninjaSprite.animation.play();
                    //console.log('ms before if', millis());
                    //console.log('time before if', time);
                   // console.log('-------------------');
                    if(millis() - time >= wait){
                        //console.log('ms in if', millis());
                        //console.log('time in if', time);
                        //console.log('-------------------');
                        this.createAttackCollision('east');
                        time = millis();
                        //console.log('ms post', millis());
                        //console.log('time post', time);
                        //console.log('-------------------');
                    }
                    if(keyIsDown(RIGHT_ARROW)){
                        this.ninjaSprite.position.x ++;
                    }
            }

            if (this.ninjaDirectionEast == false) {
                    this.ninjaSprite.changeAnimation('attackWest');
                    this.ninjaSprite.animation.play();
                    if(millis() - time >= wait){
                        this.createAttackCollision('west');
                        time = millis();
                    }
            }
            //this.ninjaAttackOn = true;

        }
    }

    isBusy() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(32)) {
            return true;
        }

    }

    notBusy() {
        let result;
        if (this.isBusy()) { //the player is Busy
            result = false //the player isBusy
        } else {
            result = true //the player is not busy
        }
        return result;
    }

    checkNinjaStatus() {

        if (this.notBusy()) {
            this.ninjaAttackOn = false;
            this.ninjaSprite.animation.stop();
            this.ninjaSprite.animation.rewind();
            if (this.ninjaAttack) {
                this.ninjaAttack.remove();
            }

            if (this.ninjaDirectionEast) {
                this.ninjaSprite.changeAnimation('idleEast');
                this.ninjaSprite.animation.play('idleEast');
            } else {
                this.ninjaSprite.changeAnimation('idleWest');
                this.ninjaSprite.animation.play('idleWest');
            }


        }
        if (this.isBusy()) {

        }

        if (this.ninjaSprite.hp <= 0) {
            screenState = 3;
            ninja.ninjaSprite.hp = 20; //stops the game over screen from constantly looping
        }
    }

}