//load images - different for each - PARAMETER
//load animation attack
//load animation death

//positions
    //start position
    //change postition
    //change directions - due to ?

//start life
//reduce life
//remove body

//interact with player
    //when enemy collide player - changeAnimation
//interact with scene
    //tbc

//enemy group?


// start of the enemy class
   // basic function, one direction
   //lots still to do
class Enemy {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.attackEast;
        this.runEast;
        this.enemySprite;
       
    }

//different enemy animations - parameter?
   loadEnemyAnimations() {
    // test section - one enemy red ninja - one direction
        
        this.attackEast = loadAnimation('assets/img/enemies/tier1_red_guy/attack/attack1.png', 'assets/img/enemies/tier1_red_guy/attack/attack6.png');
        this.runEast = loadAnimation('assets/img/enemies/tier1_red_guy/run/run1.png', 'assets/img/enemies/tier1_red_guy/run/run4.png')
      
    }

    createEnemy() {
        this.enemySprite = createSprite(this.positionX, this.positionY, 40);
        this.enemySprite.addAnimation('runEast', this.runEast);
        this.enemySprite.addAnimation('attackEast', this.attackEast);
       
        this.enemySprite.debug = true;
        this.enemySprite.scale = 4;
        this.enemySprite.setSpeed(0.5,0);

    }
    move() {
        //due to interaction with scenery or player
       
      
    }

    attackAnimation() {
       // if the enemy collides with player - change animation(attackAnimation) with conditions


        
    }

    life(){
        //monitoring hits
    }

    death(){
        //max hits causes death
           // remove body after time
    }
    
}

