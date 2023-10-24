import {getPokemon, display} from "./core/tools.js"; 
import Game from "./class/Game.js";

Promise.all([
    getPokemon("squirtle", ["tackle"]),
    getPokemon("charmander", ["charge"])
]).then(([player, opponent]) => {
    display(player,document.querySelector(".pokemon.player"));
    display(opponent,document.querySelector(".pokemon.opponent"));
    const game = new Game(player, opponent);
    game.launch();
})

