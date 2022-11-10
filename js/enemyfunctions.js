class Enemy {
    constructor(positionX, positionY) {
       this.positionX = positionX;
       this.positionY = positionY;
        this.enemySprite;
        this.attackOn = false;//not in use
        
        

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

    setUpGroups(){
        this.enemyGroupOne = new Group();
        this.enemyGroupTwo = new Group();
        this.enemyGroupThree = new Group();
    }

    createEnemy1(x,y) {
        this.enemySprite = createSprite(x, y);
        this.enemySprite.addAnimation('runEast1', this.enemy1Run);
        this.enemySprite.addAnimation('attackEast1', this.enemy1Attack);
        this.enemySprite.setCollider("rectangle",0,0,10,22 );
       // this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <0){
            angle = 0;
            
        }
        else if (x >1000){
            angle =180;
            this.enemySprite.mirrorX(-1)
        }
        
            this.enemySprite.rotationToDirection = true;
        
        
        this.enemySprite.setSpeed(1, angle);
       // this.enemySprite.mirrorX(-1);
        //let enemyPosition = this.enemySprite.position;
        
        
        this.enemyGroupOne.add(this.enemySprite);
        //this.enemyPosition = enemyPosition;
        this.enemySprite.hp = 10//any changes here, need to be changed in the ganeReset function in main
        
    }

    createEnemy2(x,y) {
        this.enemySprite = createSprite(x,y);
        this.enemySprite.addAnimation('runEast2', this.enemy2Run);
        this.enemySprite.addAnimation('attackEast2', this.enemy2Attack);
        this.enemySprite.setCollider("rectangle",0,0,12,22 );
        //this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <= -10){
            angle = 0;
            
        }
        if (x >=1000){
            angle =180;
            this.enemySprite.mirrorX(-1)
        }
        
            this.enemySprite.rotationToDirection = true;
        
        
        this.enemySprite.setSpeed(1, angle);

        this.enemyGroupTwo.add(this.enemySprite);

        //this.enemySprite.setSpeed(1, 180);
      // this.enemySprite.mirrorX(-1);
       // let enemyPosition = this.enemySprite.position;
        //this.enemyPosition = enemyPosition;
        this.enemySprite.hp = 20//any changes here, need to be changed in the ganeReset function in main
    }
    createEnemy3(x,y) {
        this.enemySprite = createSprite(x,y);
        this.enemySprite.addAnimation('runEast3', this.enemy3Run);
        this.enemySprite.addAnimation('attackEast3', this.enemy3Attack);
        this.enemySprite.setCollider("rectangle",0,0,12,24 );
        //this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <= 0){
            angle = 0;
            
        }
        if (x >=1000){
            angle =180;
            this.enemySprite.mirrorX(-1)
        }
        
            //this.enemySprite.rotationToDirection = true;
        
        
        this.enemySprite.setSpeed(1, angle);
       // this.enemyGroupThree.add(this.enemySprite);
        //this.enemySprite.setSpeed(1, 180);
        //this.enemySprite.mirrorX(-1);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;
        this.enemySprite.hp = 30//any changes here, need to be changed in the ganeReset function in main
    }
    createEnemyB(x,y) {
        this.enemySprite = createSprite(x,y);
        this.enemySprite.addAnimation('runEastB', this.enemyBossRun);
        this.enemySprite.addAnimation('attackEastB', this.enemyBossAttack);
        this.enemySprite.addAnimation('deathB', this.enemyBossDeath);
        this.enemySprite.setCollider("rectangle",0,0,17,30 );
       // this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <= -10){
            angle = 0;
            
        }
        if (x >=1000){
            angle =180;
            this.enemySprite.mirrorX(-1)
        }
        
            this.enemySprite.rotationToDirection = true;
        
        
        this.enemySprite.setSpeed(1, angle);
        //this.enemySprite.setSpeed(1, 180);
       // this.enemySprite.mirrorX(-1);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;
        this.enemySprite.hp = 40//any changes here, need to be changed in the ganeReset function in main
    }




    attackAnimation1() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        
        if(ninja.ninjaAttackOn === false){ //stops enemies from trying to remove hp from sword attack sprite
            enemy1.enemySprite.changeAnimation('attackEast1');
           ninja.ninjaSprite.hp -= 1;
           ninja.ninjaAttackOn = true
        }
        //THIS WAS AN ATTEMPT TO MOVE THE HEALTH OF ENEMIES TO A CLASS
        /*
        if (ninja.ninjaAttackOn == true){
            if(enemy1.enemySprite.hp >0){
                enemy1.enemySprite.hp--;
            }
            else if(enemy1.enemySprite.hp <=0){
                enemy1.enemySprite.position.y = -100;
                score +=5;
            }
        }
        */
     
    }
    attackAnimation2() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        
        if(ninja.ninjaAttackOn === false){
            enemy2.enemySprite.changeAnimation('attackEast2');
            ninja.ninjaSprite.hp -= 1;
            
        }
    }
    attackAnimation3() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
       
        if(ninja.ninjaAttackOn === false){
            enemy3.enemySprite.changeAnimation('attackEast3');
            ninja.ninjaSprite.hp -= 2;
        }
    }
    attackAnimationB() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        
        if(ninja.ninjaAttackOn === false){
            enemyB.enemySprite.changeAnimation('attackEastB');
            ninja.ninjaSprite.hp -= 3;

        }
    }

}
