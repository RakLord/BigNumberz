const tabs = {
    "0": "container-tab-1",
    "1": "container-tab-2",
}

function switchTab(newTab, game, first=false) {
    let currentTabString = tabs[Object.keys(tabs)[game.tab]];
    let newTabString = tabs[Object.keys(tabs)[newTab]];
    console.log(currentTabString, newTabString)
    
    if (first) {
        $("#"+newTabString).toggle(); // Initializes last tab opened on game start
    }
    else {
        if (newTab != game.tab) {
            $("#"+currentTabString).toggle();
            game.tab = newTab;
            $("#"+newTabString).toggle();
        }
    }
}