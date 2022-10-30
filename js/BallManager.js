class BallManager{
    constructor(){
        this.group;
        this.minArc=250;
        this.maxArc=290;
        this.startSpeed=2;
        this.size=40;
    }
    setup(){
        this.group=new Group();
        this.group.add(
            this.makeBall(
                random(W/2-100,W/2+100),
                H-300,
                this.size
            )
        )
    }
    controls(){

    }
    draw(){

    }
    makeBall(x,y,size){
        let tempBall=createSprite(x,y,size);
        tempBall.addSpeed(
            2,
            random(
                this.minArc,
                this.maxArc
            )
        );

        tempBall.debug=true
        return tempBall
    }
}