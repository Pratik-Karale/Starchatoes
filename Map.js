class Map{
    constructor(lowerSrc,upperSrc){
        this.upperSrc=upperSrc
        this.upperImage = new Image();
        this.upperImage.src=this.upperSrc
        this.upperImage.onload = () => {
            this.canDrawUpper=true
        };

        this.lowerSrc=lowerSrc
        this.lowerImage = new Image();
        this.lowerImage.src=this.lowerSrc
        console.log(this.lowerImage)
        this.lowerImage.onload = () => {
            this.canDrawLower=true
        };
    }
    drawLower(ctx,heroX,heroY){
        if(this.canDrawLower){
            ctx.drawImage(this.lowerImage,getXPosMap(0,heroX),getYPosMap(0,heroY))
        }}
    drawUpper(ctx,heroX,heroY){
        if(this.canDrawUpper){
            ctx.drawImage(this.upperImage,getXPosMap(0,heroX),getYPosMap(0,heroY))
        }
    }
}
