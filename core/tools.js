import Pokemon from "../class/Pokemon.js";
import Move from "../class/Move.js";


async function getPokemon(name, moves){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name);
    const data = await response.json();
    const pokemon = new Pokemon(data);
    for (const movename of moves){
        let move = await getMove(movename);
        pokemon.addMove(move);
    }
    return pokemon;
}

async function getMove(name){
    const response = await fetch("https://pokeapi.co/api/v2/move/"+name);
    const data = await response.json();
    const move = new Move(data);
    return move;
}

function display(pokemon,container){
    // Verification du container
    // throw "error custom";
    // Image 
    const img = container.querySelector(".sprite img");
    img.src = container.classList.contains("player") ? pokemon.sprites.back : pokemon.sprites.front;
    img.alt = pokemon.name;
    // Gestion des points de vie
    const progress = container.querySelector("progress");
    progress.value = pokemon.current_hp;
    progress.max = pokemon.stat.hp;
    const hp_status = container.querySelector(".hp");
    if (hp_status) {
        hp_status.innerText = pokemon.current_hp+"/"+pokemon.stat.hp;
    }
    const hp_rate = Math.round(100*pokemon.current_hp/pokemon.stat.hp);
    if (hp_rate < 25) {
        progress.style.setProperty("--progress-background","red");
    } else if (hp_rate <75) {
        progress.style.setProperty("--progress-background","orange");
    } else {
        progress.style.setProperty("--progress-background","green");
    }
}
export {getPokemon, display};