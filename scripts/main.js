import { headerText } from "./functions.js";

let game;
let dataDisplays = {}

$(document).ready(function() {
    init();
    tick();  // Stats game loop
});


function init() {
    console.log("init start");
    game = newGame();
    dataDisplays.preons = $("#data-preons");


    $("#tab0").on("click", function() {switchTab(0, game);});
    $("#tab1").on("click", function() {switchTab(1, game);});
    $("#tab2").on("click", function() {switchTab(2, game);});
    $("#tab3").on("click", function() {switchTab(3, game);});
    $("#tab4").on("click", function() {switchTab(4, game);});
    $("#tab99").on("click", function() {switchTab(99, game);});



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

        game.layers.the_beginning.preons = game.layers.the_beginning.preons.plus(new Decimal(("1", "10")));
        updateData(dataDisplays, game);
        
        game.frameCount = 0; // Last in "if" statement
    }        
    requestAnimationFrame(tick);
}