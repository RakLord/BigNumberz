

export function theBeginningInit(game, tabContainer) {

    $.each(game.layers.the_beginning.upgradesBought, function(key, value) {
        console.log(key, value);
        if (value === true) {
            $("#"+key).remove();
        }
      });
      
    let startButton = $("#the-beginning-button-0");
    startButton.click(function() {
        game.layers.the_beginning.preonsInc = new Decimal(0.0001);
        startButton.remove();

    });
}