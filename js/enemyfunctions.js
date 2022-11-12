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

    setUpGroups() {
        this.enemyGroupOne = new Group();
        this.enemyGroupTwo = new Group();
        this.enemyGroupThree = new Group();
    }

    createEnemy1(x, y) {
        this.enemySprite = createSprite(x, y);
        this.enemySprite.addAnimation('runEast1', this.enemy1Run);
        this.enemySprite.addAnimation('attackEast1', this.enemy1Attack);
        this.enemySprite.setCollider("rectangle", 0, 0, 10, 22);
        // this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <= 0) {
            angle = 0;

        }
        else if (x >= width) {
            angle = 180;
            this.enemySprite.mirrorX(-1)
        }

        this.enemySprite.rotationToDirection = true;
        this.enemySprite.setSpeed(1, angle);
        this.enemyGroupOne.add(this.enemySprite);
        //this.enemyPosition = enemyPosition;
        this.enemySprite.hp = 10//any changes here, need to be changed in the ganeReset function in main
        this.enemySprite.maxHp = 10
        this.maxenemy1count = 5;
    }

    createEnemy2(x, y) {
        this.enemySprite = createSprite(x, y);
        this.enemySprite.addAnimation('runEast2', this.enemy2Run);
        this.enemySprite.addAnimation('attackEast2', this.enemy2Attack);
        this.enemySprite.setCollider("rectangle", 0, 0, 12, 22);
        //this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <= 0) {
            angle = 0;

        }
        if (x >= width) {
            angle = 180;
            this.enemySprite.mirrorX(-1)
        }

        this.enemySprite.rotationToDirection = true;
        this.enemySprite.setSpeed(1, angle);
        this.enemyGroupTwo.add(this.enemySprite);
        this.enemySprite.hp = 20//any changes here, need to be changed in the ganeReset function in main
        this.enemySprite.maxHp = 20
        this.maxenemy2count = 3;
    }

    createEnemy3(x, y) {
        this.enemySprite = createSprite(x, y);
        this.enemySprite.addAnimation('runEast3', this.enemy3Run);
        this.enemySprite.addAnimation('attackEast3', this.enemy3Attack);
        this.enemySprite.setCollider("rectangle", 0, 0, 12, 24);
        //this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <= 0) {
            angle = 0;

        }
        if (x >= width) {
            angle = 180;
            this.enemySprite.mirrorX(-1)
        }

        this.enemySprite.setSpeed(1, angle);
        //this.enemySprite.addToGroup(this.enemyGroupThree);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;
        this.enemySprite.hp = 30//any changes here, need to be changed in the ganeReset function in main
        this.enemySprite.maxHp = 30
    }
    createEnemyB(x, y) {
        this.enemySprite = createSprite(x, y);
        this.enemySprite.addAnimation('runEastB', this.enemyBossRun);
        this.enemySprite.addAnimation('attackEastB', this.enemyBossAttack);
        this.enemySprite.addAnimation('deathB', this.enemyBossDeath);
        this.enemySprite.setCollider("rectangle", 0, 0, 17, 30);
        // this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        let angle;
        if (x <= 0) {
            angle = 0;

        }
        if (x >= width) {
            angle = 180;
            this.enemySprite.mirrorX(-1)
        }

        this.enemySprite.rotationToDirection = true;
        this.enemySprite.setSpeed(1, angle);
        let enemyPosition = this.enemySprite.position;
        this.enemyPosition = enemyPosition;
        this.enemySprite.hp = 100//any changes here, need to be changed in the gameReset function in main
        this.enemySprite.maxHp = 100
    }

    drawEnemy1HealthBar(enemy) {
        if (enemy.hp > 0 && countEnemy1 >0) {
            strokeWeight(4);
            stroke(0, 0, 0);
            noFill();
            rect(enemy.position.x - 28, enemy.position.y - 80, enemy.maxHp * 6 + 2, 18, 20);
            noStroke();
            fill('red');
            rect(enemy.position.x - 27, enemy.position.y - 78, enemy.maxHp * 6, 14, 20);
            fill('green');
            rect(enemy.position.x - 27, enemy.position.y - 78, enemy.hp * 6, 14, 20);
        }

    }


    drawEnemy2HealthBar(enemy) {
        if (enemy.hp > 0 && countEnemy2>0 ) {
            strokeWeight(4);
            stroke(0, 0, 0);
            noFill();
            rect(enemy.position.x - 60, enemy.position.y - 80, enemy.maxHp * 6 + 2, 18, 20);
            noStroke();
            fill('red');
            rect(enemy.position.x - 59, enemy.position.y - 78, enemy.maxHp * 6, 14, 20);
            fill('green');
            rect(enemy.position.x - 59, enemy.position.y - 78, enemy.hp * 6, 14, 20);
        }
    }

    drawEnemy3HealthBar(enemy) {
        if (enemy.hp > 0 && countEnemy3 > 0 ) {
            strokeWeight(4);
            stroke(0, 0, 0);
            noFill();
            rect(enemy.position.x - 60, enemy.position.y - 80, enemy.maxHp * 4 + 2, 18, 20);
            noStroke();
            fill('red');
            rect(enemy.position.x - 59, enemy.position.y - 78, enemy.maxHp * 4, 14, 20);
            fill('green');
            rect(enemy.position.x - 59, enemy.position.y - 78, enemy.hp * 4, 14, 20);
        }
    }

    drawEnemyBossHealthBar(enemy) {
        if (enemy.hp > 0 && enemy.position.x >= 40 && bossSpawned == true) {
            strokeWeight(4);
            stroke(0, 0, 0);
            noFill();
            rect(200, 120, enemy.maxHp * 6 + 4, 30);
            noStroke();

            fill('black');
            rect(202, 122, enemy.maxHp * 6, 26);

            fill(64, 8, 3);
            rect(202, 122, enemy.hp * 6, 26);

            textStyle(BOLD);
            textSize(20);
            fill('white');
            text("The Cyclops Demon", 400, 140)
        }
    }

    attackAnimation1() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        enemy1.enemySprite.changeAnimation('attackEast1');
        ninja.ninjaSprite.hp -= 1;
    }
    attackAnimation2() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        enemy2.enemySprite.changeAnimation('attackEast2');
        ninja.ninjaSprite.hp -= 1;
    }
    attackAnimation3() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        enemy3.enemySprite.changeAnimation('attackEast3');
        ninja.ninjaSprite.hp -= 2;
    }
    attackAnimationB() {
        // if the enemy collides with player - change animation(attackAnimation) and remove hp from player
        enemyB.enemySprite.changeAnimation('attackEastB');
        ninja.ninjaSprite.hp -= 3;
    }

}
