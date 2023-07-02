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
                "neutrons": new Decimal("1e309"),
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
        this.convertDecimal();
        console.log(this);
        console.log("loaded");
    }

    convertDecimal() {
        this.layers.the_beginning.preons = new Decimal(this.layers.the_beginning.preons);
        this.layers.the_beginning.preonInc = new Decimal(this.layers.the_beginning.preonInc);
        this.layers.the_beginning.quarks = new Decimal(this.layers.the_beginning.quarks);
        this.layers.the_beginning.quarksInc = new Decimal(this.layers.the_beginning.quarksInc);
        this.layers.the_beginning.leptons = new Decimal(this.layers.the_beginning.leptons);
        this.layers.the_beginning.leptonsInc = new Decimal(this.layers.the_beginning.leptonsInc);
        this.layers.the_beginning.protons = new Decimal(this.layers.the_beginning.protons);
        this.layers.the_beginning.protonsInc = new Decimal(this.layers.the_beginning.protonsInc);
        this.layers.the_beginning.neutrons = new Decimal(this.layers.the_beginning.neutrons);
        this.layers.the_beginning.neutronsInc = new Decimal(this.layers.the_beginning.neutronsInc);
    }
}


