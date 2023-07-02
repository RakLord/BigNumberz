import { headerText } from "./functions.js";
import { theBeginningInit } from "./layers/theBeginning.js";
import { settingsInit } from "./settings.js";


let game;
let dataDisplays = {}

const containers = {
    "theBeginningContainer": $("#container-tab-1"),
    "subAtomicContainer": $("#container-tab-2"),
    "matterContainr": $("#container-tab-3"),
    "oblivionContainer": $("#container-tab-4"),
    "settingsContainer": $("#container-tab-99")
}



$(document).ready(function() {
    init();
    tick();  // Stats game loop
});


function init() {
    console.log("init start");
    game = new Game();
    dataDisplays.preons = $("#data-preons");

    theBeginningInit(game, containers.theBeginningContainer);
    settingsInit(game, containers.settingsContainer);

    $("#tab0").on("click", function() {switchTab(0, game);});
    $("#tab1").on("click", function() {switchTab(1, game);});
    $("#tab2").on("click", function() {switchTab(2, game);});
    $("#tab3").on("click", function() {switchTab(3, game);});
    $("#tab4").on("click", function() {switchTab(4, game);});
    $("#tab99").on("click", function() {switchTab(5, game);});



    updateData(dataDisplays, game);
    switchTab(game.tab, game, true)
    headerText("Hi :)");
    console.log("init complete");
}

function tick() {
    game.frameCount++;
    // Runs every 60 frames
    if (game.frameCount >= 60 / game.fpsLimit) {
        game.gameFrame++; // First in "if" statement

        game.layers.the_beginning.preons = game.layers.the_beginning.preons.add(game.layers.the_beginning.preonsInc);
        
        
        updateData(dataDisplays, game);
        
        game.frameCount = 0; // Last in "if" statement
    }        
    requestAnimationFrame(tick);
}