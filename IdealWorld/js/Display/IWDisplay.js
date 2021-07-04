import { IWSystem } from "../System/IWSystem.js"

class IWDisplay {
    #doc;
    #style;
    DisplayWindow;
    CardDetailWindow;
    StageWindow;
    PlayerDetailWindow;
    EnemyHandWindow;
    PlayerHandWindow;

    constructor(iwSystem, document, displayWindow) {
        this.#doc = document;
        let styleSheet = this.#doc.getElementsByTagName(`style`);
        console.log(styleSheet);
        if (styleSheet.length == 0) {
            styleSheet = document.createElement(`style`);
            styleSheet.type = `text/css`;
            this.#doc.getElementsByTagName(`head`)[0].appendChild(styleSheet);            
        }

        this.#style = this.#doc.styleSheets[0];
        this.DisplayWindow = displayWindow;        
        this.initialize();        
    }

    AddCssRule(sector, rule) {
        this.#style.insertRule(`${sector}{ ${rule} }`, 0);
    }

    initialize() {
        this.AddCssRule(`#${this.DisplayWindow.id}`, `width:1100px`);
        this.AddCssRule(`.CardDetailWindow`, `float:left; width:300px; height:700px;`);
        this.AddCssRule(`.StageWindow`, `float:left; width:500px; height:700px;`);
        this.AddCssRule(`.StageWindow`, `float:left; width:500px; height:700px;`);
        this.AddCssRule(`.PlayerDetailWindow`, `float:left; width:300px; height:700px;`);        
        this.AddCssRule(`.UpperLayer`, `width:1100px; height:200px;`);
        this.AddCssRule(`.MiddleLayer`, `width:1100px; height:700px;`);
        this.AddCssRule(`.LowerLayer`, `width:1100px; height:200px;`);
        this.AddCssRule(`.EnemyHandWindow`, `width:700px; height:200px; margin:auto;`);
        this.AddCssRule(`.PlayerHandWindow`, `width:700px; height:200px; margin:auto;`);

        let upperLayer = this.#doc.createElement(`div`);
        upperLayer.id = `UpperLayer`;
        upperLayer.className = `UpperLayer`;
        this.DisplayWindow.appendChild(upperLayer);
        let middleLayer = this.#doc.createElement(`div`);
        middleLayer.id = `MiddleLayer`;
        middleLayer.className = `MiddleLayer`;
        this.DisplayWindow.appendChild(middleLayer);
        let lowerLayer = this.#doc.createElement(`div`);
        lowerLayer.id = `LowerLayer`;
        lowerLayer.className = `LowerLayer`;
        this.DisplayWindow.appendChild(lowerLayer);

        let div = this.#doc.createElement(`div`);
        div.id = `EnemyHandWindow`;
        div.className = `EnemyHandWindow`;
        this.EnemyHandWindow = div;
        upperLayer.appendChild(div);

        div = this.#doc.createElement(`div`);        
        div.id = `CardDetailWindow`;
        div.className = `CardDetailWindow`;
        this.CardDetailWindow = div;
        middleLayer.appendChild(div);
        div = this.#doc.createElement(`div`);
        div.id = `StageWindow`;
        div.className = `StageWindow`;
        this.StageWindow = div;
        middleLayer.appendChild(div);
        div = this.#doc.createElement(`div`);
        div.id = `PlayerDetailWindow`;
        div.className = `PlayerDetailWindow`;
        this.PlayerDetailWindow = div;
        middleLayer.appendChild(div);

        div = this.#doc.createElement(`div`);
        div.id = `PlayerHandWindow`;
        div.className = `PlayerHandWindow`;
        this.PlayerHandWindow = div;
        lowerLayer.appendChild(div);
        
    }

    static showCard(cards) {
        //var d = document.getElementById(aa);
        //d.style = 

    }
}

export { IWDisplay };