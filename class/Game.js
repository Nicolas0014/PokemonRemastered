export default class Game {
    constructor(player1, player2) {
        player2.isOpponent = true;
        this.player1 = player1;
        this.player2 = player2;
    }

    launch(){
        this.setGui();
    }

    setGui(){
        const atqButton = document.createElement('button');
        atqButton.innerText = "Attaquer";
        atqButton.className = "gui-button";
        atqButton.addEventListener('click', this.player1.attack.bind(this.player1, this.player2))

        document.querySelector(".gui").appendChild(atqButton);
    }


}