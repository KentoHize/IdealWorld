import { IWSystem } from "../System/IWSystem.js"
import { IWDisplayInitializer } from "../Display/IWDisplayInitializer.js"

class IWDisplay {
    
    iwSystem;
    #doc;
    DisplayWindow;
    CardDetailWindow;
    MainWindow;
    PlayerDetailWindow;
    EnemyHandWindow;
    PlayerHandWindow;

    constructor(iwSystem, document, displayWindow) {
        IWDisplayInitializer.initialize(iwSystem, document, displayWindow);
        
        //let cards = [{ name:`card1`, ap:3, dp:3, mdp:3, description:`this is a card.`}];
        this.#doc = document;
        //this.showCardDetail(cards[0]);
    }

    

    showCardDetail(card) {
        //this.#doc.getElementById(`CardDetailTopRight`).textContent = card.mdp;
        //console.log(CardDetailTopRight);
        this.#doc.getElementById(`CardDetailTopRight`).textContent = card.mdp;
        this.#doc.getElementById(`CardDetailBottomRight`).textContent = card.dp;
        this.#doc.getElementById(`CardDetailBottomMiddle`).textContent = card.name;
        this.#doc.getElementById(`CardDetailBottomLeft`).textContent = card.ap;
        this.#doc.getElementById(`CardDescription`).textContent = card.description;
        

        //CardDetailTopRight.replaceChildren();
        //CardDetailTopRight.appendChild(txtNode);

        //txtNode = this.#doc.createTextNode(card.dp);
        //CardDetailBottomRight.replaceChildren();
        //CardDetailBottomRight.appendChild(txtNode);

        //CardDetailBottomLeft.innerHTML = `${card.ap}`;
        //CardDetailBottomMiddle.innerHTML = `${card.name}`;
        //var d = document.getElementById(aa);
        //d.style = 

    }
}

export { IWDisplay };