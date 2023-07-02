class Game {
    constructor(data) {
        this.version = "0.0.1";

        this.fpsLimit = 30;
        this.gameFrame = 0;
        this.frameCount = 0;

        this.tab = 0;

        this.points = 0;
        
        this.layers = {
            "the_beginning": {
                "preons": new Decimal("1"),
                "preonInc": new Decimal("0"),
                "quarks": new Decimal("0"),
                "quarksInc": new Decimal("0"),
                "leptons": new Decimal("0"),
                "leptonsInc": new Decimal("0"),
                "protons": new Decimal("0"),
                "protonsInc": new Decimal("0"),
                "neutrons": new Decimal("0"),
                "neutronsInc": new Decimal("0"),
                "upgradesBought": {
                    "the-beginning-button-0": false,
                },
            },
            "sub_atomic": {
                "test": new Decimal("0")
            }
        }
    }

    saveGame() {
        let gameData = JSON.stringify(this);
        localStorage.setItem("gameData", gameData);
        console.log("saved");
    }

    loadGame() {
        let gameData = localStorage.getItem("gameData");
        let savedGame = JSON.parse(gameData);
        Object.assign(this, savedGame);
        console.log(this);
        console.log("loaded");
    }
}


