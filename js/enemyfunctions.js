class Enemy {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.enemySprite;

    }

    loadEnemyAnimations() {// all animations?

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
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEast1', this.enemy1Run);
        this.enemySprite.addAnimation('attackEast1', this.enemy1Attack);

        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5, 180);
        this.enemySprite.mirrorX(-1);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;
    }

    createEnemy2() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEast2', this.enemy2Run);
        this.enemySprite.addAnimation('attackEast2', this.enemy2Attack);

        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5, 180);
        this.enemySprite.mirrorX(-1);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;
    }
    createEnemy3() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEast3', this.enemy3Run);
        this.enemySprite.addAnimation('attackEast3', this.enemy3Attack);

        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5, 180);
        this.enemySprite.mirrorX(-1);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;

    }
    createEnemyB() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEastB', this.enemyBossRun);
        this.enemySprite.addAnimation('attackEastB', this.enemyBossAttack);
        this.enemySprite.addAnimation('deathB', this.enemyBossDeath);
        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5, 180);
        this.enemySprite.mirrorX(-1);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;

    }


    attackAnimation1(enemy, target) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player

        if(ninja.ninjaAttackOn === false){ //stops enemies from trying to remove hp from sword attack sprite
            enemy.changeAnimation('attackEast1');
            target.hp -= 1;
        }

    }
    attackAnimation2(enemy, target) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        
        if(ninja.ninjaAttackOn === false){
            enemy.changeAnimation('attackEast2');
            target.hp -= 2;
        }
    }
    attackAnimation3(enemy, target) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
       
        if(ninja.ninjaAttackOn === false){
            enemy.changeAnimation('attackEast3');
            target.hp -= 3;
        }
    }
    attackAnimationB(enemy, target) {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        
        if(ninja.ninjaAttackOn === false){
            enemy.changeAnimation('attackEastB');
            target.hp -= 5;
        }
    }

}
