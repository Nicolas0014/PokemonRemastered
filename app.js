import {getPokemon, display} from "./core/tools.js"; 

Promise.all([
    getPokemon("squirtle", ["tackle"]),
    getPokemon("charmander", ["charge"])
]).then(([player, opponent]) => {
    display(player,document.querySelector(".pokemon.player"));
    display(opponent,document.querySelector(".pokemon.opponent"));
    player.attack(opponent);
    opponent.attack(player);
    display(player,document.querySelector(".pokemon.player"));
    display(opponent,document.querySelector(".pokemon.opponent"));
    player.attack(opponent);
    opponent.attack(player);
    display(player,document.querySelector(".pokemon.player"));
    display(opponent,document.querySelector(".pokemon.opponent"));
    player.attack(opponent);
    opponent.attack(player);
    display(player,document.querySelector(".pokemon.player"));
    display(opponent,document.querySelector(".pokemon.opponent"));
})

