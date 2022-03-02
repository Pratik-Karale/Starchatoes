const mainContainer = document.querySelector(".main-container")
const canvasElem = document.querySelector("canvas")
const canvasCtx = canvasElem.getContext("2d")

let gamePaused = false
let mapNow = maps.factoryFrontSide

function flashScreen(){
    let overlay=document.createElement("div")
    mainContainer.appendChild(overlay)
    overlay.classList.add("transition-layer")
    setTimeout(()=>{
        overlay.remove()
    },3000)
}


let screenMap = new Map(mapNow.lowerSrc, mapNow.upperSrc)
let charObstacles = Object.values(mapNow.gameObjects).map(
    (gameObject) => {
        return `${gameObject.x},${gameObject.y}`;
    }
)

let allWalls = [...mapNow.walls, ...charObstacles]


function moveChars() {
    // console.log(gamePaused)
    if (gamePaused)return;
    Object.values(mapNow.gameObjects).forEach(
        (gameObject) => {
            if (mapNow.defaultMovement.hasOwnProperty(gameObject.name) && !gamePaused) {
                directions = mapNow.defaultMovement[gameObject.name]
                if (gameObject.canMove(directions[gameObject.currentPredefinedMoveIndex], allWalls)) {
                    allWalls.splice(allWalls.indexOf(`${gameObject.x},${gameObject.y}`), 1)
                    gameObject.move(directions[gameObject.currentPredefinedMoveIndex])
                    allWalls.push(`${gameObject.x},${gameObject.y}`)
                }
                gameObject.currentPredefinedMoveIndex++
                if (gameObject.currentPredefinedMoveIndex == directions.length)
                    gameObject.currentPredefinedMoveIndex = 0;
            }
        }
    )
}

let frame = 0
function step() {
    let camX = mapNow.gameObjects.hero.x
    let camY = mapNow.gameObjects.hero.y

    canvasCtx.clearRect(0, 0, canvasElem.width, canvasElem.height);

    screenMap.drawLower(canvasCtx, camX, camY)

    if (!(frame % 250)) moveChars();

    const sortedGameObjects = Object.entries(mapNow.gameObjects).sort((a, b) => b[1].y - a[1].y)
    for (gameObject of sortedGameObjects) {
        if (gameObject[1].name == "hero") {
            gameObject[1].draw(canvasCtx)
            continue
        }
        gameObject[1].draw(canvasCtx, camX, camY)
    }


    screenMap.drawUpper(canvasCtx, camX, camY)

    frame++
    if (frame > 300) frame = 0;

    requestAnimationFrame(() => step())
}
step()


document.addEventListener("keydown", (e) => {
    if (e.code.toLowerCase().includes("arrow")) {
        const direction = e.code.toLowerCase().slice(5, e.code.length)
        // console.log([...mapNow.walls,...charObstacles])
        if (mapNow.gameObjects.hero.canMove(direction, allWalls) && !gamePaused) {
            allWalls.splice(allWalls.indexOf(`${mapNow.gameObjects.hero.x},${mapNow.gameObjects.hero.y}`), 1)
            mapNow.gameObjects.hero.move(direction)
            if (mapNow.doors.hasOwnProperty(`${mapNow.gameObjects.hero.x},${mapNow.gameObjects.hero.y}`)) {
                flashScreen()
                changeMap(mapNow.doors[`${mapNow.gameObjects.hero.x},${mapNow.gameObjects.hero.y}`])
            }
            allWalls.push(`${mapNow.gameObjects.hero.x},${mapNow.gameObjects.hero.y}`)
        }
    }

    if (e.code == "Enter" && !mapNow.gameObjects.hero.canMove(mapNow.gameObjects.hero.direction, allWalls) && !gamePaused && !document.querySelector(".message-box") && !document.querySelector(".ask-box") && !document.querySelector(".container")) {
        let otherChar = Object.entries(mapNow.gameObjects).find(
            (keyVal) => mapNow.gameObjects.hero.coordInFront(keyVal[1].x, keyVal[1].y)
        )
        otherChar = otherChar[1]
        if (mapNow.dialogues.hasOwnProperty(otherChar.name)) {
            if (mapNow.dialogues[otherChar.name].hasOwnProperty("ask")) {
                otherChar.ask(mapNow.dialogues[otherChar.name].ask, { yes: mapNow.dialogues[otherChar.name].yes, no: mapNow.dialogues[otherChar.name].no })
            } else {
                otherChar.speak(mapNow.dialogues[otherChar.name].msg)
            }
        }
        if(!otherChar.friendly){
            const battle=new Battle(mapNow.gameObjects.hero,otherChar)
            flashScreen()
            battle.start()
        }
    }
})
document.addEventListener("keyup", (e) => {
    if (e.code.toLowerCase().includes("arrow")) {
        const direction = e.code.toLowerCase().slice(5, e.code.length)
        mapNow.gameObjects.hero.pause(direction)
    }
})
function changeMap(name) {
    gamePaused = false
    mapNow = maps[name]

    screenMap = new Map(mapNow.lowerSrc, mapNow.upperSrc)
    charObstacles = Object.values(mapNow.gameObjects).map(
        (gameObject) => {
            return `${gameObject.x},${gameObject.y}`;
        }
    )

    allWalls = [...mapNow.walls, ...charObstacles]
    setTimeout(()=>{allWalls.splice(-1,1)},1000)

}
