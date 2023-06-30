class Game {
    constructor(data) {
        this.version = "0.0.1";
    
        this.points = 0;
        
        this.layers = {
            "the_beginning": {
                "preons": new Decimal("1"),
                "quarks": new Decimal("0"),
                "leptons": new Decimal("0"),
                "protons": new Decimal("0"),
                "Neutrons": new Decimal("0")
            },
            "sub_atomic": {
                "test": new Decimal("0")
            }
        }

        this.fpsLimit = 30;
        this.gameFrame = 0;
        this.frameCount = 0;
    }
}


