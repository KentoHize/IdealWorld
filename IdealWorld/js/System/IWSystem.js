import { CardsContainer } from "./cardsContainer.js";
import { Action } from "./Action.js";

class IWSystem {    

    Players;
    PublicArea;
    Actions = [];

    ActivePlayer;

    constructor() {
        //initialize
        const drawAction = new Action();
        drawAction.ID = 1;
        drawAction.doAction =
            playerIndex => {
                this.Players[playerIndex].Area.HandCards.add(
                    this.Players[playerIndex].Area.Deck.draw());
            }
        this.Actions.push(drawAction);
    }

    

    executeAction(playerID, action) {
        //執行Action並把它紀錄下來
        alert(action);
    }

    listAllAction(playerID) {

    }
    
}

export { IWSystem };