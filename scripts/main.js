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

    updateData(dataDisplays, game);

    headerText("Hi :)");
    console.log("init complete");
}

function tick() {
    game.frameCount++;
    // Runs every 60 frames
    if (game.frameCount >= 60 / game.fpsLimit) {
        game.gameFrame++; // First in "if" statement

        game.layers.the_beginning.preons.plus(new Decimal("1"));
        console.log(game.layers.the_beginning.preons);
        updateData(dataDisplays, game);

        game.frameCount = 0; // Last in "if" statement
    }        
    requestAnimationFrame(tick);
}