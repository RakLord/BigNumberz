
function updateData(dataDisplays, game, formatValue) {
    dataDisplays.preons.children().last().html(formatValue(game.layers.the_beginning.preons));
    dataDisplays.quarks.children().last().html(formatValue(game.layers.the_beginning.quarks));
    dataDisplays.leptons.children().last().html(formatValue(game.layers.the_beginning.leptons));
    dataDisplays.protons.children().last().html(formatValue(game.layers.the_beginning.protons));
    dataDisplays.neutrons.children().last().html(formatValue(game.layers.the_beginning.neutrons));
}