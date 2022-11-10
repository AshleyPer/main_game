class Enemy {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.enemySprite;
        this.attackOn = false;//not in use
        this.enemySprite1;
    }

    loadEnemyAnimations() {

        this.enemy1Attack = loadAnimation('assets/img/enemies/tier1_red_guy/attack/attack1.png', 'assets/img/enemies/tier1_red_guy/attack/attack6.png');

        this.enemy1Run = loadAnimation('assets/img/enemies/tier1_red_guy/run/run1.png', 'assets/img/enemies/tier1_red_guy/run/run4.png');
        this.enemy1Run.frameDelay = 8;

        this.enemy2Attack = loadAnimation('assets/img/enemies/tier2_red_ninja/attack/attack1.png', 'assets/img/enemies/tier2_red_ninja/attack/attack5.png');

        this.enemy2Run = loadAnimation('assets/img/enemies/tier2_red_ninja/run/run1.png', 'assets/img/enemies/tier2_red_ninja/run/run4.png');
        this.enemy2Run.frameDelay = 8;

        this.enemy3Attack = loadAnimation('assets/img/enemies/tier3_red_orange_ninja/attack/attack1.png', 'assets/img/enemies/tier3_red_orange_ninja/attack/attack5.png');
        this.enemy3Run = loadAnimation('assets/img/enemies/tier3_red_orange_ninja/run/run1.png', 'assets/img/enemies/tier3_red_orange_ninja/run/run4.png');
        this.enemy3Run.frameDelay = 8;

        this.enemyBossAttack = loadAnimation('assets/img/enemies/boss/attack/boss_attack1.png', 'assets/img/enemies/boss/attack/boss_attack5.png');
        this.enemyBossRun = loadAnimation('assets/img/enemies/boss/run/run1.png', 'assets/img/enemies/boss/run/run4.png');
        this.enemyBossRun.frameDelay = 8;

        this.enemyBossDeath = loadAnimation('assets/img/enemies/boss/death/boss_death1.png', 'assets/img/enemies/boss/death/boss_death4.png');
    }

    createEnemy1() {
        this.enemySprite1 = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite1.addAnimation('runEast1', this.enemy1Run);
        this.enemySprite1.addAnimation('attackEast1', this.enemy1Attack);

        this.enemySprite1.debug = true;
        this.enemySprite1.scale = 4;
        this.enemySprite1.setSpeed(1, 180);
        this.enemySprite1.mirrorX(-1);
        let enemyPosition1 = this.enemySprite1.position;
        this.enemyPosition1 = enemyPosition1;
    }

    createEnemy2() {
        this.enemySprite2 = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite2.addAnimation('runEast2', this.enemy2Run);
        this.enemySprite2.addAnimation('attackEast2', this.enemy2Attack);

        this.enemySprite2.debug = true;
        this.enemySprite2.scale = 4;
        this.enemySprite2.setSpeed(1, 180);
        this.enemySprite2.mirrorX(-1);
        let enemyPosition2 = this.enemySprite2.position;
        this.enemyPosition2 = enemyPosition2;
    }
    createEnemy3() {
        this.enemySprite3 = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite3.addAnimation('runEast3', this.enemy3Run);
        this.enemySprite3.addAnimation('attackEast3', this.enemy3Attack);

        this.enemySprite3.debug = true;
        this.enemySprite3.scale = 4;
        this.enemySprite3.setSpeed(1, 180);
        this.enemySprite3.mirrorX(-1);
        let enemyPosition3 = this.enemySprite3.position;
        this.enemyPosition3 = enemyPosition3;

    }
    createEnemyB() {
        this.enemySprite4 = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite4.addAnimation('runEastB', this.enemyBossRun);
        this.enemySprite4.addAnimation('attackEastB', this.enemyBossAttack);
        this.enemySprite4.addAnimation('deathB', this.enemyBossDeath);
        this.enemySprite4.debug = true;
        this.enemySprite4.scale = 4;
        this.enemySprite4.setSpeed(1, 180);
        this.enemySprite4.mirrorX(-1);
        let enemyPosition4 = this.enemySprite4.position;
        this.enemyPosition4 = enemyPosition4;

    }

    attackAnimation1(player, enemy) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        console.log(ninja)
         if(ninja.ninjaAttackOn === false){ //stops enemies from trying to remove hp from sword attack sprite
            enemy1.enemySprite1.changeAnimation('attackEast1');
            ninja.ninjaSprite.hp -= 1;
            this.attackOn = true;//boolean not currently in use
            
         }
        this.attackOn =false;//not in use
    }

    attackAnimation2(player, enemy) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        
        if(ninja.ninjaAttackOn === false){
            enemy2.enemySprite2.changeAnimation('attackEast2');
            ninja.ninjaSprite.hp -= 2;
        }
    }
    attackAnimation3(player, enemy) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
       
        if(ninja.ninjaAttackOn === false){
            enemy3.enemySprite3.changeAnimation('attackEast3');
            ninja.ninjaSprite.hp -= 3;
        }
    }
    attackAnimationB(player, enemy) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        
        if(ninja.ninjaAttackOn === false){
            enemyB.enemySprite4.changeAnimation('attackEastB');
            ninja.ninjaSprite.hp -= 5;

        }
    }

}
