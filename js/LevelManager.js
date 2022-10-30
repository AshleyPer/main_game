class LevelManager{
    constructor(rowCount=3,blockCount=8){
        this.x=W/2;
        this.blockGroup;
        this.edgeGroup;
        this.rowCount=rowCount;
        this.blockCount=blockCount;
        this.blockWidth=60;
        this.blockHeight=20;
        this.levelWidth=70*this.blockCount;
        console.log(this.levelWidth)
    }
    setup(){
        this.blockGroup=new Group();
        this.edgeGroup=new Group();
        for(let i=0; i<this.rowCount; i++){
            const y=H/4+i*30;
            this.makeRow(this.blockCount,y)
        }
    }
    makeEdge(x,y,w,h){

    }
    makeRow(numOfBlocks,y){
        for(let i=0; i<numOfBlocks; i++){
            const x=W/2-this.levelWidth/2+i*70;
            this.blockGroup.add(this.makeBlock(x,y))
        }
    }
    makeBlock(x,y){
        let tempBlock=createSprite(x,y,this.blockWidth,this.blockHeight);
        tempBlock.immovable=true;
        tempBlock.shapeColor="blue"
        return tempBlock;
    }
    draw(balls){
        balls.group.bounce(this.blockGroup,this.ballBouncesOffBlock);
    }
    ballBouncesOffBlock(ball,block){
        block.remove();
    }
}