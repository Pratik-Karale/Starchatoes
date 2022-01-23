class Battle {
    constructor(hero, opponent) {
        gamePaused = true
        this.hero = hero
        this.opponent = opponent
        this.attackerNow = Math.round(Math.random()) ? this.hero : this.opponent
        this.createBattleScreen()
    }
    createBattleScreen() {
        this.battleScreen = document.createElement("div")
        this.battleScreen.classList.add("battle-screen")
        mainContainer.appendChild(this.battleScreen)

        this.heroHpBox = document.createElement("div")
        this.heroHpBox.classList.add("hero-hp-box")
        this.heroHpBox.innerHTML = `
        <label for="file">HP</label>
        <progress id="file" value="${this.hero.hp}" max="100"></progress>
        `
        this.heroCharDiv = document.createElement("div")
        this.heroCharDiv.classList.add("crop")
        this.heroCharDiv.classList.add("crop-hero")
        this.heroCharDiv.innerHTML = `<img src="${this.hero.src}">`

        this.oppCharDiv = document.createElement("div")
        this.oppCharDiv.classList.add("crop")
        this.oppCharDiv.classList.add("crop-opp")
        this.oppCharDiv.innerHTML = `<img src="${this.opponent.src}">`


        this.oppHpBox = document.createElement("div")
        this.oppHpBox.classList.add("opp-hp-box")
        this.oppHpBox.innerHTML = `
        <label for="file">HP</label>
        <progress id="file" value="${this.opponent.hp}" max="100"></progress>
        `
        this.battleScreen.appendChild(this.heroHpBox)
        this.battleScreen.appendChild(this.oppHpBox)
        this.battleScreen.appendChild(this.heroCharDiv)
        this.battleScreen.appendChild(this.oppCharDiv)
    }

    attack(from, atk) {
        // console.log([this.hero.hp,this.opponent.hp])
        // console.log((this.hero.hp !=0 && this.opponent.hp !=0))
        atk = `${from.name.toUpperCase()} used ${atk}`
        const messageBox = document.createElement("div")
        messageBox.classList.add("message-box")
        this.battleScreen.appendChild(messageBox)
        const messageCharElems = atk.split("")
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
                if (this.hero.hp != 0 && this.opponent.hp != 0) {
                    (from.name == "hero") ? this.oppAtk() : this.heroAtk()
                } else {
                    if (this.hero.hp == 0 && this.opponent.hp == 0) {
                        this.tieResult()
                    } else if (this.hero.hp == 0) {
                        this.losingResult()
                    } else {
                        this.winningResult()
                    }
                    this.stop()
                }
            }
            completeMessage()
        })

        document.addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                if (messageBox.querySelector(".hidden-char") == null) {
                    messageBox.remove()
                    // console.log((this.hero.hp > -1 && this.opponent.hp > -1))
                    if (this.hero.hp != 0 && this.opponent.hp != 0) {
                        (from.name == "hero") ? this.oppAtk() : this.heroAtk()
                    } else {
                        if (this.hero.hp == 0 && this.opponent.hp == 0) {
                            this.tieResult()
                        } else if (this.hero.hp == 0) {
                            this.losingResult()
                        } else {
                            this.winningResult()
                        }
                        this.stop()
                    }
                }

                completeMessage()
            }
        })
    }

    heroAtk() {
        const randNum = Math.round(Math.random() * 10)
        // console.log(randNum)
        if (randNum < 2) {
            this.attack(this.hero, "Potato Throw..but it Missed!!!")
        } else if (randNum > 1 && randNum < 10) {
            this.oppHpBox.querySelector("progress").value = this.oppHpBox.querySelector("progress").value - 20
            this.attack(this.hero, "Potato Throw")
        } else {
            this.oppHpBox.querySelector("progress").value = this.oppHpBox.querySelector("progress").value - 40
            this.attack(this.hero, "Potato Throw with CRITICAL HIT!!")
        }
        this.opponent.hp = +this.oppHpBox.querySelector("progress").value
    }

    oppAtk() {setTimeout(()=>{
        const randNum = Math.round(Math.random() * 10)
        if (randNum < 2) {
            this.attack(this.opponent, "Mud Throw..but it Missed!!!")
        } else if (randNum >= 2 && randNum < 10) {
            this.heroHpBox.querySelector("progress").value = this.heroHpBox.querySelector("progress").value - 20
            this.attack(this.opponent, "Mud Throw")
        } else {
            this.heroHpBox.querySelector("progress").value = this.heroHpBox.querySelector("progress").value - 40
            this.attack(this.opponent, "Mud Throw with CRITICAL HIT!!")
        }
        this.hero.hp = +this.heroHpBox.querySelector("progress").value,600})
    }
    start() {
        const attackers = [this.hero, this.opponent]
        let attackerNowIndex = Math.round((Math.random() * 10) / 10)
        attackers[attackerNowIndex].name == "hero" ? this.heroAtk() : this.oppAtk()
    }
    stop() {
        gamePaused=false
        // console.log(`THE HEROS HP IS ${this.hero.hp}`)
        this.battleScreen.remove()
        this.opponent.friendly=true

        Array.from(document.querySelectorAll(".start")).forEach((elem)=>elem.addEventListener("click",() => {
            document.querySelectorAll(".wrap .container").forEach((cont) => cont.remove())
            mapNow.gameObjects.hero.hp = 100
        }, { once: true }))
        // console.log("STAHPPP")
    }
    tieResult() {
        let resultDiv = document.createElement("div")
        resultDiv.classList.add("wrap")
        resultDiv.innerHTML = `<div class="container">
        <div class="dead">You Both Died!</div>
        <img class="rick" src="https://c.tenor.com/Fu2QOQwybCwAAAAC/johnny-test-aww-its-a-tie.gif" alt="">
        <button class="start">Respawn</button>
    </div>
        `
        document.body.appendChild(resultDiv)
    }
    winningResult() {
        let resultDiv = document.createElement("div")
        resultDiv.classList.add("wrap")
        resultDiv.innerHTML = `<div class="container">
        <div class="dead">You WON!</div>
        <img class="rick" src="https://c.tenor.com/6jy2m2guxFQAAAAC/rainbow-swag.gif" alt="">
        <button class="start">Respawn</button>
    </div>
        `
        document.body.appendChild(resultDiv)
    }
    losingResult() {
        // console.log("YOU LOST!!!!!!")
        let resultDiv = document.createElement("div")
        resultDiv.classList.add("wrap")
        resultDiv.innerHTML = `<div class="container">
        <div class="dead">You Died!</div>
        <img class="rick" src="https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif" alt="">
        <button class="start">Respawn</button>
    </div>
        `
        document.body.appendChild(resultDiv)
    }
}