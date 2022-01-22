class Character {
    constructor(name, x, y) {
        this.name = name
        this.currentPredefinedMoveIndex = 0
        this.x = x || 0
        this.y = y || 0
        this.src = `images/characters/people/${name}.png` || "images/characters/people/hero.png"
        this.image = new Image()
        this.image.src = this.src
        this.canDraw = false
        this.image.onload = () => {
            this.canDraw = true
        }
        this.frameXCoords = 0
        this.frameYCoords = 0
        this.direction = "down"
        this.currentAnimationFrame = 0
    }
    // 1unit of x coord =16px 
    draw(ctx, camX, camY) {
        if (this.canDraw) {
            camX = camX || this.x
            camY = camY || this.y
            const x = this.x
            const y = this.y
            ctx.drawImage(this.image,
                this.frameXCoords, this.frameYCoords, 32, 32, // replace the 0,0 with needed x,y val for the cut
                // x*16-8+10.5*16-x,y*16-18+6*16-y,
                getXPos(x, camX), getYPos(y, camY),
                32, 32)
        }
    }
    move(direction) {
        switch (direction) {
            case "down":
                if (this.atLastFrame) {
                    this.frameXCoords = 0
                }
                this.frameYCoords = 0
                this.frameXCoords += 32
                this.y++
                break;
            case "up":
                if (this.atLastFrame) {
                    this.frameXCoords = 0
                }
                this.frameYCoords = 2 * 32
                this.frameXCoords += 32
                this.y--
                break;
            case "right":
                if (this.atLastFrame) {
                    this.frameXCoords = 0
                }
                this.frameYCoords = 1 * 32
                this.frameXCoords += 32
                this.x++
                break;
            case "left":
                if (this.atLastFrame) {
                    this.frameXCoords = 0
                }
                this.frameYCoords = 3 * 32
                this.frameXCoords += 32
                this.x--
                break;
        }
        console.log({ x: this.x, y: this.y })
    }
    get atLastFrame() {
        return (this.frameXCoords / 32) > 2
    }
    pause(direction) {
        switch (direction) {
            case "down":
                this.frameXCoords = 0
                this.frameYCoords = 0
                break;
            case "up":
                this.frameXCoords = 0
                this.frameYCoords = 2 * 32
                break;
            case "right":
                this.frameXCoords = 0
                this.frameYCoords = 1 * 32
                break;
            case "left":
                this.frameXCoords = 0
                this.frameYCoords = 3 * 32
                break;
        }
        this.direction = direction
    }
    canMove(direction, walls) {
        walls = JSON.stringify(walls)
        console.log(walls)
        switch (direction) {
            case "down":
                console.log(JSON.stringify(`${this.x},${this.y + 1}`))
                console.log(walls)
                if (walls.includes(JSON.stringify(`${this.x},${this.y + 1}`))) return false;
                break;
            case "up":
                if (walls.includes(JSON.stringify(`${this.x},${this.y - 1}`))) return false;
                break;
            case "right":
                if (walls.includes(JSON.stringify(`${this.x + 1},${this.y}`))) return false;
                break;
            case "left":
                if (walls.includes(JSON.stringify(`${this.x - 1},${this.y}`))) return false;
                break;
        }
        return true
    }
    coordInFront(x, y) {
        switch (this.direction) {
            case "down":
                return y == this.y + 1
                break;
            case "up":
                return y == this.y - 1
                break;
            case "right":
                return x == this.x + 1
                break;
            case "left":
                return x == this.x - 1
                break;
        }
        return false
    }
    speak(message) {
        gamePaused = true
        const messageBox = document.createElement("div")
        messageBox.classList.add("message-box")
        mainContainer.appendChild(messageBox)

        const messageCharElems = message.split("")
            .map(
                (char) => {
                    let charSpan = document.createElement("span")
                    charSpan.innerText = char
                    charSpan.classList.add("hidden-char")
                    return charSpan
                }
            );
        messageCharElems.forEach((element, i) => {
            messageBox.appendChild(element)
            setTimeout(() => {
                element.classList.remove("hidden-char")
            }, 70 * i)
        });
        const completeMessage = () => messageCharElems.forEach(elem => elem.classList.remove("hidden-char"))
        messageBox.addEventListener("click", () => {
            if (messageBox.querySelector(".hidden-char") == null) {
                messageBox.remove()
                gamePaused = false
            }
            completeMessage()
        })
        document.addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                if (messageBox.querySelector(".hidden-char") == null) {
                    messageBox.remove()
                    gamePaused = false
                }
                completeMessage()
            }
        })
    }

    ask(question,answers){
        const askBox = document.createElement("div")
        askBox.classList.add("ask-box")
        mainContainer.appendChild(askBox)

        askBox.innerHTML=`${question}<button>Yes</button><button>No</button>`
        askBox.querySelectorAll("button").forEach((elem)=>{
            elem.addEventListener("click",(e)=>{
                this.speak(answers[e.target.innerText.toLowerCase()])
                askBox.remove()
            })
        })
    }
}
function getXPos(x, camX) {
    return (x * 16 - 8) + (10.5 * 16) - camX * 16
}
function getYPos(y, camY) {
    return (y * 16 - 18) + (6 * 16) - camY * 16
}
function getXPosMap(x, camX) {
    return (x * 16) + (10.5 * 16) - camX * 16
}
function getYPosMap(y, camY) {
    return (y * 16) + (6 * 16) - camY * 16
}
