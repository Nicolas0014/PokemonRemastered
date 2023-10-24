export default class Pokemon {
    constructor(data){
        this.isOpponent = false;
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
        opponent.refreshDisplay();
    }

    refreshDisplay() {
        const container = document.querySelector('.pokemon.'+ (this.isOpponent ? 'opponent' : 'player'))
        // Gestion des points de vie
        const progress = container.querySelector("progress");
        progress.value = this.current_hp;
        progress.max = this.stat.hp;
        const hp_status = container.querySelector(".hp");
        if (hp_status) {
            hp_status.innerText = this.current_hp+"/"+this.stat.hp;
        }
        const hp_rate = Math.round(100*this.current_hp/this.stat.hp);
        if (hp_rate < 25) {
            progress.style.setProperty("--progress-background","red");
        } else if (hp_rate <75) {
            progress.style.setProperty("--progress-background","orange");
        } else {
            progress.style.setProperty("--progress-background","green");
        }
    }
}