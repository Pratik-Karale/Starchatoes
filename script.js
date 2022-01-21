// TODO: hero is able to move but would be nice 
// if u could cut hero.png properly to show the appropriate direction

class Map{
    // takes in mapName  it should be same as the prefix names used in images/maps/
    // example passing it name="Demo" will be converted to 
    // appropriate src(mages/maps/DemoUpper.png and mages/maps/DemoUpper.png)
    constructor(mapName){
        this.upperSrc="images/maps/"+mapName+"Upper.png"
        this.upperImage = new Image();
        this.upperImage.src=this.upperSrc
        this.upperImage.onload = () => {
            this.canDrawUpper=true
        };

        this.lowerSrc="images/maps/"+mapName+"Lower.png"
        this.lowerImage = new Image();
        this.lowerImage.src=this.lowerSrc
        console.log(this.lowerImage)
        this.lowerImage.onload = () => {
            this.canDrawLower=true
        };
    }
    drawLower(ctx){
        if(this.canDrawLower){
            ctx.drawImage(this.lowerImage,0,0)
        }}
    drawUpper(ctx){
        if(this.canDrawUpper){
            ctx.drawImage(this.upperImage,0,0)
        }
    }
}

class Hero{
    constructor(x,y){
        this.x=x || 0
        this.y=y || 0
        this.src="images/characters/people/hero.png"
        this.image=new Image()
        this.image.src=this.src
        this.canDraw=false
        this.image.onload=()=>{
            this.canDraw=true
        }
        this.direction="down"
    }
    // 1unit of x coord =16px 
    draw(ctx){
        if(this.canDraw){
            const x=this.x
            const y=this.y
            ctx.drawImage(this.image,
                0,0,32,32, // replace the 0,0 with needed x,y val for the cut
                x*16-8,y*16-18,
                32,32)
        }
    }
    move(direction){
        console.log(direction)
        switch (direction) {
            case "down":
                this.y++
                break;
            case "up":
                this.y--
                break;
            case "right":
                this.x++
                break;
            case "left":
                this.x--
                break;
        }
    }

}

const canvasElem=document.querySelector("canvas")
const canvasCtx=canvasElem.getContext("2d")


let demoMap=new Map("Demo")
let hero=new Hero()
// intead of using requestAnimationFrame setInterval is used 
setInterval(()=>{
    canvasCtx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    demoMap.drawLower(canvasCtx)
    hero.draw(canvasCtx)
    demoMap.drawUpper(canvasCtx)
},200)


document.addEventListener("keydown",(e)=>{
    if(e.code.toLowerCase().includes("arrow")){
        const direction=e.code.toLowerCase().slice(5,e.code.length)
        hero.move(direction)
    }
})
