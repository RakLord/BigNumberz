 function newGame() {
    return new Game();
}

function saveGame() {
    localStorage.setItem("saveGame", getSaveString());
    console.log("Saved");
}

function getSaveString() {
    let save = getMinimalGameObj();
    return JSON.stringify(save);
}

function getMinimalGameObj() {
    let ret = {
        version: game.version,
        points: game.points,

    };
    console.log(ret);
    return ret;
}