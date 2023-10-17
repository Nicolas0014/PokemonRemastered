export default class Pokemon {
    constructor(data){
        this._data = data;
        this.name = data.name;        
        this.level = 1;
        this.stat = {
            hp: this._getStat("hp"),
            attack: this._getStat("attack"),
            defense: this._getStat("defense")
        };
        this.current_hp = this.stat.hp;
        this.moves = {};
        this.sprites = {
            front : data.sprites.front_default,
            back : data.sprites.back_default,
        }
    }

    _getStat(name) {
        let statValue = null;
        this._data.stats.forEach(data => {
            if (data.stat.name === name) {
                statValue = data.base_stat;
            }
        })

        return statValue;
    }

    addMove(move) {
        this.moves[move.name] = move;
    }

    attack(opponent) {
        console.log(this.name+" attaque "+opponent.name);
        opponent.current_hp -= 10;
        console.log(opponent);
    }
}