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
        this.ninjaSprite.setCollider("rectangle",0,0,10,20 );
        //this.ninjaSprite.debug = true;
        this.ninjaSprite.scale = 4;
        this.ninjaSprite.immovable = true;
        this.ninjaSprite.maxHP = 250;
        this.ninjaSprite.hp = 250;//any changes here, need to be changed in the ganeReset function in main
        //this.attackEast.looping = false;
    }

    drawNinjaHealthBar() {
        strokeWeight(4);
        stroke(0, 0, 0);
        noFill();
        rect(20, 38, this.ninjaSprite.maxHP * 1.2 + 4, 28, 20);
        noStroke();
        fill('red');
        rect(22, 40, this.ninjaSprite.maxHP * 1.2, 24, 20);
        fill('green');
        rect(22, 40, this.ninjaSprite.hp * 1.2, 24, 20);
        textFont(font);
        textStyle(BOLD);
        textSize(22);
        fill('black');
        text("Your Health", this.ninjaSprite.maxHP / 2 , 58);
    }

    //create a sprite for the collision with the sword
    //it temporarily is not invisible
    createAttackCollision(direction) {
        if (direction === 'east') {
            this.ninjaAttack = createSprite(this.ninjaPosition.x + 20, this.ninjaPosition.y, 20);
            this.ninjaAttack.setCollider("rectangle", 15, 0, 20, 20);

        } else {
            this.ninjaAttack = createSprite(this.ninjaPosition.x - 20, this.ninjaPosition.y, 20);
            this.ninjaAttack.setCollider("rectangle", -15, 0, 20, 20);

        }
        //this.ninjaAttack.debug = true;
        this.ninjaAttack.immovable = true;
        this.ninjaAttack.visible = false;
    }

    move() {
        
        if (keyIsDown(LEFT_ARROW)) {
            if(!keyIsDown(32)){
                //ninjaAttackSound.stop();//comment this out if sword sound buggy
                
            }
            this.ninjaSprite.changeAnimation('runWest')
            this.ninjaDirectionEast = false;
            this.ninjaSprite.animation.play();

            if (keyIsDown(LEFT_ARROW) && this.ninjaSprite.position.x >= 200){
                this.ninjaSprite.position.x -= scrollSpeed;
            }

            if(this.ninjaSprite.position.x < width / 2){
                x1 += scrollSpeed;
                x2 += scrollSpeed;
                x3 += scrollSpeed;
                //
                enemy1.enemySprite.position.x += scrollSpeed;
                enemy2.enemySprite.position.x += scrollSpeed;
                enemy3.enemySprite.position.x += scrollSpeed;
                enemyB.enemySprite.position.x += scrollSpeed;
            }
        }
        /*
        //older code in case - but background ends to left early
         if (keyIsDown(LEFT_ARROW)) {
            this.ninjaSprite.changeAnimation('runWest')
            this.ninjaDirectionEast = false;
            this.ninjaSprite.animation.play();
            this.ninjaSprite.position.x-=1.5
            x1 += scrollSpeed;
            x2 += scrollSpeed;
            enemy1.enemySprite.position.x += scrollSpeed
            enemy2.enemySprite.position.x += scrollSpeed
            enemy3.enemySprite.position.x += scrollSpeed
            enemyB.enemySprite.position.x += scrollSpeed
        }
    */

        if (keyIsDown(RIGHT_ARROW)) {
            if(!keyIsDown(32)){
               // ninjaAttackSound.stop();
                
            }
            this.ninjaSprite.changeAnimation('runEast')
            this.ninjaDirectionEast = true;
            this.ninjaSprite.animation.play();
            if (keyIsDown(RIGHT_ARROW) && this.ninjaSprite.position.x <= width - 200){
                this.ninjaSprite.position.x += scrollSpeed;
            }

            if(this.ninjaSprite.position.x > width / 2){
                x1 -= scrollSpeed;
                x2 -= scrollSpeed;
                x3 -= scrollSpeed;
                enemy1.enemySprite.position.x -= scrollSpeed;
                enemy2.enemySprite.position.x -= scrollSpeed;
                enemy3.enemySprite.position.x -= scrollSpeed;
                enemyB.enemySprite.position.x -= scrollSpeed;
            }
        }
        /*
        //older code in case
        
        if (keyIsDown(RIGHT_ARROW)) {
            this.ninjaSprite.changeAnimation('runEast')
            this.ninjaDirectionEast = true;
            this.ninjaSprite.animation.play();
            this.ninjaSprite.position.x+=1.5;
            x1 -= scrollSpeed;
            x2 -= scrollSpeed;
            enemy1.enemySprite.position.x -= scrollSpeed
            enemy2.enemySprite.position.x -= scrollSpeed
            enemy3.enemySprite.position.x -= scrollSpeed
            enemyB.enemySprite.position.x -= scrollSpeed
        }
        */
    }

    attackAnimation() {
        if (keyIsDown(32)) {
            time++;
            if (this.ninjaDirectionEast == true) {
                this.ninjaSprite.changeAnimation('attackEast');
                this.ninjaSprite.animation.play();
                if (time >= wait) {
                    this.createAttackCollision('east');
                    time = 0;
                }
            }

            if (this.ninjaDirectionEast == false) {
                this.ninjaSprite.changeAnimation('attackWest');
                this.ninjaSprite.animation.play();
                if (time >= wait) {
                    this.createAttackCollision('west');
                    time = 0;
                }
            }
            this.ninjaAttackOn = true;
            if(!ninjaAttackSound.isPlaying()){
                ninjaAttackSound.setVolume(0.25);
                ninjaAttackSound.play();
            }

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
            ninjaAttackSound.stop();
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
            resetGame();//resets game variables
            //stops the game over screen from constantly looping
        }
    }

    //the function for the player fighting
    enemyFight(player, enemy) {
        enemy.hp -= 0.5; //any enemy hit has their hp reduced by 1
        if (enemy1.enemySprite.hp <= 0) { //checks if tier 1 enemy drops to 0 hp
            enemy1.enemySprite.remove();
            if (countEnemy1 < enemy1.maxenemy1count && countEnemy1 < 6) {
                enemy1.createEnemy1(random(enemyStartPosX), PosY);
                
                countEnemy1++; //counts tier 1 enemy spawns.
            }
        }

        if (enemy1.enemyGroupOne.length == 0 && countEnemy1 > enemy1.maxenemy1count -1  && countEnemy2 < 1) {
            enemy2.createEnemy2(random(enemyStartPosX), PosY); //after the 4th kill, spawns tier 2 enemies
            
            countEnemy2++;
            makeHealthPack(W/2, height - 15);
        }

        if (enemy2.enemySprite.hp <= 0) { //checks if tier 2 enemy drops to 0 hp
            enemy2.enemySprite.remove();
            if (countEnemy2 < enemy2.maxenemy2count) {
                enemy2.createEnemy2(random(enemyStartPosX), PosY); //spawns tier 2 enemy if less than 3 have been killed
                countEnemy2++; //counts tier 2 kills
            }
        }

        if (enemy2.enemyGroupTwo.length == 0 && countEnemy2 > enemy2.maxenemy2count -1 && enemy1.enemyGroupOne.length == 0 && countEnemy3 <1) {
            enemy3.createEnemy3(random(enemyStartPosX), PosY); //spawns tier 3 enemy
            countEnemy3++;
            makeHealthPack(W/2, height - 15);
        }
        if (enemy3.enemySprite.hp <= 0) { //checks if tier 2 enemy drops to 0 hp
            enemy3.enemySprite.remove();
            if (countEnemy3 < 2) {
                enemy3.createEnemy3(random(enemyStartPosX), PosY); //spawns tier 2 enemy if less than 3 have been killed
                countEnemy3++; //counts tier 2 kills
            }
        }

        if (enemy3.enemySprite.hp <= 0 && bossSpawned == false) { //checks if tier 3 enemy hits 0 hp 
            enemy3.enemySprite.remove();
            enemyB.createEnemyB(random(enemyStartPosX), PosY); //spawns boss
            bossSpawned = true;
            makeHealthPack(W/2, height - 15);
        }

        if (enemyB.enemySprite.hp <= 0) { //checks if boss hits 0 hp
            enemyB.enemySprite.changeAnimation('deathB', enemyB.enemyBossDeath);
            enemyB.enemySprite.remove();
            screenState = 5;
            noStroke();
            fill(255, 0, 0);
            textSize(50);

        }
    }

    restoreHP(player, pack) {
        healthPackSound.setVolume(0.2);
        healthPackSound.play();
        pack.remove();
        player.hp = player.maxHP;
    }

}
