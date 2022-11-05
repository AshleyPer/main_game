class Enemy {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.enemySprite;
        
    }

   loadEnemyAnimations() {// all animations?
   
            
        this.enemy1Attack = loadAnimation('assets/img/enemies/tier1_red_guy/attack/attack1.png', 'assets/img/enemies/tier1_red_guy/attack/attack6.png');
        this.enemy1Run = loadAnimation('assets/img/enemies/tier1_red_guy/run/run1.png', 'assets/img/enemies/tier1_red_guy/run/run4.png');
        this.enemy2Attack = loadAnimation('assets/img/enemies/tier2_red_ninja/attack/attack1.png', 'assets/img/enemies/tier2_red_ninja/attack/attack5.png');
        this.enemy2Run = loadAnimation('assets/img/enemies/tier2_red_ninja/run/run1.png', 'assets/img/enemies/tier2_red_ninja/run/run4.png');
        this.enemy3Attack = loadAnimation('assets/img/enemies/tier3_red_orange_ninja/attack/attack1.png', 'assets/img/enemies/tier3_red_orange_ninja/attack/attack5.png');
        this.enemy3Run = loadAnimation('assets/img/enemies/tier3_red_orange_ninja/run/run1.png', 'assets/img/enemies/tier3_red_orange_ninja/run/run4.png');
        this.enemyBossAttack = loadAnimation('assets/img/enemies/boss/attack/boss_attack1.png', 'assets/img/enemies/boss/attack/boss_attack5.png');
        this.enemyBossRun = loadAnimation('assets/img/enemies/boss/run/run1.png', 'assets/img/enemies/boss/run/run4.png');
        this.enemyBossDeath = loadAnimation('assets/img/enemies/boss/death/boss_death1.png', 'assets/img/enemies/boss/death/boss_death4.png');
    }

    createEnemy1() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEast1', this.enemy1Run);
        this.enemySprite.addAnimation('attackEast1', this.enemy1Attack);
       
        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5,0);

    }

    createEnemy2() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEast2', this.enemy2Run);
        this.enemySprite.addAnimation('attackEast2', this.enemy2Attack);
       
        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5,0);

    }
    createEnemy3() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEast3', this.enemy3Run);
        this.enemySprite.addAnimation('attackEast3', this.enemy3Attack);
       
        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5,0);

    }
    createEnemyB() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEastB', this.enemyBossRun);
        this.enemySprite.addAnimation('attackEastB', this.enemyBossAttack);
        this.enemySprite.addAnimation('deathB', this.enemyBossDeath);
        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5,0);

    }
    move() {


        //due to interaction with scenery or player
       
      
    }
    
    attackAnimation1() {
       // if the enemy collides with player - change animation(attackAnimation) with conditions
      // if (dist(this.enemySprite.position.x, this.enemySprite.position.y, ninja.position.x,
    this.enemySprite.changeAnimation('attackEast1');
   
    }
    attackAnimation2() {
        // if the enemy collides with player - change animation(attackAnimation) with conditions
       // if (dist(this.enemySprite.position.x, this.enemySprite.position.y, ninja.position.x,
     this.enemySprite.changeAnimation('attackEast2');
    
     }
     attackAnimation3() {
        // if the enemy collides with player - change animation(attackAnimation) with conditions
       // if (dist(this.enemySprite.position.x, this.enemySprite.position.y, ninja.position.x,
     this.enemySprite.changeAnimation('attackEast3');
     
     }
     attackAnimationB() {
        // if the enemy collides with player - change animation(attackAnimation) with conditions
       // if (dist(this.enemySprite.position.x, this.enemySprite.position.y, ninja.position.x,
     this.enemySprite.changeAnimation('attackEastB');
     
     }

}
