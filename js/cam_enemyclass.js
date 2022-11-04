class newEnemy {
    constructor(x, y) {

        this.x = x;
        this.y = y;

        //groups
        this.lightGroup;
        this.mediumGroup;
        this.heavyGroup;
        this.bossGroup;
        this.nmeLaserGroupLight;
        this.nmeLaserGroupMedium;
        this.nmeLaserGroupHeavy;
        this.pMSgroup;
        this.pHPgroup;
        this.droneGroup;
        this.missleGroup;
        this.biggerLas;

        //images
        this.enemyLightImage;
        this.enemyMediumImage;
        this.enemyHeavyImage;
        this.droneBossImage;
        this.droneImage;
        this.laserBossImage;
        this.missleBossImage;
        this.explosion1;
        this.explosion2;
        this.explosion3;
        this.explosion4;
        this.explosion5;
        this.powerupHP;
        this.powerupMissle;

        //variables
        this.speedYL;
        this.speedYM;
        this.speedYH;
        this.speedYB;
        this.speedXL;
        this.speedXM;
        this.speedXH;
        this.speedXB;
        this.bossCounter;
        this.maxEnemies = false;
        this.rng;
        this.waveCount = 0;

        //sounds
        this.bossLaserSound;
        this.missleSound;
        this.laserSound;

    }

    preload() {
        this.enemyLightImage = loadImage('./assets/sprites/enemy_ship_light.png');
        this.enemyMediumImage = loadImage('./assets/sprites/enemy_ship_medium.png');
        this.enemyHeavyImage = loadImage('./assets/sprites/enemy_ship_heavy.png');
        this.droneBossImage = loadImage('./assets/sprites/drone_boss.PNG');
        this.droneImage = loadImage('./assets/sprites/boss_drones.PNG');
        this.laserBossImage = loadImage('./assets/sprites/laser_boss.png'); //the boss
        this.missleBossImage = loadImage('./assets/sprites/missle_boss.png');
        this.bossLaserImage = loadImage('./assets/sprites/boss_laser_sprite.png'); //the laser
        this.bossMissleImage = loadImage('./assets/sprites/rocket.png');
        this.enemyLaserImage = loadImage('./assets/sprites/enemy_laser.png');
        this.powerupHP = loadImage('./assets/sprites/powerup_box_health.png');
        this.powerupMissle = loadImage('./assets/sprites/powerup_box_missles.png');
        this.bossLaserSound = loadSound('./assets/audio/boss_laser.mp4');
        this.laserSound = loadSound('./assets/audio/ship_fire02.ogg');
        this.missleSound = loadSound('./assets/audio/missle.mp3');
    }

    setup() {
        this.lightGroup = new Group();
        this.mediumGroup = new Group();
        this.heavyGroup = new Group();
        this.bossGroup = new Group();
        this.nmeLaserGroupLight = new Group();
        this.nmeLaserGroupMedium = new Group();
        this.nmeLaserGroupHeavy = new Group();
        this.pHPgroup = new Group();
        this.pMSgroup = new Group();
        this.droneGroup = new Group();
        this.missleGroup = new Group();
        this.biggerLas = new Group();

        this.hX;
        this.mX;
        this.speedYL = 4;
        this.speedYM = 4;
        this.speedYH = 4;
        this.speedYB = 3;
        this.speedXL = random(-5, 5);
        this.speedXM = random(-4, 4);
        this.speedXH = random(-3, 3);
        this.speedXB = random(-2, 2);
    }

    //weapons
    makeEnemyLasersLight(x, y) {
        let nmeLasers = createSprite(x, y);
        nmeLasers.addImage(this.enemyLaserImage);
        nmeLasers.setSpeed(5, 90);
        this.nmeLaserGroupLight.add(nmeLasers);
        this.nmeLaserGroupLight.cull(1);
    }

    makeEnemyLasersMedium(x, y) {
        let nmeLasers = createSprite(x, y);
        nmeLasers.addImage(this.enemyLaserImage);
        nmeLasers.setSpeed(5, 90);
        this.nmeLaserGroupMedium.add(nmeLasers);
        this.nmeLaserGroupMedium.cull(1);
    }

    makeEnemyLasersHeavy(x, y) {
        let nmeLasers = createSprite(x, y);
        nmeLasers.addImage(this.enemyLaserImage);
        nmeLasers.setSpeed(5, 90);
        this.nmeLaserGroupHeavy.add(nmeLasers);
        this.nmeLaserGroupHeavy.cull(1);
    }

    spawnHealthPowerup(x, y) {
        let pHP = createSprite(x, y);
        pHP.addImage(this.powerupHP);
        pHP.setSpeed(3, 90);
        pHP.setCollider('rectangle');
        this.pHPgroup.add(pHP);
        this.pHPgroup.cull(1);

    }

    spawnMisslePowerup(x, y) {
        let pMS = createSprite(x, y);
        pMS.addImage(this.powerupMissle);
        pMS.setSpeed(3, 90);
        pMS.setCollider('rectangle');
        this.pMSgroup.add(pMS);
        this.pMSgroup.cull(1);

    }


    //ships
    makeEnemyLight(x, y) {
        let tempLight = createSprite(x, y);
        tempLight.addImage(this.enemyLightImage);
        tempLight.debug = false;
        tempLight.setCollider('rectangle');
        tempLight.hp = 4;
        this.lightGroup.add(tempLight);
    }

    makeEnemyMed(x, y) {
        let tempMed = createSprite(x, y);
        tempMed.addImage(this.enemyMediumImage);
        tempMed.debug = false;
        tempMed.setCollider('rectangle');
        tempMed.hp = 10;
        this.mediumGroup.add(tempMed);
    }

    makeEnemyHeavy(x, y) {
        let tempHeavy = createSprite(x, y);
        tempHeavy.addImage(this.enemyHeavyImage);
        tempHeavy.debug = false;
        tempHeavy.setCollider('rectangle');
        tempHeavy.hp = 24;
        this.heavyGroup.add(tempHeavy);
    }

    makeEnemyLasBoss(x, y) {
        let lasBoss = createSprite(x, y);
        lasBoss.addImage(this.laserBossImage);
        lasBoss.debug = false;
        lasBoss.setCollider('rectangle');
        lasBoss.hp = 120;
        this.bossGroup.add(lasBoss);

    }

    makeEnemyDroneBoss(x, y) {
        let drnBoss = createSprite(x, y);
        drnBoss.addImage(this.droneBossImage);
        drnBoss.debug = false;
        drnBoss.setCollider('rectangle');
        drnBoss.hp = 120;
        this.bossGroup.add(drnBoss);
    }

    makeEnemyMissleBoss(x, y) {
        let misBoss = createSprite(x, y);
        misBoss.addImage(this.missleBossImage);
        misBoss.debug = false;
        misBoss.setCollider('rectangle');
        misBoss.hp = 120;
        this.bossGroup.add(misBoss);
    }

    makeBossLasWeapon(x, y) {
        let bigLas = createSprite(x, y);
        bigLas.addImage(this.bossLaserImage);
        bigLas.setCollider('rectangle', 0, 0, 20, 730);
        bigLas.debug = true;
        bigLas.setSpeed(12, 90);
        if (bigLas.position.y > height * 2) {
            bigLas.remove();
        }
        this.biggerLas.add(bigLas);
    }

    makeBossDroneWeapon(x, y) {
        let tempDrone = createSprite(x, y);
        tempDrone.addImage(this.droneImage);
        tempDrone.setCollider('rectangle');
        tempDrone.hp = 1;
        tempDrone.attractionPoint(3, ship.plShip.position.x, ship.plShip.position.y);
        this.droneGroup.add(tempDrone);
        this.droneGroup.cull(20);
    }

    makeBossMissleWeapon(x, y) {
        let tempMissle = createSprite(x, y);
        tempMissle.addImage(this.bossMissleImage);
        tempMissle.setCollider('rectangle');
        tempMissle.setSpeed(4, 90);
        this.missleGroup.add(tempMissle);
        this.missleGroup.cull(20);
    }

    //other functions
    update() {
        this.hX = random(10, width - 10);
        this.mX = random(10, width - 10);
        this.lightGroup.cull(60);
        if (this.waveCount == 0 && enemyCount == 0) {
            this.waveCount += 1;
        }

        if (this.maxEnemies == false && enemyCount < this.waveCount) {
            for (let i = 0; i < this.waveCount; i++) {
                if (this.waveCount < 10) {
                    this.makeEnemyLight(random(20, width - 20), -50);
                    enemyCount += 1;
                    if (this.lightGroup.length > 0) {
                        this.maxEnemies = true;
                    }
                }
                if (this.waveCount > 10 && this.waveCount < 20 && enemyCount < this.waveCount - 10) {
                    this.makeEnemyMed(random(20, width - 20), -50);
                    enemyCount += 1;
                    if (this.mediumGroup.length > 0) {
                        this.maxEnemies = true;
                    }
                }
                if (this.waveCount > 20 && this.waveCount < 30 && enemyCount < this.waveCount - 20) {
                    this.makeEnemyHeavy(random(20, width - 20), -50);
                    enemyCount += 1;
                    if (this.heavyGroup.length > 0) {
                        this.maxEnemies = true;
                    }
                }

                if (this.waveCount == 10 && enemyCount < 1) {
                    this.makeEnemyLasBoss(random(20, width - 20), -50);
                    enemyCount += 1;
                    if (this.bossGroup.length > 0) {
                        this.maxEnemies = true;
                    }
                }

                if (this.waveCount == 20 && enemyCount < 1) {
                    this.makeEnemyDroneBoss(random(20, width - 20), -50);
                    enemyCount += 1;
                    if (this.bossGroup.length > 0) {
                        this.maxEnemies = true;
                    }
                }

                if (this.waveCount == 30 && enemyCount < 1) {
                    this.makeEnemyMissleBoss(random(20, width - 20), -50);
                    enemyCount += 1;
                    if (this.bossGroup.length > 0) {
                        this.maxEnemies = true;
                    }
                }

            }


        }

        if (enemyCount < 1 && this.maxEnemies == true) {
            this.waveCount += 1;
            this.spawnHealthPowerup(this.hX, height / 3);
            this.spawnMisslePowerup(this.mX, height / 3); 
            this.maxEnemies = false;
        }


        for (let hp = 0; hp < this.pHPgroup.length; hp++) {
            this.pHPgroup[hp].position.y += 2;
        }
        for (let ms = 0; ms < this.pMSgroup.length; ms++) {
            this.pMSgroup[ms].position.y += 2;
        }


        for (let li = 0; li < this.lightGroup.length; li++) {
            this.lightGroup[li].position.y += this.speedYL;
            this.lightGroup[li].position.x += this.speedXL;
        }

        for (let mi = 0; mi < this.mediumGroup.length; mi++) {
            this.mediumGroup[mi].position.y += this.speedYM;
            this.mediumGroup[mi].position.x += this.speedXM;
        }

        for (let hi = 0; hi < this.heavyGroup.length; hi++) {
            this.heavyGroup[hi].position.y += this.speedYH;
            this.heavyGroup[hi].position.x += this.speedXH;
        }

        for (let bi = 0; bi < this.bossGroup.length; bi++) {
            this.bossGroup[bi].position.y += this.speedYB;
            this.bossGroup[bi].position.x += this.speedXB;
        }
    }

    move() {
        for (let lg = 0; lg < this.lightGroup.length; lg++) {
            if (this.lightGroup[lg].position.y <= 0) {
                this.speedYL = 4;
            }

            if (this.lightGroup[lg].position.y >= height / 2.5) {
                this.speedYL = -10;
            }


            if (this.lightGroup[lg].position.x <= 0 || this.lightGroup[lg].position.x >= width) {
                this.speedXL = this.speedXL * -1;
            }
        }

        for (let me = 0; me < this.mediumGroup.length; me++) {
            if (this.mediumGroup[me].position.y <= 0) {
                this.speedYM = 4;
            }

            if (this.mediumGroup[me].position.y >= height / 2.5) {
                this.speedYM = -10;;
            }

            if (this.mediumGroup[me].position.x <= 0 || this.mediumGroup[me].position.x >= width) {
                this.speedXM = this.speedXM * -1;
            }
        }

        for (let hv = 0; hv < this.heavyGroup.length; hv++) {
            if (this.heavyGroup[hv].position.y <= 0) {
                this.speedYH = 4;
            }

            if (this.heavyGroup[hv].position.y >= height / 2.5) {
                this.speedYH = -10;
            }

            if (this.heavyGroup[hv].position.x <= 0 || this.heavyGroup[hv].position.x >= width) {
                this.speedXH = this.speedXH * -1;
            }
        }

        for (let bs = 0; bs < this.bossGroup.length; bs++) {
            if (this.bossGroup[bs].position.y <= 0) {
                this.speedYB = 4;
            }

            if (this.bossGroup[bs].position.y >= height / 2.5) {
                this.speedYB = -10;
            }

            if (this.bossGroup[bs].position.x <= 0 || this.bossGroup[bs].position.x >= width) {
                this.speedXB = this.speedXB * -1;
            }
        }
    }

    shoot() {
        for (let li = 0; li < this.lightGroup.length; li++) {
            if (frameCount % 70 == 0) {
                this.makeEnemyLasersLight(this.lightGroup[li].position.x, this.lightGroup[li].position.y);
                this.laserSound.play();
            }
        }

        for (let mi = 0; mi < this.mediumGroup.length; mi++) {
            if (frameCount % 60 == 0) {
                this.makeEnemyLasersMedium(this.mediumGroup[mi].position.x + 15, this.mediumGroup[mi].position.y);
                this.makeEnemyLasersMedium(this.mediumGroup[mi].position.x - 15, this.mediumGroup[mi].position.y);
                this.laserSound.play();
            }
        }

        for (let hi = 0; hi < this.heavyGroup.length; hi++) {
            if (frameCount % 20 == 0) {
                this.makeEnemyLasersHeavy(this.heavyGroup[hi].position.x + 10, this.heavyGroup[hi].position.y + 10);
                this.makeEnemyLasersHeavy(this.heavyGroup[hi].position.x - 10, this.heavyGroup[hi].position.y + 10);
                this.laserSound.play();
            }
        }

        for (let bi = 0; bi < this.bossGroup.length; bi++) {
            if (this.waveCount == 10 && frameCount % 240 == 0) {
                this.makeBossLasWeapon(this.bossGroup[bi].position.x, this.bossGroup[bi].position.y + 250);
                this.bossLaserSound.play();
            }
        }

        for (let di = 0; di < this.bossGroup.length; di++) {
            if (this.waveCount == 20 && frameCount % 30 == 0) {
                this.makeBossDroneWeapon(this.bossGroup[di].position.x, this.bossGroup[di].position.y);
            }
        }

        for (let ri = 0; ri < this.bossGroup.length; ri++) {
            if (this.waveCount == 30 && frameCount % 90 == 0) {
                this.makeBossMissleWeapon(this.bossGroup[ri].position.x, this.bossGroup[ri].position.y);
                this.missleSound.play();
            }
        }
    }

    damage(laser, target) {
        this.rng = random(0, 100);
        laser.remove();
        target.hp -= 1;
        if (target.hp < 1) {   
            target.remove();
            enemyCount = enemyCount - 1;
            score += 1;
        }
    }

    missleDamage(missle, target){
        missle.remove();
        target.hp -= 20;
        if (target.hp < 1) {   
            target.remove();
            enemyCount = enemyCount - 1;
            score += 1;
        }

    }

    hpPowerups(player, powerup) {
        powerupSound.play();
        powerup.remove();
        player.hp = 10;

    }

    misPowerup(player, powerup) {
        powerupSound.play();
        powerup.remove();
        ship.hasMissles = true;
    }
}
